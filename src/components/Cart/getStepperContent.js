import React from 'react'
import CartTable from './CartTable'
import ApplicationForm from './ApplicationForm'
import SummaryForm from './SummaryForm'
export default (stepIndex) => {
    switch (stepIndex) {
        case 0:
            return <CartTable />
        case 1:
            return <ApplicationForm />;
        case 2:
            return <SummaryForm />;
        default:
            return 'Unknown stepIndex';
    }
}