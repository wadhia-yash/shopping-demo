import React, { FunctionComponent, useState } from 'react';

import { ReactComponent as AddIcon } from '../../assets/img/svg/add.svg';
import { ReactComponent as RemoveIcon } from '../../assets/img/svg/remove.svg';

interface ICounter {
    cart?: number,
    add: () => void,
    remove: () => void,
}

const Counter: FunctionComponent<ICounter> = ({cart, add, remove}) => {

    return (
        <div className='flex flex-row justify-center items-center'>
            <div className='bg-stone-400 rounded-full p-2 cursor-pointer' onClick={add}>
                <AddIcon />
            </div>
            <span className='mr-3 ml-3 font-sans antialiased font-medium text-lg'>{cart}</span>
            <div className='bg-stone-400 rounded-full p-2 cursor-pointer' onClick={remove}>
                <RemoveIcon />
            </div>
        </div>
    )
}

export default Counter;
