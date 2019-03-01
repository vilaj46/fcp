import express from 'express';
import path from 'path';
import sanitizer from 'express-sanitizer';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(helmet());
app.use(cors())
app.use(sanitizer());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// https://support.google.com/mail/answer/7126229?p=BadCredentials&visit_id=636867760439388060-981344838&rd=2#cantsignin
// https://support.google.com/accounts/answer/6010255?authuser=1&p=lsa_blocked&hl=en&authuser=1&visit_id=636867771057095818-687891475&rd=1

app.post('/contact', (req, res) => {
    const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const information = JSON.parse(Object.keys(req.body)[0]);
    if (!information.honey) {
        const transporter = nodemailer.createTransport({
            host: process.env.TRANSPORT_HOST,
            port: process.env.TRANSPORT_PORT,
            auth: {
                user: process.env.TRANSPORT_USER,
                pass: process.env.TRANSPORT_PASS,
            }
        });

        const contact = {
            name: req.sanitize(information.name),
            number: req.sanitize(information.number),
            email: req.sanitize(information.email),
            assistance: req.sanitize(information.assistance),
        };

        const mail = {
            from: contact.email,
            to: process.env.TRANSPORT_USER,
            subject: 'Help',
            text: `
                ${contact.name}
                ${contact.email}
                ${contact.number}
                ${contact.assistance}
            `
        };
    
        return transporter.sendMail(mail).then(() => {
            return res.status('200').end('Success!');
        }).catch(error => {
            return res.status(400).end('Something went wrong.');
        });
    } else {
        return;
    }
});

app.listen(3000, () => console.log('Listening on port 3000!'));