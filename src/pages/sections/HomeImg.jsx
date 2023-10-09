import React from 'react'
import hero2 from '../../assets/hero2.png'
import {  Subtitle, Title } from '@tremor/react';
import { CardContent,Card, CardHeader } from '@/components/ui/card';

const timelineData = [
  {
    title: 'Step 1: Create an Account',
    content: 'To get started with our banking project, the first step is to create a new account with us. You can do this online by visiting our website and filling out the registration form.',
  },
  {
    title: 'Step 2: Verify Your Identity',
    content: 'After creating your account, we will need to verify your identity for security purposes. You may need to provide some personal information and documents to complete this step.',
  },
  {
    title: 'Step 3: Fund Your Account',
    content: 'Once your account is verified, you can fund it by making a deposit. You can transfer money from another bank account or visit one of our branches to make a deposit.',
  },
  {
    title: 'Step 4: Explore Our Services',
    content: 'Now that your account is set up and funded, you can start exploring the various banking services we offer. This includes online banking, mobile apps, and more.',
  },
];


function HomeImg() {
  return (

  <div  className="h-screen flex items-center justify-start pl-20 relative  mt-20 w-full overflow-x-visible">
   
   
   <div className='flex space-y-10 flex-col w-[45%] relative overflow-y-hidden '>
    <h1 className='font-semibold  text-4xl text-white'>How it works ?</h1>
  <div className='absolute top-9 h-[95%]  w-1 bg-slate-500'></div>
  <div className='flex flex-col relative '>
    {timelineData.map((item,index)=>(
        <Card key={index} data-aos="fade-up" data-aos-delay={index * 100} className='bg-transparent border-none '>
        <CardHeader className=' text-slate-200 timeline-title'>{item.title}</CardHeader>
        <CardContent className="text-slate-400/80">{item.content}</CardContent>
        
        </Card>
    ))}
   </div>
   </div>
                
            
     <section className="p-4 h-[85%] w-[85%] bg-[#1a2033] mx-auto left-[55%] absolute  border border-gray-600 rounded-md">
    <img src={hero2} className="h-full w-full object-fill rounded-md  "/>
    </section>
    </div>
  )
}

export default HomeImg