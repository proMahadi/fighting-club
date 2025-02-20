import Image from 'next/image'
import React from 'react'
import logo  from "@/assets/logo.svg"


const Navbar:React.FC = () => {
  return (
    <section className='pt-8 xl:pt-[62px] absolute top-0 left-0 z-10 w-full'>
        <Image src={logo} alt="logo" className='mx-auto lg:block hidden w-[233px]'/>
        <Image src={logo} alt="logo" className='mx-auto w-[163px] lg:hidden'/>
    </section>
  )
}

export default Navbar