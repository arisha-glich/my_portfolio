"use client"
import React, { useState } from "react";
import { z } from "zod";
import { Mail, User, MessageSquare } from "lucide-react";

// Define Zod schema for form validation
const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  // State for form data and errors
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data based on Zod schema
  const validateForm = (data: FormData) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const errorMessages: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        errorMessages[err.path[0]] = err.message;
      });
      return errorMessages;
    }
    return {};
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form (log data or send to backend)
    console.log("Form submitted:", formData);
    // Reset form and errors after submission
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} noValidate aria-labelledby="contact-form">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            <User className="inline mr-2" aria-hidden="true" /> Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            className="border p-2 w-full"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            <Mail className="inline mr-2" aria-hidden="true" /> Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            className="border p-2 w-full"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            <MessageSquare className="inline mr-2" aria-hidden="true" /> Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
            rows={5}
            className="border p-2 w-full"
            placeholder="Enter your message"
          />
          {errors.message && (
            <p id="message-error" className="text-red-600 mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-800 text-white p-2 rounded"
          aria-label="Submit form"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
