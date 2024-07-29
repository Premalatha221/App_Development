import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is your return policy?", answer: "You can return any item within 30 days of purchase for a full refund." },
    { question: "How long does shipping take?", answer: "Shipping usually takes 5-7 business days." },
    { question: "Do you ship internationally?", answer: "Yes, we offer international shipping. Shipping costs vary by destination." },
    { question: "How can I track my order?", answer: "Once your order has shipped, you will receive an email with a tracking number." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageStyle = {
    padding: '20px',
    backgroundImage: 'url("https://i.pinimg.com/564x/6c/3e/f2/6c3ef215ea01bb512538919e11501592.jpg")', 
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const faqContainerStyle = {
    maxWidth: '800px',
    width: '100%',
    background: '#5cceed', 
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2em',
    color: '#333',
  };

  const questionStyle = {
    fontSize: '1.5em',
    cursor: 'pointer',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#f1f1f1',
    border: '1px solid #ddd',
  };

  const answerStyle = {
    padding: '10px',
    margin: '10px 0',
    borderLeft: '4px solid #ff9900',
    backgroundColor: '#fafafa',
    borderRadius: '4px',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
    maxHeight: openIndex !== null ? '200px' : '0',
    opacity: openIndex !== null ? '1' : '0',
    overflow: 'hidden',
  };

  return (
    <div style={pageStyle}>
      <div style={faqContainerStyle}>
        <h1 style={headerStyle}>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              style={questionStyle}
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </div>
            <div
              style={answerStyle}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
