import React from 'react';

function Contact() {
  const pageStyle = {
    backgroundImage: 'url("https://i.pinimg.com/564x/6c/3e/f2/6c3ef215ea01bb512538919e11501592.jpg")', // Background image URL

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    // color: 'white',
  };

  const formContainerStyle = {
    background: '#5cceed',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    width: '100%',
  };

  const headerStyle = {
    marginBottom: '20px',
    fontSize: '2em',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontSize: '1.2em',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ff9900',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2em',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e68a00',
  };

  const handleMouseOver = (e) => {
    Object.assign(e.target.style, buttonHoverStyle);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={headerStyle}>Contact Us</h1>
        <form>
          <label style={labelStyle}>
            Name:
            <input type="text" name="name" required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Email:
            <input type="email" name="email" required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Message:
            <textarea name="message" required style={inputStyle}></textarea>
          </label>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
