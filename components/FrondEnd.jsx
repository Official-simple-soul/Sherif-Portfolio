import Image from "next/image"
import FrontEndImage from '../public/assets/images/frontendDev.jpg'
export default function FrontEnd() {
    return (
            <div className="relative text-center w-full flex justify-center items-center h-screen">
              <div className="col">
              <span style={{ fontSize: "40px" }}>A Front-end developer ⛅️</span>
              <Image
              src={FrontEndImage}
              alt='front-end'
              width={500}
              height={500}
              className='rounded-xl'
              />
              </div>
            </div>    
    )
  }