"use server";

import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function createCall(formData) {
  const phoneNumber = formData.get("phoneNumber");
  console.log({ formData, phoneNumber });

  if (!phoneNumber) {
    throw new Error("Phone number is required");
  }

  //   try {
  //     const call = await client.calls.create({
  //       to: phoneNumber,
  //       from: process.env.TWILIO_PHONE_NUMBER,
  //       url: "http://demo.twilio.com/docs/voice.xml", // Replace with your TwiML URL
  //     });

  //     return {
  //       success: true,
  //       callSid: call.sid,
  //       message: "Call initiated successfully",
  //     };
  //   } catch (error) {
  //     console.error("Twilio Error:", error);
  //     throw new Error("Failed to initiate call: " + error.message);
  //   }
}
