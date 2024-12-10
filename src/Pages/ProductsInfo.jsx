import React from 'react'
import { Minus, Plus } from 'lucide-react';
import Swipper from './swipper'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addItem, deleteItem } from '../features/CardItems/CardItemSlice';
import { MainCartItem } from './ItemDetails';

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

const ProductsInfo = () => {
    const CardItem = useSelector((state) => state.itemCard.value);
    const dispatch = useDispatch();
    const { id } = useParams();
    const findFruits = fruits.filter((item) => item.id == id);
    const isInCart = CardItem.some((cartItem) => cartItem.id === findFruits[0].id);

    return (
        <>
            <div className=" w-full  md:w-[78%] bg-white  m-auto ">
                <div className=' flex flex-col md:flex-row gap-2  md:gap-5 '>
                    <div className=' w-full  md:w-[50%] h-[300px]  md:h-[600px] bg-white '>
                        <Swipper data={findFruits} />
                    </div>
                    <div className=' w-full  md:w-[50%] bg-white p-1'>
                        <p className=' text-xl font-semibold'>{findFruits[0].name}</p>
                        <br />
                        <p className=' text-gray-300'>{findFruits[0].weight}</p>
                        <br />
                        <div className=' flex gap-4 items-center'>
                            <p className=' text-2xl font-bold'>₹{findFruits[0].price}</p>
                            <p className=' text-gray-400 text-xs'>₹{findFruits[0].cutPrice}</p>
                        </div>
                        {isInCart ? (
                            <div className="flex items-center justify-between text-sm border-2 font-medium mt-10 rounded-md text-pink-400 w-[200px] border-pink-300 h-[38px]">
                                <Minus
                                    size={20}
                                    onClick={() => dispatch(deleteItem(findFruits[0].id))}
                                    className="bg-pink-200 cursor-pointer w-[26px] h-[35px]"
                                />
                                <p className="text-sm">{CardItem.filter((item) => item.id === findFruits[0].id).length}</p>
                                <Plus
                                    size={20}
                                    onClick={() => dispatch(addItem(findFruits[0]))}
                                    className="bg-pink-200 cursor-pointer w-[26px] h-[35px]"
                                />
                            </div>
                        ) : (
                            <button
                                className="bg-pink-600 text-sm border-2 font-medium py-4 rounded-md text-white w-full  md:w-[200px] mt-10"
                                onClick={() => dispatch(addItem(findFruits[0]))}
                            >
                                Add to Cart
                            </button>
                        )}
                        <br /><br /><br />
                        <br />
                        <p className=' font-semibold'>Product Highlights</p>
                        <br />
                        <hr className=' bg-gray-400' />
                        <br />
                        <p className=' text-center font-semibold text-lg mb-10'>How it Works</p>
                        <p className=' font-bold'>Open the app</p>
                        <p className=' text-gray-400 mt-2 text-sm ' >Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more</p>
                        <br />
                        <p className=' font-bold'>Place an order</p>
                        <p className=' text-gray-400 mt-2 text-sm '>Add your favourite items to the cart & avail the best offers</p>
                        <br />
                        <p className=' font-bold'>Get free delivery</p>
                        <p className=' text-gray-400 mt-2 text-sm '>Experience lighting-fast speed & get all your items delivered in 10 minutes</p>
                        <br /><br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsInfo