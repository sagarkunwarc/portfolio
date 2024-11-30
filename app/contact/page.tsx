"use client";

import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { sendEmail } from "../actions/send-emails";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{
    success?: string;
    error?: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
    setFormStatus(result);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required aria-required="true" />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
      {formStatus && (
        <div
          className={`mt-4 p-4 rounded-md ${
            formStatus.success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
          role="alert"
        >
          {formStatus.success || formStatus.error}
        </div>
      )}
    </div>
  );
}
