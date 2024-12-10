import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../features/CardItems/CardItemSlice';
import { useNavigate } from 'react-router-dom';

const fruits = [
  {
    id: 0,
    image: "https://cdn.zeptonow.com/production///tr:w-1000,ar-804-748,pr-true,f-auto,q-80/inventory/product/93325143-6e7b-495f-b8c9-c0f395d59d00-baby_apple_shimla.PNG",
    name: "Apple",
    price: 150,
    cutPrice: 180,
    about: "Fresh and juicy red apples, rich in antioxidants and fiber.",
    weight: "1kg"
  },
  {
    id: 1,
    image: "https://cdn.zeptonow.com/production///tr:w-1000,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/07e6d87d-1150-4ede-847c-72dc55ef7b55.jpg",
    name: "Banana",
    price: 60,
    cutPrice: 80,
    about: "Sweet and energy-boosting bananas, a great source of potassium.",
    weight: "1kg"
  },
  {
    id: 2,
    image: "https://cdn.zeptonow.com/production///tr:w-1000,ar-679-515,pr-true,f-auto,q-80/cms/product_variant/6df79a4f-e9bf-4c29-8e07-25dd6644837e.jpeg",
    name: "Grapes",
    price: 120,
    cutPrice: 150,
    about: "Seedless green grapes, perfect for snacking or juicing.",
    weight: "1kg"
  },
  {
    id: 3,
    image: "https://as1.ftcdn.net/v2/jpg/08/91/07/06/1000_F_891070657_SYH7szwwOfajIHSeh7s0OXlHx84eFEvC.jpg",
    name: "Mango",
    price: 200,
    cutPrice: 250,
    about: "Delicious and ripe Alphonso mangoes, known as the king of fruits.",
    weight: "1kg"
  },
  {
    id: 4,
    image: "https://cdn.zeptonow.com/production///tr:w-1000,ar-463-480,pr-true,f-auto,q-80/cms/product_variant/79827d6a-ea85-4ec4-b597-8f15363b71ec.png",
    name: "Orange",
    price: 100,
    cutPrice: 130,
    about: "Citrusy and tangy oranges, rich in Vitamin C.",
    weight: "1kg"
  }
];

const FruitsVegetables = [
  {
    name: 'All',
    image: 'https://cdn.zeptonow.com/production///tr:w-90,ar-614-406,pr-true,f-auto,q-80/cms/sub_category/c067507c-a931-4a09-b701-a2171b8f6bf9.png'
  },
  {
    name: 'Fresh Vegetables',
    image: 'https://cdn.zeptonow.com/production///tr:w-90,ar-96-96,pr-true,f-auto,q-80/cms/sub_category/58d4b6f3-109c-44fd-84b9-fd33c01a431c.png'
  },
  {
    name: 'Fresh Fruits',
    image: 'https://cdn.zeptonow.com/production///tr:w-90,ar-120-120,pr-true,f-auto,q-80/cms/sub_category/10a49c21-21a4-4565-9e8e-e090dfd839e2.png'
  }
];

const SideBarItem = () => {
  const [status, setStatus] = useState(0);
  return (
    <div className='flex flex-col gap-3   z-30 border-r-2  overflow-hidden  '>
      {
        FruitsVegetables.map((item, index) => {
          return (
            <div key={index} className={`p-2 flex transition-all ease-linear   gap-2 items-center 
            ${index === status ? 'border-l-4 border-purple-500 bg-purple-200' : ''} 
            ${index === status ? 'border-l-4 border-purple-500' : ''}
            hover:bg-purple-200`} onClick={() => setStatus(index)}>
              <img src={item.image} className=" w-[20px] h-[20px] md:w-[40px]  md:h-[40px] bg-white rounded-3xl" />
              <p className=' text-xs md:text-balance '>{item.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export const MainCartItem = () => {
  const CardItem = useSelector((state) => state.itemCard.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-1 gap-2  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-4 md:gap-5'>
      {fruits.map((item, index) => {
        const isInCart = CardItem.some((cartItem) => cartItem.name === item.name);
        return (
          <div className='  p-1  mr-3' key={index} >
            <div
              className=' w-full  sm:min-w-[190px] '
              onClick={() => navigate(`/pn/${item.name}/pvid/${index}`)}
            >
              <img src={item.image} className='object-contain bg-white m-auto w-full h-[160px] ' />
              <p className='mt-2 text-sm'>{item.name}</p>
              <p className='mt-2 text-sm py-2'>{item.weight}</p>
              <div className='flex gap-2 items-center'>
                <p className='mt-2 font-bold'>₹{item.price}</p>
                <p className='mt-2 text-xs line-through text-gray-400 flex'>₹{item.cutPrice}</p>
              </div>
            </div>

            {!isInCart ? (
              <button
                className='text-sm border-2 font-medium w-full mt-2 py-2 rounded-md text-pink-400 border-pink-300'
                onClick={() => dispatch(addItem(item))}
              >
                Add to Cart
              </button>
            ) : (
              <div className='flex items-center justify-between text-sm border-2 font-medium w-full mt-2 rounded-md text-pink-400 border-pink-300 h-[38px]'>
                <Minus
                  size={20}
                  onClick={() => dispatch(deleteItem(item.id))}
                  className='bg-pink-200 cursor-pointer w-[26px] h-[35px]'
                />
                <p className='text-sm'>{CardItem.filter((cartItem) => cartItem.name === item.name).length}</p>
                <Plus
                  size={20}
                  onClick={() => dispatch(addItem(item))}
                  className='bg-pink-200 cursor-pointer w-[26px] h-[35px]'
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const ItemDetails = () => {
  return (
    <div className='  w-full  xl:w-[78%] py-2 m-auto'>
      <div className=" flex gap-2">
        <SideBarItem />
        <MainCartItem />
      </div>
    </div>
  )
}

export default ItemDetails