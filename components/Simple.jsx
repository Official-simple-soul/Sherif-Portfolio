import Image from "next/image"
import SimpleImage from '../public/assets/images/SimpleVectorImage.jpg'
export default function Simple() {
    return (
            <div className="relative text-center w-full flex justify-center items-center h-screen" id="about">
              <div className="col">
              <span style={{ fontSize: "40px" }} className='z-50'>I'm Simple_Soul ✨</span>
              <Image
              src={SimpleImage}
              alt='simle'
              width={500}
              height={500}
              className='rounded-xl'
              />
              </div>
            </div>    
    )
  }