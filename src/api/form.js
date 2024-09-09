export default function handler(req, res) {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.stackmail.com",
        auth: {
          user: 'no-reply@fyiro.com',
          pass: 'Je465ba2e',
        },
        secure: true,
        debug: true
      })

    const mailData = {
        from: "no-reply@fyiro.com",
        subject: 'FYIRO Register Interest',
        text: ' | Sent from: ' + req.body.email,
        to: 'info@solution17.co.uk',
        html: `<div>${req.body.name} is interested in Fyiro <br /><br />
        <div>Name: ${req.body.name}<div>
        <div>Company: ${req.body.company}</div>
        <div>Email: ${req.body.email}</div></div>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log('Email error', err)
        else
          console.log('Email info', info)
    })

    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Guard clause checks for name, company and email,
    // and returns early if they are not found
    if (!body.name || !body.company || !body.email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Data not found' })
    }

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.name} ${body.company} ${body.email}` })
  }