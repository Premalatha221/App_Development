// import React from 'react';
// import toy1 from '../assets/images/toy1.webp';

// const OrderTrackingPage= () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.trackingBox}>
//         <img src={toy1} alt="Shoes" style={styles.productImage} />
//         <div style={styles.orderInfo}>
//           <h2 style={styles.heading}>Order Number</h2>
//           <input type="text" value="16" readOnly style={styles.input} />
//           <h2 style={styles.heading}>Email</h2>
//           <input type="email" value="mark@email.com" readOnly style={styles.input} />
//           <button style={styles.button}>Track</button>
//         </div>
//       </div>
//       <div style={styles.trackingStatus}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/DHL_Logo.svg/1024px-DHL_Logo.svg.png" alt="DHL Logo" style={styles.dhlLogo} />
//         <ul style={styles.statusList}>
//           <li style={styles.statusItem}><span style={styles.icon}>&#10004;</span> Ordered <span style={styles.date}>Nov 20</span></li>
//           <li style={styles.statusItem}><span style={styles.icon}>&#10004;</span> Order ready <span style={styles.date}>Nov 20</span></li>
//           <li style={styles.statusItem}><span style={styles.icon}>&#10004;</span> Shipped <span style={styles.date}>Nov 21</span></li>
//           <li style={styles.statusItem}><span style={styles.icon}>&#10004;</span> Out for delivery <span style={styles.date}>Nov 21</span></li>
//           <li style={styles.statusItem}><span style={styles.icon}>&#10004;</span> Delivered <span style={styles.date}>Nov 22</span></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: 'Arial, sans-serif',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     flexDirection: 'column',
//     backgroundColor: '#e0f7fa',
//   },
//   trackingBox: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   productImage: {
//     width: '100px',
//   },
//   orderInfo: {
//     marginTop: '20px',
//   },
//   heading: {
//     margin: '10px 0 5px',
//   },
//   input: {
//     width: 'calc(100% - 20px)',
//     padding: '5px',
//     marginBottom: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     cursor: 'pointer',
//   },
//   trackingStatus: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '300px',
//   },
//   dhlLogo: {
//     width: '100px',
//     marginBottom: '20px',
//   },
//   statusList: {
//     listStyleType: 'none',
//     padding: '0',
//     width: '100%',
//   },
//   statusItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 0',
//     borderBottom: '1px solid #ccc',
//   },
//   icon: {
//     color: 'green',
//     marginRight: '10px',
//   },
//   date: {
//     color: '#888',
//   },
// };

// export default OrderTrackingPage;
