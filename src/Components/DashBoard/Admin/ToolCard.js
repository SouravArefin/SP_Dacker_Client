import { faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { GrUpdate } from 'react-icons/gr';
import { useNavigate, useParams } from 'react-router-dom';

const ToolCard = ({o,index,sendEvent, refetch,setModal}) => {
    const {_id,image,name,number,price,minOrderQuantity
,availableQuantity,details
    } = o
    
const navigate = useNavigate()
   
    return (
        <tr className='text-center'>
        <th>{index + 1}</th>
            <td>
                <div class="avatar">
  <div class="w-20 rounded">
    <img src={image} alt="Tailwind-CSS-Avatar-component" />
  </div>
                </div>
            </td>
       
        <td>{name}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>{minOrderQuantity}</td>
            <td>
            <p title={details} className="text-sm opacity-50">{details.slice(0, 30)}...</p>
                
            </td>
            <td>
                <label onClick={() => setModal(o)} htmlFor="deleteModal" className="  bg-red-700 btn modal-button">
             <p className='flex justify center items-center'>
             Delete
                    <FontAwesomeIcon className='pl-2' icon={faTrashRestoreAlt}></FontAwesomeIcon>
                 </p>
                 
                </label>
            
            </td>
            <td> <button onClick={() => navigate(`/dashboard/updateTool/${_id}`)} className="text-white bg-cyan-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">
                <p className='flex justify center items-center'>
                Update
                <GrUpdate className="text-white pl-2 text-xl"></GrUpdate>
                </p>
               
                
                
            </button></td>
    </tr>
    );
};

export default ToolCard;