import React from 'react';

const PrivacyPolicy = () => {
  const styles = {
    page: {
      backgroundImage: 'url("https://i.pinimg.com/564x/6c/3e/f2/6c3ef215ea01bb512538919e11501592.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      minHeight: '100vh', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px', 
    },
    container: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    },
    header: {
      color: '#2c3e50',
      textAlign: 'center',
    },
    subheader: {
      color: '#34495e',
      marginTop: '20px',
    },
    paragraph: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Privacy Policy</h1>
        
        <h2 style={styles.subheader}>Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to Toy Marche. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at privacy@toymarche.com.
        </p>

        <h2 style={styles.subheader}>Information We Collect</h2>
        <p style={styles.paragraph}>
          We collect personal information that you provide to us such as name, address, contact information, passwords and security data, payment information, and social media login data.
        </p>

        <h2 style={styles.subheader}>How We Use Your Information</h2>
        <p style={styles.paragraph}>
          We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>

        <h2 style={styles.subheader}>Sharing Your Information</h2>
        <p style={styles.paragraph}>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
        </p>

        <h2 style={styles.subheader}>Cookies and Other Tracking Technologies</h2>
        <p style={styles.paragraph}>
          We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
        </p>

        <h2 style={styles.subheader}>Security of Your Information</h2>
        <p style={styles.paragraph}>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 style={styles.subheader}>Changes to This Privacy Policy</h2>
        <p style={styles.paragraph}>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
        </p>

        <h2 style={styles.subheader}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have questions or comments about this policy, you may email us at privacy@toymarche.com or by post to:
        </p>
        <p style={styles.paragraph}>
          Toy Marche<br/>
          123 Toy Street<br/>
          Fun City, FC 12345<br/>
          Coimbatore
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
