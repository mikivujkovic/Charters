const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const gmailEmail = "montenegrocharters@gmail.com";
const gmailPassword = "#z1M2K9j";
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmail = functions.firestore
    .document('requests/{Id}')
    .onCreate((snap, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = snap.data();

      // access a particular field as you would any JS property
      const toEmail = newValue.email;
      const addLinen = newValue.addLinen;
      const addRequest = newValue.addRequest;
      const addTowels = newValue.addTowels;
      const address = newValue.address;
      const basePort = newValue.basePort;
      const boat = newValue.boat;
      const city = newValue.city;
      const country = newValue.country;
      const discount = newValue.discount;
      const duration = newValue.duration;
      const finalPrice = newValue.finalPrice;
      const fullName = newValue.fullName;
      const people = newValue.people;
      const phone = newValue.phone;
      const rubberBoat = newValue.rubberBoat;
      const skipperFee = newValue.skipperFee;
      const start = newValue.start;
      const startingPrice = newValue.startingPrice;

      const mailOptions = {
        from: "montenegrocharters@gmail.com",
        to: "montenegrocharters@gmail.com",
      };
    
      // The user subscribed to the newsletter.
      mailOptions.subject = "MontenegroCharters Zahtjev za ponudu";
      mailOptions.text = "Novi zahtjev";
      mailOptions.html = `
       <b>ime: </b><p>${fullName}</p>
       <b>mail: </b><a href="mailto:${toEmail}">${toEmail}</a>
       <b>grad: </b><p>${city}</p>
       <b>zemlja: </b><p>${country}</p>
       <b>telefon: </b><p>${phone}</p>
       <br>
       <b>brod: </b><p>${boat}</p>
       <b>start: </b><p>${start}</p>
       <b>trajanje: </b><p>${duration} dana</p>
       <b>ljudi: </b><p>${people}</p>
       <b>druga luka: </b><p>${basePort}</p>
       <b>dodatni peskiri: </b><p>${addTowels}</p>
       <b>dodatna posteljina: </b><p>${addLinen}</p>
       <b>dodatni zahtjevi: </b><p>${addRequest}</p>
       <br>
       <b>puna cijena: </b><p>${startingPrice}</p>
       <b>popust: </b><p>${discount}</p>
       <b>skipper fee: </b><p>${skipperFee}</p>
       <b>finalna cijena: </b><p>${finalPrice}</p>
      `
      return mailTransport.sendMail(mailOptions).then(() => {
        return console.log('New email sent');
      });

});
