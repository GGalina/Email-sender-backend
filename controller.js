require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, SENDGRID_FROM, SENDGRID_TO } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (req, res, next) => {
    try {
        const { teacher, name, email, phone, reason } = req.body;

        const contact = {
            to: SENDGRID_TO,
            from: SENDGRID_FROM,
            subject: "This email generated from LearnLingo booking form",
            text: `Teacher: ${teacher}\n Name: ${name}\n Email: ${email}\n Phone: ${phone}\n Reason to learn: ${reason} `,
        }

        await sgMail.send(contact);

        res.status(200).json({
            message: 'Email sent'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    sendEmail
};