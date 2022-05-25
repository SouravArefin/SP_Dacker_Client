import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ o, index, refetch,sendEvent,setModal }) => {
    const {_id,img,productName,number,price,quantity,address,transactionId}=o
    return (
        <tr className='text-center'>
        <th>{index + 1}</th>
        <td><div class="avatar">
  <div class="w-20 rounded">
    <img src={img} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div></td>
       
        <td>{productName}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{address}</td>
        <td>{number}</td>
        <td>{transactionId
         ? transactionId : <span className='text-red-700 sp-style font-bold text-xl'>Pay First </span>
        
        }
        
        
        </td>
        <td>
        {
           (price && !o.paid) &&   
           <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-primary btn modal-button">Cancel</label>
         
        
          }
            {(price && o.paid) && <span className='text-red-700 sp-style text-center text-2xl font-bold' >
                     Can't Cancel
                    </span>} 
          
 </td>
        <td> 
          {
            (price && !o.paid) && <Link to={`/dashboard/payment/${_id}`}>

<button  className="text-white bg-cyan-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Payment</button>
            </Link>
          
          }
          
          {(price && o.paid) && <span className='text-green-700 sp-style text-center text-2xl font-bold' >
                     Already  Paid
                    </span>} 
        </td>
       
    </tr>
    );
};

export default OrderCard;