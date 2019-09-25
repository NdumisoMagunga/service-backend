const express = require('express')
const router = express.Router();
const nodeMailer = require('nodemailer');

router.post('/', function (req, res, next) {
    let transpoter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port:465,
        secure: true,
        auth: {
            user: 'carterpillar55@gmail.com',
            pass: 'Magunga55@'
        }
    });
    let mailOptions = {
        to : 'magunga55@gmail.com',
        subject: req.body.serialNo,
        text : JSON.stringify({
            name: req.body.name,
            cellNumber: req.body.cellNumber,
            email: req.body.email,
            serialNo: req.body.serialNo,
            make: 'Huawei',
            model: req.body.model,
            issues: req.body.issue,
        })
    };
    transpoter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.subject)
    });
    res.writeHead(301, {Location: 'index.html'});
    res.end();
});

module.exports = router;