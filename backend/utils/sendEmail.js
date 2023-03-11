const nodemailer = require('nodemailer');

const sendEmail= (options)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "dasproject9@gmail.com",
            pass: "xvixcqzovkjyyori"
        }
    });

    const mailOptions = {
        from: "dasproject9@gmail.com",
        to: options.to,
        subject: options.subject,
        html: options.text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;