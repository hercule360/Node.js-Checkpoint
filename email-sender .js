

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jihed@gmail.com',
    pass: 'jihedjihed'
  }
});

const mailOptions = {
  from: 'jihedl@gmail.com',
  to: 'jihed@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy nodejs!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});