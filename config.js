var config = {}

config.twilio = {}
config.twilio.accountSid = 	'';	// enter Twilio account SID
config.twilio.authToken = 	'';	// enter Twilio auth token
config.myCallerId = 		'+441234567890'				// enter Twilio phone number
 /*
  * Below, add users and phone numbers
  * A call with a caller id that matches a user with 'alarm' role triggers an SMS to users with 'user' roll
  */
 
config.users = 
	[
		{ "name": "Scott", 		"tel": "+447777777777", "role": "user" },
		{ "name": "Alarm System", 	"tel": "+441234567890", "role": "alarm" }
	]

module.exports = config; 
