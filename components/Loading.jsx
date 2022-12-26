import { useState, useEffect } from 'react';

export default function Loading({ loading, setLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <div className="spinner-wrapper">
      <div className="spinner"></div>
      <div className="text-white mt-[45%] text-[12px] text-center">
        <h1>Please wait...</h1>
        <p className='mt-4'>loading simple-soul's screens</p>
      </div>
    </div>
  );
}
