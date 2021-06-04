const nodemailer = require("nodemailer");

const sendEmail = (text) => {
  nodemailer.createTestAccount((err) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "qq",
      port: 465,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass, // generated ethereal password
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: account.user, // sender address
      to: "15054854614@163.com", // list of receivers
      subject: "dist", // Subject line
      text: text,
      // attachments: {
      // 	filename: "dist.zip", 
      // 	content: file,
      // },
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};

const account = {
  user: "1183779941@qq.com",
  pass: "nmsdqlylubkubaaf",
};

const init = (text) => {
  sendEmail(text);
};

module.exports = init;
