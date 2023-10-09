import Heading from '@/components/Heading'
import React, { useEffect, useState } from 'react'
import { CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DashboardLayout from '../layout/DashboardLayout'
import {useCardModal} from '@/hooks/useModal'
function ManageCardsPage({number,name,expiry,cvc}) {


  const modal=useCardModal();
  const[cardList,setCardList]=useState([]);

    return (
    <>
    <DashboardLayout>
      <Heading title="Manage Cards" icon={CreditCard} bgColor="bg-orange-600/30" iconColor="text-orange-600"/>
     
      <Button variant="primary" onClick={modal.onOpen} >Add Card</Button>

      <div className='grid grid-cols-3 gap-4 w-full'>
        
      </div>
     
    </DashboardLayout>
    </>
  )
}

export default ManageCardsPage