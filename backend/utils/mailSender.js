const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: smtp.gmail.com,
            port: 587,               // Make sure you add the port for SMTP
            secure: false,
            auth: {
                user: "ashwrathe@gmail.com",
                pass: "khtfshjilykzvzwj"
            }
        });
        console.log(transporter)
        const info = await transporter.sendMail({
            from: 'CodingBits || by Ashwikk Patel <ashwrathe@gmail.com>',
            to: email,
            subject: title,
            html: body
        });

        console.log('Info of sent mail - ', info);
        return info;
    }
    catch (error) {
        console.log('Error while sending mail (mailSender) - ', email);
    }
}

module.exports = mailSender;