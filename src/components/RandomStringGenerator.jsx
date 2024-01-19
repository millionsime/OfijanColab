import React from 'react';

class RandomStringGenerator extends React.Component {
  generateRandomString = () => {
    const length = 20;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  render() {
    const randomString = this.generateRandomString();
    return <div>Random 20-digit string: {randomString}</div>;
  }
}

export default RandomStringGenerator;
