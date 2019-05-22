
import Mailgun from "mailgun-js";
require('dotenv').config()


const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "process.env.MAILGUN_DOMAIN"
  
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "sundancekid1108@gmail.com",
    to: "sundancekid1108@gmail.com",
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://newber.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};
