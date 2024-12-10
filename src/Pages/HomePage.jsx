import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className=' w-[78%] m-auto'>
      <p className=' font-bold mb-3 mt-5'>Grocery & Kitchen</p>
      <div className=' h-[120px]  mt-3 flex p-2 bg-white rounded-md '>
        <div className=' flex cursor-pointer flex-col  items-center justify-center text-center' onClick={()=>navigate(`/cn/fruits-vegetables/all/2987654567898765432345678i76543456789`)}>
          <img src="https://img.freepik.com/premium-photo/basket-filled-with-colorful-fruits-vegetables-photo-white-isolated-background-ar-32-v-6-job_630290-16360.jpg?w=900" className=' object-contain h-[65px]' />
          <p className=' mt-2 text-sm'>Fruits & <br /> Vegetables</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage