import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    
    const styles = {
        footer: {
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#98c3d1",
            textAlign: "center",
            borderTop: "1px solid #ddd"
        },
        footerLinks: {
            marginBottom: "10px"
        },
        footerLink: {
            margin: "0 10px",
            textDecoration: "none",
            color: "#1f56ed"
        },
        socialIcons: {
            marginTop: "10px"
        },
        socialIcon: {
            margin: "0 10px",
            color: "#333",
            fontSize: "1.5rem"
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.footerLinks}>
      <Link to="/terms" style={styles.footerLink}>Terms and Conditions</Link>
      <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
      <Link to="/faq" style={styles.footerLink}>FAQ</Link>
      <Link to="/contact" style={styles.footerLink}>Contact Us</Link>
    </div>
            <div style={styles.socialIcons}>
                <a href="https://facebook.com" style={styles.socialIcon} aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://twitter.com" style={styles.socialIcon} aria-label="Twitter"><FaTwitter /></a>
                <a href="https://instagram.com" style={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
                <a href="https://linkedin.com" style={styles.socialIcon} aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
        </footer>
    );
}

export default Footer;
