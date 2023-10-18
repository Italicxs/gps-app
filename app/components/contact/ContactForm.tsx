"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Form');
  const initialEmailData = {
    email: '',
    subject: '',
    message: '',
  };

  const [emailData, setEmailData] = useState(initialEmailData);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const emailText = 'emilianomachado967@gmail.com';
    navigator.clipboard.writeText(emailText).then(function () {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://formspree.io/f/mwkdqeeb', emailData);

      if (response.status === 200) {
        console.log('Correo electrónico enviado con éxito');
        setEmailData(initialEmailData);
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  };

  const handleChange = (e: any) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            value={emailData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Subject"
          />
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={emailData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-blue-500 text-gray-900"
            placeholder="Message"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className=" w-20 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t('button')}
          </button>
        </div>
      </form>
    </div>
  );
}
