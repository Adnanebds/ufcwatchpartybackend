const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587, // Use 587 for TLS, 465 for SSL
  secure: false, // Use true for SSL (port 465), false for TLS (port 587)
  auth: {
    user: 'watchpartyufc@outlook.com', // Your Yahoo email address
    pass: 'jeYk5BRnpX_PR7A', // Your Yahoo email password
  },
  tls: {
      rejectUnauthorized: false // This may be required for some setups, but use with caution
  }
});

let mailOptions = {
    from: '"Adnane" <watchpartyufc@outlook.com>',
    to: 'adnanebadysoussi27@gmail.com',
    subject: 'Test Email',
    text: 'Hello from Yahoo Mail using Nodemailer!',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
