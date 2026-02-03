import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  host: `smtp-relay.brevo.com`,
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

export const sendEmail = async ({ from, to, subject, html }) => {
  try {
    await transporter.sendMail({ from, to, subject, html });
  } catch (error) {
    console.error("Email send failed", error);
    throw error;
  }
};
