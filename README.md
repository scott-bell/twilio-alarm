# twilio-alarm

This NodeJS script is to be used with Twilio and is intended to accept phone calls from a home alarm system and send alerts as SMS messages reducing the time for a notification. 

Have Twilio send Voice requests to your URL with path /voice. A home alarm system such as Yale that makes phone calls to send notifications can then be directed to a Twilio number. This script will detect calls from the alarm system using Caller ID and send a text message notification to phone numbers listed in the config. 

