import React from 'react'
import Heading from '@/components/Heading'
import { Wallet } from 'lucide-react'
import DashboardLayout from '../layout/DashboardLayout'
import FixedDepositsPage from '@/components/FixedDepositsPage'
import RecurringDepositsPage from '@/components/RecurringDepositsPage'
function DepositsPage() {
  return (
    <>
    <DashboardLayout>
    <Heading title="Deposits" icon={Wallet} bgColor="bg-pink-600/30" iconColor="text-pink-600"/>

    <div className='flex flex-col gap-y-5 mt-20'>
    
    <FixedDepositsPage/>
    <RecurringDepositsPage/>
    </div>
    </DashboardLayout>
    </>
  )
}

export default DepositsPage