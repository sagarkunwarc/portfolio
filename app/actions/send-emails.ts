"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Missing fields. Please fill in all fields." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Your Portfolio Message <onboarding@resend.dev>",
      to: "sagar.kunwar24@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: "Email sent successfully!", id: data?.id };
  } catch (error) {
    console.error("Unexpected error: ", error);
    return { error: "Failed to send email. Please try again." };
  }
}
