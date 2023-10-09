
import {Link} from 'react-router-dom'
import React from 'react'
import { cn } from '@/lib/utils'
import {
  ArrowLeftRight,
  History,
  LayoutDashboard,
  CreditCard ,
  SettingsIcon,
  Wallet
} from 'lucide-react'





const routes = [
  {
    label: 'DashBoard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-purple-600',
  },
  {
    label: 'Deposits',
    icon: Wallet,
    href: '/deposits',
    color: 'text-pink-600',
  },
  {
    label: 'Manage Cards',
    icon: CreditCard,
    href: '/manage-cards',
    color: 'text-orange-600',
  },
  {
    label: 'History',
    icon: History,
    href: '/history',
    color: 'text-red-600',
  },
  {
    label: 'Transactions',
    icon: ArrowLeftRight,
    href: '/transactions',
    color: 'text-cyan-600',
  },
  
  
 
  {
    label: 'Settings',
    icon: SettingsIcon,
    href: '/settings',
    color: 'text-slate-300',
  },
];

function SidebarItem({ route, isActive}) {
  return (
    <Link  to={route.href}>
        
      <div
        className={cn(
          'text-sm group flex rounded-sm p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 transition',
          isActive ? 'text-white bg-white/10' : 'text-zinc-400',
        )}
      >
        <div className='flex items-center flex-1 group-hover:translate-x-2 transition-transform'>
          <route.icon strokeWidth={2.5} className={cn('h-6 w-6 mr-3', route.color)} />
          {route.label}
        </div>
      </div>
    </Link>
  );
}

function Sidebar() {
  const pathnames = window.location.pathname;

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white'>
      <div className='px-3 py-2 flex-1'>
      <Link href="/" className="flex items-center justify-center mb-14">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-800 to-gray-400 bg-clip-text text-transparent">
          BankWise
        </h1>
      </Link>
        <div className='space-y-2 flex flex-col mb-1'>
          {routes.map((route) => (
            <SidebarItem
              key={route.href}
              route={route}
              isActive={pathnames === route.href}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default Sidebar;
