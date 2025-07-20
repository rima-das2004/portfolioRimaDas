import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.target;
    const data = {
      data: {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/58f61be4dda40', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('✅ Message sent!');
        form.reset();
      } else {
        setStatus('❌ Failed to send. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Error sending message.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
      style={{
        background:
          'linear-gradient(276deg, rgb(0 74 106) 0%, rgb(0 12 32) 50%, rgb(12, 1, 48) 100%)',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={5}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Send
        </button>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
