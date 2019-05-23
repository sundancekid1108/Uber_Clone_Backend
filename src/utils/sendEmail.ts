import dotenv from "dotenv";
dotenv.config();
import Mailgun from "mailgun-js";



const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox78869724f45a4504a8ded57785450488.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "yangga12345@naver.com",
    to: "yangga12345@naver.com",
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
