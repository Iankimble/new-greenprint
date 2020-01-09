const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "ian.kimble571@gmail.com",
  from: "greezingart@gmail.com",
  subject: "testing new sen grid message - Ian",
  text: "this should be my stuff test from another email ",
  // html: "<strong>Scrong text doesnt print</strong>",
  html:
    "html is where the message actually goes. We need to figure out what text does <br/>crong text doesnt print"
};
