import React from 'react'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
function HomeHero() {
  return (
    <div className='flex items-center main-hero space-y-6 flex-col justify-center h-screen w-full text-center'>
        
        <h1 className='text-gradient font-poppins w-full font-semibold leading-[1.2] max-w-6xl text-[3.4em] text-slate-200'>Enjoy real-time banking with BankWise
            </h1>
                <p className='font-md text-lg  text-slate-300 max-w-4xl '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          molestiae. Pariatur accusantium eius beatae ad quos, quam officia
          omnis optio placeat. Ab necessitatibus iste corporis blanditiis
          debitis? Mollitia reprehenderit suscipit optio veritatis obcaecati
          provident rerum ipsam, quia voluptas magni?
         
                </p>
          <div className='flex space-x-4'>
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary" className="flex space-x-5">
          <p>Learn more</p>
      <MoveRight className='h-5 w-5 fill-inherit'/>
      
    </Button>

        </div>
    </div>
  )
}

export default HomeHero