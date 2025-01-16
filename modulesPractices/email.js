var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yashikaduthuluru@gmail.com',
    pass: 'rtqy kloc zkhx xmfn'
  }
});

var mailOptions = {
  from: 'yashikaduthuluru@gmail.com',
  to: 'yashikaduthuluru.career@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});