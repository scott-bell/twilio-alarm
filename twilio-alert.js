const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const bodyParser = require('body-parser');
var config = require('./config.js');
const app = express();
const ALARM_TEXT = "*** Alarm Activated ***";

app.use(bodyParser());

function findUser(callerId)
{
	for (var i = 0; i < config.users.length; i++) 
	{
		let user = config.users[i];
		if (user.tel = callerId) { return user; }
	}
	return null;
}

var client = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

app.post('/voice', (request, response) => {
	let callerId = request.body.From;
	let user = findUser(callerId);
	const twiml = new VoiceResponse();

	console.log("Incoming call from " + callerId);

	if (user.role === "alarm")
	{
		for (var i = 0; i < config.users.length; i++) 
		{
			let outgoingUser = config.users[i];
			if (outgoingUser.role === "user") {
				console.log("Sending message to " + outgoingUser.name);
				client.messages.create({
                                	to: outgoingUser.tel,
                                	from: config.myCallerId,
                                	body: ALARM_TEXT,
                                });	
			}
		}
		// send dtmf tone 9, may be treated as call acknowledgment
		twiml.play({digits: '9'});
	}
	else if (user.role === "user") 
	{
		twiml.say('Hello ' + user.name);
	}
	else
	{
		twiml.reject();
	}

	response.type('text/xml');
	response.send(twiml.toString());
});

// Create an HTTP server and listen for requests on port 3000
app.listen(3000);
