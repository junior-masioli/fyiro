export default function Contact(req, res) {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.stackmail.com",
        auth: {
          user: 'no-reply@fyiro.io',
          pass: '&{$lLBfzFS&C',
        },
        secure: true,
        debug: true
      })

    const mailData = {
        from: "no-reply@fyiro.io",
        subject: 'FYIRO Register Interest',
        text: ' | Sent from: ' + req.body.email,
        to: 'info@solution17.co.uk',
        html: `<div>${req.body.email} is interested in Fyiro</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log('Email error', err)
        else
          console.log('Email info', info)
    })

    res.status(200).redirect('/success');
  }