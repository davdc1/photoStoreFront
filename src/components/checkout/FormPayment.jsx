import { useEffect, useContext } from 'react'
import { Global } from '../../contexts/GlobalContext';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { OrderAlreadySent } from './OrderAlreadySent';

function FormPayment(){

    const context = useContext(Global)
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if(location.state?.from !== 'formShipping'){
            history.replace('/NotFound')
        }
    }, [])

    return(
        <div>
            {context.orderSent && <OrderAlreadySent/>}
            {!context.orderSent &&
            <div className="flex flex-col w-72 my-4">
                <span>payment method:</span>
                <Link to={{
                    pathname: "/checkout/creditCardDet",
                    state: {
                        from: 'formPaymentMethod'
                    }
                    }}>
                    <button className="border border-1 border-turq rounded px-2 py-1 mx-4 my-4 ">credit/debit card</button>
                </Link>
                <Link to={{
                    pathname: "/checkout/paypal",
                    state: {
                        from: 'formPaymentMethod'
                    }
                    }}>
                    <button className="border border-1 border-turq rounded px-2 py-1 mx-4 my-4">paypal</button>
                </Link>
            </div>}
            <div className="h-10v"></div>
        </div> 
        )
}

export default FormPayment