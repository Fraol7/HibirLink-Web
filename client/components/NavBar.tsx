import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <div className="fixed top-0 w-full bg-primary z-30 p-2 flex justify-end">
        <div className='flex justify-between items-center w-full md:w-[70%] right-0 md:px-10 px-5 gap-x-5'>
          <div className='flex gap-x-5 md:gap-x-14 items-center text-white text-[13px]'>
            <p className='hidden md:inline-block'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <p className='md:hidden'>Sale - OFF 50%</p>
            <Link href='' className='underline'>ShopNow</Link>
          </div>
          <select className='bg-primary text-white outline-none'>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default NavBar
