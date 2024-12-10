import { ChevronDown, ChevronLeft, CircleUser, Search, ShoppingCart, Sidebar } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const [status, setStatus] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const CardItem = useSelector((state) => state.itemCard.value);
  const SearchPlaceHolder = 'Search here ...'

  const Handle = ()=> {
    setSideBar(false)
    setStatus(true);
  }
  return (
    <>
      <div className="  px-2 xl:px-20  sticky top-0 flex flex-col  xl:h-[90px] p-2 lg:flex-row z-50    items-start  bg-purple-100   text-black">
        <div className='flex  px-3 xl:px-0 items-center gap-5   '>
          <a href="/" className=' w-[110px] ' >
            <img className=' object-cover' src='https://upload.wikimedia.org/wikipedia/commons/8/81/Zepto_Logo.svg' alt='Logo' />
          </a>
          <div className='flex flex-col gap-1 w-full   cursor-pointer'>
            <h1 className=' font-semibold '>Delivery in <b className=' font-bold'>12 Mins</b></h1>
            <div className=' flex items-center'>
            <p className=' text-xs font-medium mr-1 '>Motia Khan, Paharganj, Delhi, Delhi</p>
            <ChevronDown className=' ml-2 -mt-1 '  />
            </div>
          </div>
        </div>
        <div className=' flex  mt-2 items-center px-2  w-full  '>
          <div className=' py-2 relative   md:mt-0 w-[100%] '>
            <div className=' bg-white top-3 w-[50px] h-[45px]  rounded-md absolute  '>
              <Search className=' m-auto text-center mt-3' size={18} />
            </div>
            <input placeholder={SearchPlaceHolder} className='border-[#f2f2f2] w-full  border px-[55px]  outline-none cursor-pointer p-3 rounded-md shadow-lg py-3 ' />
          </div>
          <div className=' hidden lg:flex ml-5 mr-5  gap-8 '>
            <div className=' flex flex-col items-center gap-1' onClick={() => setStatus(!status)}>
              <CircleUser size={23} />
              <p className=' text-sm'>Login</p>
            </div>
            <div className=' flex relative flex-col items-center gap-1' >
              {
                CardItem.length === 0 ? <div onClick={() => setSideBar(!sideBar)}>
                  <ShoppingCart size={23} />
                  <p className=' text-sm'>Cart</p>
                </div>
                  : <div onClick={() => setSideBar(!sideBar)}>
                    <div className=' w-[25px] text-center h-[25px] rounded-3xl mr-14 shadow-lg text-white text-sm flex items-center justify-center bg-purple-400 -right-[20px] absolute'>{CardItem.length}</div>
                    <ShoppingCart size={23} />
                    <p className=' text-sm'>Cart</p>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
      {
        status ? <div>
        <div className=' bg-black  p-1 absolute h-screen w-[100%] z-50 -mt-[90px]  opacity-35' onClick={()=>setStatus(!status)} />
        <div className=' bg-white flex z-50  justify-between w-[50%] m-auto absolute left-[350px] top-[170px]   rounded-md shadow-2xl h-[450px] '>
            <div className=' bg-purple-900 w-[60%] flex flex-col justify-start items-start p-10  h-full rounded-l-md '>
              <img src='https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.18.9/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/logo.svg' className=' mt-5 w-[200px]  ' />
              <p className=' text-4xl mt-5 font-bold text-white  '>Groceries delivered <br /> in 10 minutes</p>
              <div className=' relative mt-7'>
                <div className=' flex items-center justify-center  font-bold w-[50px] absolute h-[48px]  rounded-l-3xl '>
                  <p>+91</p>
                </div>
                <input className=' py-3 p-3 rounded-full w-[400px] outline-none px-16' placeholder='Enter Phone Number' />
              </div>
              <button className=' bg-pink-600 text-white w-[400px] rounded-3xl py-3 font-bold mt-3'>Continue</button>
            </div>
            <div className=' flex flex-col bg-white rounded-md w-[100%]'>
              <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.18.9/tr:w-100,ar-100-100,pr-true,f-auto,q-80//images/get-the-app/get-the-app-phone.png" className=' object-contain w-[100px] m-auto mt-10  ' />
              <p className=' -mt-[200px] text-2xl text-center font-bold m-auto '>Order faster & easier everytime </p>
              <p className=' -mt-[200px]  m-auto '>with the Zepto App </p>
            </div>
        </div>
        </div> : null
      }
      {
        sideBar ? <div>
        <div onClick={()=>setSideBar(!Sidebar)} className=' bg-black  flex w-[78%] -top-10 z-50 h-[900px] absolute opacity-50 ' />
        <div className=' bg-[#f2f2f2] flex flex-col justify-between absolute right-0 z-50  -top-[1px]  h-[900px] w-[400px]'>
          <div className=' flex gap-2 px-1   bg-white   w-full  text-black  py-3 ' >
            <ChevronLeft size={25} onClick={()=>setSideBar(!Sidebar)} />
            <p className=' font-medium'>Cart</p>
          </div>
          <div className=' bg-white p-2 w-full  rounded-l-sm'>
            <p className=' text-center mt-2 font-semibold text-lg'>
              Please Login
            </p>
            <p className=' text-sm text-gray-400 mt-2 text-center mb-5'>
              Please login to access the cart.
            </p>
            <button onClick={()=> Handle()} className=' bg-pink-500 p-2 py-2 w-full rounded-md text-white'>Login</button>
          </div>
          <div></div>
        </div>
       </div> : null
      }
    </>
  )
}

export default Header