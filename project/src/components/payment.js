import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css'; // Add custom styles for the card and icon
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CommonNav from './commonNav';
import { FaCreditCard } from 'react-icons/fa'; // Import an icon from react-icons

const Payment = () => {
  const apiurl = 'http://127.0.0.1:8080/api/payment';
  const [formData, setFormData] = useState({
    name: '', 
    cardNumber: '',
    cvv: '', 
    expiryDate: '',
  });

  const [error, setError] = useState({
    name: '', 
    cardNumber: '',
    cvv: '', 
    expiryDate: '',
    general: ''
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: '', general: '' });
  };

  const handleConfirmPayment = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalConfirm = async () => {
    setShowModal(false);
    
    const formErrors = {};

    // Validation checks
    if (formData.name.trim() === '') {
      formErrors.name = 'Enter Name on Card';
    }
    if (formData.cardNumber.trim() === '' || !/^\d{13}$/.test(formData.cardNumber)) {
      formErrors.cardNumber = 'Enter a valid 13-digit Card Number';
    }
    if (formData.cvv.trim() === '' || !/^\d{3,4}$/.test(formData.cvv)) {
      formErrors.cvv = 'Enter a valid CVV (3 or 4 digits)';
    }
    if (formData.expiryDate.trim() === '' || !/^(0[1-9]|1[0-2])\/\d{4}$/.test(formData.expiryDate)) {
      formErrors.expiryDate = 'Enter a valid Expiry Date (MM/YYYY)';
    }

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }

    try {
      console.log('Sending data to backend:', formData); 

      const response = await axios.post(
        apiurl,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, 
          }
        }
      );

      console.log('Backend response:', response.data);

      if (response.status === 201 || response.status === 200) {
        // alert('Your payment was successfully submitted');
        navigate('/done'); 
      }
    } catch (error) {
      console.error('Payment Submission Error:', error);
      const errorMessage =
        error.response?.status === 401
          ? 'Unauthorized. Please check your details and try again.'
          : 'Payment submission failed. Please try again later.';
      setError((prevError) => ({ ...prevError, general: errorMessage }));
    }
  };

  return (
    <div>
      <CommonNav />
      <div className="container mt-5">
        <div className="card p-4">
          <h3 className="text-center">Credit Card Payment Gateway</h3>
         <div className="credit-card-logos text-center my-4">
            <div className="logo-card">
             <img src="data:image/png;base64,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" alt="Visa" />
             </div>
             <div className="logo-card">
               <img src="data:image/png;base64,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" alt="Mastercard" />
             </div>
             <div className="logo-card">
               <img src="data:image/png;base64,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" alt="Am" />
             </div>
             <div className="logo-card">
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX///8Ab88AZMwAbM4AaM0AZs3Q4vRjmdsAbc4AYswAZcxNjtkAas4+iNebvegAcdDZ6Pe70u+QteUuftSTt+Xm8PnE2PG91PBaldr0+v0wgdTf6/j4/P7v9vwAX8tvoN6DruIAWMnM3vOnw+l4p+ATdtGxy+xEitdxo99gl9urx+t7quGDsuSfwOgAVskbedLO6FYxAAAOWElEQVR4nO2c6XLivBKGbUsG2TFLSNjXkABZJpP7v7uDbXVrt4EwVd+p6vdXYsmS/GhrtSSiiEQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikf6rmpweQL29FXZUYQ8Pp1cz8FMP7E3qh92HoHrjKkbPDZl1R8e1lvK+588xWu/7X92Zk2kprZxv1lsrlWWvY3x6z02nWYuCgfiDFdZPmFJxMAMPhRaYPdYPn/SHpjbLKkbiCyvSrDdVH5HVT/OR8c2fpyznevrJEQOPmVaWsQVrE/iGx8QsfKs6WayULS1YXAuME6NahvqLcQqwRBxSUifOA8EsO80BVl4/KkZGWVJmvZIqWHq+xZcFSysp15vdY2oWvlUfegmK9yZYhdG+v4r7wjqnH4+DsMZPuZuygrVPtMeCzyNdK6M9aEPNtbDGei7nD1oboSYswfQwYRT+HrBiNlgFYA0Lu1WZsGZGMO+HYTGtI14La2e0j5g/N8CKczWsRBOT8l1gxXzrhzXm3mQR1tgYEmIxCMOKueo9V8JaWaUwG48Ni81UUNesagdWcIDnmBVKlaEemx1YT752pcF6M6s8zo2vN2FpHfFKWN9QdCiNNma6sOIEBwObsg2LBU0HmaQYoAnQG+B4VLdsG9ZzivkwniQctJGFnUNh4CvYogEWw3Z3JayBzKWATi+evLBkNI6GzzE1CmDDEjyYpXxR6N8zgcbFTh5Y8xRYiqT3uZw7SUIx2QPQ0odxG5bqiNfBmsqBh/XWMAQlejZQCnEQMh6EnOpiicFdYCGeerSxYKkqK/zWI9RltoQ61wcMB1acTW6B1ZNp50ecT5humEIxiz9yUAB7b72xAuxuGIYF/A1Y0MQFW7mwIE3Bx570zt8so587H047iRbVgQUd8SpYYJAKoc1uumEKsPKO7Cd8ZASwp4mVX3vL8sP6AViRAwunuiTwTQuBVR79yDrXDVOEhcNssb0eFsxoFYIfGL40wxRgJcv3ugWBlSKZ8H4IVrGyM4MHXlhg7omDCws+yRxOlcAgLascZyyRqAIALLFAWnVHvAbW2GizODGqKU/BGkKJ6iENljrZOADr3LRsJXIY8Y1Za5xEuy6skezplqmJmulVvoJv4t8OLLb9lgmf29jqSlhgkLKPKklISDNMFSwYVOolj3zzPN5PA7BcFV0T1mEH+polaLl8urC2spjm0hRlVjmaXJphirBm0QIyqjriFbDQVJITIGYjfLBk/daDkez950+7HBaTsNTUBuJockqb2IQFq9fEP7x/GVUeDYGdMkw1WEtcd5Qd8QpY2L1/6v+XMA7maJhqsCCbsgwwGZzHhdth+ZS8emCB8ZSb61YgkZpVjjO8Mkw1WNEzdkSxugbWQaaagqV5cgxTDRYUosxRdozy8+8KC/xpJqxZY8vqW1WOhoTqtjosoyNeDmuqTyJ1GcEqR8NUh/UJf68jWZnJ5L6wcjDxTFgwZyeWs60WrEE4docDTBZgmBqw1Jo7m9iFDwuaq/jZdmttcWkF2eiw5hIu/5QVIuKoAZY7G340whJFhhOLCQvG0nQaucJ2xLryM7ZoIIAFbcCK+tgRD0d+ISzlIVXLfyw5GKY6LKhh8SBH3GIXuWMk2gDffVuPJixhuBs4+1K9zIQFheCWA7QS9qrY9WGAYWrCUq8IaJWtsLp+r4fM5s0DC4Z1Id/MyoeBlnWBBT/YnpsyfFhh2FAmLFw3Fm5iHdOrZkrwlQ+WmhEh9zZYY3u9ZEp6TA1YETPGo9qqDHXDy5Y7nQR7rW5EmbDmUFT+x0ls1lTlYJhasFRHBLXBsjykTjZ9DyzT616X5PaWVbF+3AB6rg3f1kIaHS/J0Uqrpcrl4syGpfXdi2DZvjtb1eBtwxoabb5ufL+EFfUhTcFCY1b0iPkmX6at9dVc5dIwdWAtrc7bAkt5SAtTwLA2TE1Yhl0gcw51QzZ01Fl5YEVvYK+wA65JbU/pAVtCwbuvk06VmlHl1lfgtN7zwlKm6UWwIHt2GpmCPZvaMLVg6V5muZoImg55YuvF8MHjQnoGrYOhLWzDmqreJhjPy6Q373qVF9ZXKI9pxwvL6ojNsKa4+LQXp9iwK8PUgrVWzRempsuNUmt3R3kdlE0Nflhnw6LrGGfVIIBO8a31FTiWVQtGDyyzIzbD6jkLGzebmQtLDbVoXNwB1nyAU6J3uVMV2BqcKqfbY7DKtTlh7IVlzoiNsHDnvfaI+LMpDVMbltqmgPLdAZa2K5gG9g3PxTJHmWqduAhWufL7lpazD5bRERthdcEZ45mzMJvyVIANK8I9J1i23gNWtMcxKf8KwIqeM61xVevMTkOV46BcGqZeWHpHbII11rGHs0nnLqx38FrCOu4usKIj0kqeA7CicTdPwSyuFg8fyMPzFTj2n81BLyy9IzbBetuY85OVDYRuRtGz/PsFBoX9i3wARtEjPJD5HTJnFrRmQ5lk9qNnChklyd+zOTyViW52RsnWn7NDWr1bjm3Lv1BO35pxjgnyaCVjZuaJqgUW9cU2djV1UL7QlRY8hr/m9rv4AfBgbaftamXEGBq5qlh7LVHXg7VeQmZYto6763rWENObB7LEXLDwJBKJRCKRSKT/osb7sIk51g3QofOqenO/WvmSGRqW4AVRonVDaYy1yHw5dCLsdQN37YZ37NslV0utQhydFxmdF/Wfvbrq4psvu2j84kshH3TVQb61P8rhXTvrd/TGqfPvYqzlbsE9Mf4irMfuwJfC6bew7AO4mspFuPIWCMultMNVavruHLbHl4rkB+pz7Y/CiuQJq9w+x6qXBtx/61lW+NbyGOFxkDBfhMx/Rud+sDRvgXmE8ROf82rLPLi7JzLpWJiHo2zAw/HYDmvCA1sYmRwo3jP/5pk6LfvPYEV9pMIO6qjdBJ8WlSMmDOv8FX9aYJ2jjC6Ftc8CHiI4Kdu1twxBycUXw26HFX1h7uhBj5a4dSoJNsGKN1UxA91QRql7Yms3XLHQnqs86vIZ2mcUhsPoX8HS9hK4HGTXuC0uWD2dNcKqj5E2tSz4lNaWtQveOJOeRu9oVSpv8GhdDcudX9DldsJRIqn54d0RAYeEEBZT76v7cMlUhyVUFHUisG4YCKsIzIbIglkbcdI1ecQDNPb3mLdwfgeLfy+dPVMc0NXFmqw8FveA8PCaA8BiM0ym83jCTb+yVUA3FD0V5bjAKFXNQDcsRv7S4D26tLu3gutywGEYUXx3Ah9zB1iN2x9qK6s8qPmOfSXDpo2wjP09PMN60GAZdxbw6+q5CloWt28DS4Hf3b41iYLthcBR3l/qIljaVpYolIGVqFNECKurv6YOAEchWGvjlkobLLjtkYeMcZkhu8No7tFlsLSTQwL7YK5tI/hbFm71lrvLflgwCtWnmI8tsOBkUBoyA+BUedz81TcKYflOKGqaOFMy1xuRv2XhNZIS1twLawWfV7UFbFmefUK9tOLJud5RCy+3PfvDfye8m7Z9tjUy9lRsA6YwVlr+loVzZLnv529ZeK2hegqwWLfvlKa0UaZ4vjR+w5Dvo1rk42572htBeP91eo/RXYMVM+c87cb0CIwMO4mZG+peWHM8cLHQYZ3WY9DkAyaL+uAcGqWe0iwj3bAVhQpKE74dWp9zXnOqCHny0w80xdtgubKunmuzYDkem4F4jamnmsQWrajqzs3cY4rlyiapKr/BKK0tusChSVFIozB0UFBw9vvVThMs576DOtGrH+IzYOnXn5RvoDoa3WjBy2s/rbCGm1B4Wvfu99D3CMfH9G9hvav1PrcWD43LnZpEEyzB6vGxYW0o1wqvYVp121oEz1VuvFcS7gTL7oY7/Wsz09JpgiVJNMBiXA45rS2r9IKEltKbqrWvekmLX+IOsIQjC9a3MRwI8+pIAywgEYQl+AGmM4Tllgav3w4fMs60AEynkOfCv+OkYMwNj+1fsLkZlhg4Sg1YU2voBH9DCyyRP8kiBmCxVDv8jldaY7c0qnKG/dkTPhd4k1EdcZruej8YgePN/pD1djWstlP1Hcfpxn602VjB0uqcsSKJcUmE037pdVBXTLZHLZm25Y5PY2Vb+SNMwVXhve1yjS6EpS8O4TsLzU+rYMEvG5z/+jnttPl6jtbF2c5CH5lp8rctd/xi2jrBJ7jtZC0vrtdlsNbodmBPXzgI8w+MEFju6DKXO3jeNtXN2FtaVtvdzosKd5kug/WD4wIfa+4stZS+GtYKrwlIh2Kl22DB9cNAN8Qzmffrhk0LaXSV1vth6hhwBiPSNbDqReUYL0moW4iqG14zFH/h6tofvoSqvq4KPMKF9FPP1gJIKCd87e2bq9+aAPff1S2rvCeEVywRjfqBB6c0vV1V3IXzHAfRytnqvrdQ+fzWKlULaUfpro6itncS2QaWqaK1vxWWZozgL/IpO8spTf3DW6PUCVBFKa0190UMN38Y6VewXMndHbVxmKIzV9uoru2f67thpJm5AtYDrVtho/AlsaKqhEFod+cMs8VldwdYaku60JYLyrsl4vWVsFQy2GZFWtvwrVthYViMr5th8d/Ohe2w9mo71fBr/0HDqjJOb4MVfShvWpuLpgUWk1sUQVjpr4+FtMJacns7FaRG/dI4vakbRpq5VTfQW7uhSJ7k4O2HJYrst2ZDBcv7C6yV8t15fodfWC1y+4BWj0PEZBaN5a+qanaqAwui6LBW+LuxfDA3f7jVnm7qHencCSiKNFngfMrcn5wteMK7v3bPlDrOuiHNXqP3D/zHcTSuMKz7cFzLZD5GvkxqWBDFqOMx5j97O5uP4dJ8VDPxpxthOzpq3gTPm2/9yT18yiQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQi/V/ofztfClyRaCuQAAAAAElFTkSuQmCC" alt="Discover" />
 
             </div>
           </div>
          <form id="payment-form" className="payment-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">NAME ON CARD</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {error.name && <p className="error">{error.name}</p>}
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <div className="input-with-icon">
                <FaCreditCard className="icon" />
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="form-control"
                  placeholder="0000-0000-0000-0000"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              {error.cardNumber && <p className="error">{error.cardNumber}</p>}
            </div>
            <br></br>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  className="form-control"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
                {error.cvv && <p className="error">{error.cvv}</p>}
              </div>
              
              <div className="form-group col-md-6">
                <label htmlFor="expiryDate">EXPIRATION DATE</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  className="form-control"
                  placeholder="MM/YYYY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
                {error.expiryDate && <p className="error">{error.expiryDate}</p>}
              </div>
            </div>
            {error.general && <p className="error text-danger">{error.general}</p>}
            <button type="button" className="btn btn-success btn-block mt-4" onClick={handleConfirmPayment}>
              Confirm Payment
            </button>
          </form>
        </div>
      </div>

      {/* Blur background and modal */}
      {showModal && <div className="blur-background"></div>}
      
      <div className={`modal fade ${showModal ? 'show' : ''}`} id="confirmationModal" tabIndex="-1" aria-labelledby="confirmationModalLabel" aria-hidden={!showModal} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmationModalLabel">Confirm Payment</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleModalClose}></button>
            </div>
            <div className="modal-body">
              Are you sure you want to proceed with the payment?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>No</button>
              <button type="button" className="btn btn-primary" onClick={handleModalConfirm}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
