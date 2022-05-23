import React from 'react';

const OrderCard = ({ o, refetch, index }) => {
    const {img,productName,number,price,quantity,address}=o
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
            <td>
                <button className="btn btn-xs btn-error text-white">Cancel</button></td>
        <td> <button className="btn btn-xs btn-success text-white">Payment</button></td>
    </tr>
    );
};

export default OrderCard;