import nodemailer from "nodemailer";
import { resolve } from "styled-jsx/css";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "saisurya.teja@outlook.com",
      pass: "qspqphrpkhycirty",
    },
  });

  const mailOptions = {
    from: "saisurya.teja@outlook.com",
    to: "saisurya.teja@outlook.com",
    subject: "New Form Submission",
    text: `Name:${data.name}, Email: ${data.mail} Type of service: ${data.service}`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });

  return new Response(JSON.stringify({ message: true }));
}
