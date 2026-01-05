import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-3 px-10 border-b-[1px] shadow-sm">
      
      <div className="flex items-center gap-6">
        <Image
          src="/logo.webp"
          alt="logo"
          width={120}
          height={60}
        />

        <div className="flex gap-4">
          <h2 className='hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
          <h2 className='hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-all'>History</h2>
          <h2 className='hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
        </div>
      </div>

      <UserButton afterSignOutUrl="/" />

    </div>
  )
}
