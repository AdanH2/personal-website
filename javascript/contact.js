// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: process.env.GMAIL_EMAIL,
  //       pass: process.env.GMAIL_PASSWORD,
  //     },
  //   });

  if (!name || !email || !message) {
    alert("Message not sent. Make sure all fields are filled out!");
    //return res.status(400).send("All fields are required");
  } else {
    alert("Message not sent at this time. Please try again later.");
    window.location.href = "contact.html";
  }

  //   const mailOptions = {
  //     from: "adanh74379@gmail.com", // Use a verified email address
  //     to: email,
  //     subject: "New message from contact form",
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   };

  //   try {
  //     await transporter.sendMail(mailOptions);
  //     console.log("Email sent successfully");
  //     res.status(200).send("Email sent successfully");
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     res.status(500).send("Error sending email");
  //   }

  //   const name = document.getElementById("name").value;
  //   const email = document.getElementById("email").value;
  //   const message = document.getElementById("message").value;
  //   console.log(name, email, message);
  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, message }),
  //   });
  //   if (response.ok) {
  //     alert("Email sent successfully");
  //   }
});

// const nodemailer = require("nodemailer"); // Ensure nodemailer is installed and imported

// // Create a transporter instance
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.GMAIL_EMAIL,
//     pass: GMAIL_PASSWORD,
//   },
// });

// const post = async (req, res) => {
//   const { name, email, message } = req.body;

//   // Input validation
//   if (!name || !email || !message) {
//     return res.status(400).send("All fields are required");
//   }

//   const mailOptions = {
//     from: "adanh74379@gmail.com", // Use a verified email address
//     to: email,
//     subject: "New message from contact form",
//     text: `From: ${name} <${email}>\n\n${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Error sending email");
//   }
// };

// module.exports = { post };
