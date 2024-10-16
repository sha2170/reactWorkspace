import React, { useState } from 'react';

const RandomNumber = () => {
  const [number, setNumber] = useState(0);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // 1부터 100까지의 랜덤 숫자 생성
    setNumber(randomNum);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>랜덤 숫자 생성기</h1>
      <p style={{ fontSize: '2rem' }}>{number}</p>
      <button onClick={generateRandomNumber} style={{ padding: '10px 20px', fontSize: '1rem' }}>
        랜덤 숫자 생성
      </button>
    </div>
  );
};

export default RandomNumber;