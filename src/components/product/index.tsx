import React, { FunctionComponent, useState, useEffect } from 'react';
import useSWR from 'swr';

import ProductItem from '../product-item';

const getProducts = (): Promise<any> => {
    return fetch('https://shopping-backend-test.herokuapp.com/getProducts').then(response => response.json());
}

interface IProductItem {
    product_id: number,
    product_name: string,
    product_desc: string,
    product_price: number,
    product_image: string,
    cart: number,
    cart_cost: number,
}

const Product: FunctionComponent = () => {
    const {data, error} = useSWR("getProducts", getProducts);

    const [productList, setProductList] = useState<Array<IProductItem>>([]);

    useEffect(() => {
        if (typeof data !== "undefined") {
            setProductList(data);
        }
    }, [data]);

    const addToCart = (id: number): void => {
        const product = productList?.map(productItem => {
            if (productItem.product_id === id) {
                return {...productItem, cart: 1, cartCost: productItem?.product_price}
            }
            return productItem;
        });
        setProductList(product);
    }

    const increaseItem = (id: number): void => {
        const product = productList?.map(productItem => {
            if (productItem.product_id === id) {
                return {...productItem, cart: productItem.cart += 1, product_cost: productItem.cart_cost += productItem.product_price}
            }
            return productItem;
        });
        setProductList(product);
    }

    const decreaseAmount = (id: number): void => {
        const product = productList?.map(productItem => {
            if (productItem.product_id === id) {
                return {...productItem, cart: productItem.cart -= 1, product_cost: productItem.cart !== 0 ? productItem.product_price -= productItem.cart_cost : productItem.cart_cost}
            }
            return productItem;
        });
        setProductList(product);
    }

    
    if (error) return <span>error</span>
    if (!data) return <span>loading</span>

    return (
        <div className='container mx-auto p-3'>
            <div className='grid grid-cols-4 gap-4'>
            {productList.map(({product_name, product_desc, product_price, product_image, product_id, cart}: IProductItem) => (
                <ProductItem
                    id={product_id}
                    productPrice={product_price} 
                    productName={product_name}
                    productDescription={product_desc} 
                    productImage={product_image}
                    cart={cart}
                    addToCart={addToCart}
                    increaseItem={increaseItem}
                    decreaseAmount={decreaseAmount}
                    key={product_id}
                 />
            ))}
            </div>
        </div>
    )
}

export default Product;
