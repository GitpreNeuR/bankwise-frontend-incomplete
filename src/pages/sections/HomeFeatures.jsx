import React from 'react'
import { Card ,Title,Flex, Subtitle} from '@tremor/react'
import {
    ArrowLeftRight,
    
    CreditCard ,
    
    Headphones,
    BarChart3,
    ShieldCheck,
    Wallet}
from 'lucide-react'


const bankingServices = [
    {
      title: "Transactions",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequatur soluta! Accusantium praesentium minus natus, aliquid exercitationem iure similique .",
    color: "cyan", // Blue color
    icon:<ArrowLeftRight className='h-7 w-7 text-cyan-600'/>
       
    },
    {
  title: "Mange Your Cards",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequatur soluta! Accusantium praesentium minus natus, aliquid exercitationem iure similique .",
    color: "orange", // Green color
        icon:<CreditCard className='h-7 w-7 text-orange-600'/>
  
    },
    {
      title: "Track Your Expenses",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequatur soluta! Accusantium praesentium minus natus, aliquid exercitationem iure similique .",
color: "purple", 
icon:<BarChart3 className='h-7 w-7 text-purple-600'/>
       
    },
    {
      title: "100% Secure",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequatur soluta! Accusantium praesentium minus natus, aliquid exercitationem iure similique .",
    color: "green",
      icon:<ShieldCheck className='h-7 w-7 text-green-600'/> // Teal color
       
    },
    {
      title: "Customer Support",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequatur soluta! Accusantium praesentium minus natus, aliquid exercitationem iure similique .",
    color: "violet",
  icon:<Headphones className='h-7 w-7 text-violet-600'/> // Red color
       
    },
    {
  title: "Cash Management",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequatur soluta! Accusantium praesentium minus natus, aliquid exercitationem iure similique .",
        color: "teal",
        icon:<Wallet className='h-7 w-7 text-teal-600'/>  // Purple color
       
    }
  ];


function HomeFeatures() {
  return (
<div className='flex flex-col items-center max-w-[85vw] px-7 mx-auto rounded-md justify-evenly space-y-10 h-[100vh]  w-full'>
    <h1 className='uppercase tracking-wider font-bold text-zinc-50 text-4xl'>Features & Services</h1>
    <div className='grid grid-cols-3 gap-3  place-items-center p-8 rounded-md max-w-[1500px]'>
    {bankingServices.map((item,index)=>(
<Card decoration='top' data-aos="fade-up"  className='text-start cursor-pointer  bg-glassmorphic rounded-sm space-y-4' decorationColor={item.color} key={index}>
<div className={`bg-${item.color}-200 rounded-sm p-3 w-fit`}>
{item.icon}
</div>
<Title className='text-slate-100'>{item.title}</Title>
<Subtitle className='text-sm'>{item.desc}</Subtitle>
    
    </Card>
    ))}
        </div>
    </div>
  )
}

export default HomeFeatures