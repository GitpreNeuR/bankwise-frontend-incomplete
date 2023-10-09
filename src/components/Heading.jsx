import React from 'react'
import { cn } from '@/lib/utils'
function Heading({title,bgColor,iconColor,icon:Icon}) {
  return (
    <>

    <div className=' flex items-center gap-x-3 mb-8'>
        <div className={cn("p-2 w-fit rounded-md",bgColor)}>
            <Icon className={cn("w-10 h-10",iconColor)}/>
        </div>
        
            <h2 className='text-3xl font-bold'>
                {title}
            </h2>
        
    </div>
    
    </>
  )
}

export default Heading