
import { useState,useEffect } from 'react'

export default function Loading({loading, setLoading}) {


  

  useEffect(() => {
      setTimeout(() =>{setLoading(false)},5000);
  })
  
  return (<div className='spinner-wrapper'>
    <div className="spinner"></div><h1 className='mt-[35%] text-[12px]'>Please wait, loading simple-soul's screens</h1></div>)
}

