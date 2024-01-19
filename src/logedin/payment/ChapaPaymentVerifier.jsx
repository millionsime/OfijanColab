import React, { useState } from 'react';

const ChapaPaymentVerifier = () => {
  const [verificationResult, setVerificationResult] = useState(null);
  const randomString = "your_random_string"; // Replace with your actual random string
  const url = `https://api.chapa.co/v1/transaction/verify/${randomString}`;
  const token = "CHASECK_TEST-b9IkCyM7dXIrfxCkgdOb5GV4vGR8TTkJ"; // Replace with your actual token
  const verifyPayment = () => {
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    fetch(url, { headers })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setVerificationResult(data.status);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };
  return (
    <div>
      <button onClick={verifyPayment}>Verify Payment</button>
      {verificationResult && (
        <p>
          {verificationResult === "success" ? "Payment verified successfully" : "Payment verification failed"}
        </p>
      )}
    </div>
  );
};
export default ChapaPaymentVerifier;