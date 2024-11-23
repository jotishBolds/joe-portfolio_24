"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Please enter your message");
      return;
    } else {
      setMessageError("");
    }

    setLoading(true);

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Thank you! Your message has been sent successfully.");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setStatus("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError("");
    setStatus("");
  };

  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 lg:p-12 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-medium text-primary dark:text-white mb-4">
            Queries?
          </h2>
          <p className="text-zinc-500 dark:text-gray-300">
            Have a question? I'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >
              Your Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className={`block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary transition-all duration-200 
                ${
                  emailError
                    ? "ring-2 ring-red-500"
                    : "ring-1 dark:ring-white/10 ring-primary/5"
                }
                rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                placeholder="name@email.com"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {emailError}
                </p>
              )}
            </div>
          </div>

          <div className="relative group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >
              Your Query
            </label>
            <div className="relative">
              <textarea
                id="message"
                rows="4"
                className={`block w-full px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary transition-all duration-200 
                ${
                  messageError
                    ? "ring-2 ring-red-500"
                    : "ring-1 dark:ring-white/10 ring-primary/5"
                }
                rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                placeholder="Write your message here..."
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              {messageError && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {messageError}
                </p>
              )}
            </div>
          </div>

          <div className="relative">
            <button
              type="submit"
              disabled={loading}
              className={`text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg 
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10"
              } text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-center`}
            >
              <span className="flex items-center justify-center">
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.086 0-3.998-.81-5.464-2.209l1.728-1.729z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </span>
            </button>
          </div>

          {status && (
            <div
              className={`mt-4 p-3 rounded-lg text-center text-sm font-medium ${
                status.includes("success")
                  ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
