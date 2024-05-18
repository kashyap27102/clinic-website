import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const { name, email, mobile, message } = data;

  const nodemailer = require("nodemailer");
  console.log(process.env.GMAIL_USER);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  //   console.log(transporter);
  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Inquiry form Website `,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nMobile:${mobile}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Query Sent Succesfully" });
  } catch (error) {
    console.log(error);
    // return NextResponse.json({},{status:500})
  }
};
