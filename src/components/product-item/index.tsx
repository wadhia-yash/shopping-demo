import React, { FunctionComponent } from 'react';

import Counter from '../counter';

interface IProductItem {
    id: number,
    productPrice: number,
    productName: string,
    productDescription: string,
    productImage: string,
    cart?: number,
    addToCart: (id: number) => void;
    increaseItem: (id: number) => void;
    decreaseAmount: (id: number) => void;
}

const defaultProps = {
    id: 0,
    productPrice: 10,
    productName: 'Product',
    productDescription: 'Description',
    productImage: 'https://source.unsplash.com/random',
    cart: 0,
    addToCart: () => { },
    increaseItem: () => { },
    decreaseAmount: () => { },
}

const ProductItem: FunctionComponent<IProductItem> = ({ id, productPrice, productName, productDescription, cart, productImage, addToCart, increaseItem, decreaseAmount }) => {
    return (
        <div className='max-w-sm bg-yellow-50 rounded-xl shadow-lg p-2  flex flex-col'>
            <span className='self-end'>Rs. {productPrice}</span>
            <div className='rounded overflow-hidden max-w-sm'>
                <img alt='' src={productImage} className='object-cover h-80 w-96' />
            </div>
            <div className='flex bg-yellow-300 flex-col mt-3 rounded-md p-3'>
                <span className='text-yellow-700 text-lg font-semibold font-sans'>{productName}</span>
                <span className='truncate'>{productDescription}</span>
            </div>
            {cart === 0 ? (
                <div className='flex justify-center items-center p-2 cursor-pointer' onClick={() => addToCart(id)}>
                    <span className='text-yellow-900 text-lg font-semibold font-sans'>Add to cart</span>
                </div>
            ) :
                <div className='mt-2'>
                    <Counter cart={cart} add={() => increaseItem(id)} remove={() => decreaseAmount(id)}/>
                </div>
                }
        </div>
    )
}

ProductItem.defaultProps = defaultProps;

export default ProductItem;
