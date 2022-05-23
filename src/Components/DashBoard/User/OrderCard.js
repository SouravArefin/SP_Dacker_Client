import React from 'react';

const OrderCard = ({ o, refetch, index }) => {
    const {img,productName,number,price,quantity,address}=o
    return (
        <tr>
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
    </tr>
    );
};

export default OrderCard;