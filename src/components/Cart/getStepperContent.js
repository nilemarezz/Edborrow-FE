import React from 'react'
import CartTable from './CartTable'

export default (stepIndex) => {
    switch (stepIndex) {
        case 0:
            return <CartTable />
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}