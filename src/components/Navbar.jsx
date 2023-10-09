


import { UserButton } from "@clerk/clerk-react"

 function Navbar() {

  return (
    
       
        <div className="flex w-full  py-3 px-2 justify-end">
      <UserButton afterSignOutUrl="/"/>
        </div>
    
  )
}

export default Navbar