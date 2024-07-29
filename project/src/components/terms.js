import React from 'react';

const TermsAndConditions = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#bbe9f2',
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    },
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
        <h1 style={styles.header}>Terms and Conditions</h1>

        <h2 style={styles.subheader}>Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to Toy Marche. These terms and conditions outline the rules and regulations for the use of our website.
        </p>

        <h2 style={styles.subheader}>Use of the Site</h2>
        <p style={styles.paragraph}>
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use Toy Marche if you do not agree to all of the terms and conditions stated on this page.
        </p>

        <h2 style={styles.subheader}>Cookies</h2>
        <p style={styles.paragraph}>
          We employ the use of cookies. By accessing Toy Marche, you agreed to use cookies in agreement with the Toy Marche's Privacy Policy.
        </p>

        <h2 style={styles.subheader}>License</h2>
        <p style={styles.paragraph}>
          Unless otherwise stated, Toy Marche and/or its licensors own the intellectual property rights for all material on Toy Marche. All intellectual property rights are reserved. You may access this from Toy Marche for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h2 style={styles.subheader}>User Comments</h2>
        <p style={styles.paragraph}>
          Certain parts of this website offer the opportunity for users to post and exchange opinions and information in certain areas of the website. Toy Marche does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Toy Marche, its agents, and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Toy Marche shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
        </p>

        <h2 style={styles.subheader}>Content Liability</h2>
        <p style={styles.paragraph}>
          We shall not be held responsible for any content that appears on your website. You agree to protect and defend us against all claims that are rising on your website. No link(s) should appear on any website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
        </p>

        <h2 style={styles.subheader}>Reservation of Rights</h2>
        <p style={styles.paragraph}>
          We reserve the right to request that you remove all links or any particular link to our website. You approve to immediately remove all links to our website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our website, you agree to be bound to and follow these linking terms and conditions.
        </p>

        <h2 style={styles.subheader}>Disclaimer</h2>
        <p style={styles.paragraph}>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul>
          <li style={styles.paragraph}>limit or exclude our or your liability for death or personal injury;</li>
          <li style={styles.paragraph}>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li style={styles.paragraph}>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li style={styles.paragraph}>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>

        <p style={styles.paragraph}>
          The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
        </p>

        <p style={styles.paragraph}>
          As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
