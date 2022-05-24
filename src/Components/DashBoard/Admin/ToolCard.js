import React from 'react';

const ToolCard = ({o,index,sendEvent, refetch}) => {
    const {_id,image,name,number,price,minOrderQuantity
,availableQuantity,details
}=o
    return (
        <tr className='text-center'>
        <th>{index + 1}</th>
        <td><div class="avatar">
  <div class="w-20 rounded">
    <img src={image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div></td>
       
        <td>{name}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>{minOrderQuantity}</td>
            <td>
            <p title={details} className="text-sm opacity-50">{details.slice(0, 30)}...</p>
                
            </td>
            <td>
                <button onClick={()=>sendEvent(_id)} className="btn btn-xs bg-primary btn-error text-white">Delete</button></td>
        <td> <button className="btn btn-xs btn-success bg-cyan-600 text-white">Update</button></td>
    </tr>
    );
};

export default ToolCard;