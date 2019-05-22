import Twilio from "twilio";
require('dotenv').config({path: __dirname + '/.env'})

const twilioClient = Twilio("AC340f9514d86eab8e377dc272af0c0610", "process.env.TWILIO_TOKEN");

export const sendSMS = (to: string, body: string) => {
  return twilioClient.messages.create({
    body,
    to,
    //from: "+821072097388"
    from: process.env.TWILIO_PHONE
  });
};

export const sendVerificationSMS = (to: string, key: string) =>
  sendSMS(to, `Your verification key is: ${key}`);