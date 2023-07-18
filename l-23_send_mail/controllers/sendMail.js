const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'tessie.christiansen@ethereal.email',
        pass: 'b6cnJYGWd5ZhBHqyhn'
    }
  });

  let info = await transporter.sendMail({
    from: '"Vinod Thapa 👻" <thapa@gmail.com>', // sender address
    to: "iam@gmail.com", // list of receivers
    subject: "Hello Thapa", // Subject line
    text: "Hello YT Thapa", // plain text body
    html: "<b>Hello YT Thapa</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;