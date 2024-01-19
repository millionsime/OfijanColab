import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../Globals/apiConfig';
import useLoggedInUser from '../../Globals/useLoggedInUser';
const Payment = ({ transactionId }) => {
const [verificationResult, setVerificationResult] = useState(null);
const { refrence, itemId } = useParams();
const {deptId, userId} = useLoggedInUser();
const navigate = useNavigate();
console.log("the item", itemId);
const verifyPayment = () => {
    fetch(`${API_BASE_URL}/verify-payment/${refrence}`)
      .then(response => {
        if (response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            return response.json();
          } else {
            throw new TypeError('Response is not JSON');
          }
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        setVerificationResult(data.status);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };
  useEffect(() => {
    verifyPayment();
  }, [transactionId]);

  useEffect(() => {
    if (verificationResult === "success") {
      axios.post(`${API_BASE_URL}/storePurchase`, {
      userId: userId,
      itemId: itemId
    })
    .then(response => {
      console.log('Purchase stored successfully');
    })
    .catch(error => {
      console.error('Error storing purchase:', error);
    });
      navigate('/exit_exam/1'); 
    } else if (verificationResult === "failure") {
      navigate('/exit_exam/0'); 
    }
  }, [verificationResult]);

  return (
    <div>
      <p>Verifying payment...</p>
    </div>
  );
};
export default Payment;