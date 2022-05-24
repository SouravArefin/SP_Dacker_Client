import React from 'react';
import { toast } from 'react-toastify';

const ManageTable = ({ o, index, refetch,sendEvent,setModal }) => {

  

    const { _id, img, productName, number, price, quantity, address } = o
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
            <label onClick={()=>setModal(o)} htmlFor="deleteModal" className="bg-primary btn modal-button">Delete</label></td>
            <td> <button className="btn btn-xs bg-cyan-500 text-white">Update</button></td>
        </tr>
    );
};

export default ManageTable;