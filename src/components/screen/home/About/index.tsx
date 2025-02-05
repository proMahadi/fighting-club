import Image from 'next/image'
import React from 'react'
import aboutImg from "@/assets/aboutImage.svg"
import aboutImg2 from "@/assets/aboutImage2.svg"

const AboutSection:React.FC = () => {
  return (
    <section className='bg-black p-6'>
        <Image src={aboutImg} alt='aboutImg' className='sm:block hidden mx-auto'/>
        <Image src={aboutImg2} alt='aboutImg' className='sm:hidden mx-auto'/>
        <p className='font-figTree font-normal text-lg md:text-2xl max-w-[1088px] text-center text-white mx-auto mt-[42px]'>I'm Mirsad Bektic, a Bosnian-American former professional Featherweight (145) fighter in the UFC, where I competed for eight years and reached a #7 ranking. Though I no longer fight professionally, I remain passionate about health, fitness, and helping others. My journey in combat sports has shaped my love for mental health and psychology. I'm grateful for the experiences and people I've met along the way. Outside of fighting, I enjoy reading, learning, and spending time with my amazing wife.</p>
    </section>
  )
}

export default AboutSection