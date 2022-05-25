import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';

const ManageTable = ({ o, index, refetch, sendEvent, setModal }) => {

    //console.log(o)

    const { _id,isDeliverd, transactionId,ship, paid, img, productName, userName, email, number, price, quantity, address } = o
    
    const [user]=useAuthState(auth)
    const makeShip = () => {
        fetch(`http://localhost:4000/ship/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body:JSON.stringify({isDeliverd:true})
        }

        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('On the way for shipping')
                }
                else { 
                    toast.error(`Can't Shipped`)
                }
            })

    }
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>

            <td>{userName}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{address}</td>
            <td>{number}</td>
            <td>{
                transactionId ?<span className='text-amber-700 font-bold'>{transactionId}</span> 
                    :
                    <span className='text-2xl sp-style text-red-700'> can't receive the money yet</span>
            
            }</td>
            {
                paid ? <>

                    <td>
                        <p className='text-2xl font-bold text-green-700 sp-style'>Already Paid</p>
                    </td>
                    <td>
                        {
                            isDeliverd? <p className='text-2xl font-bold text-blue-700 sp-style'>Shipping Done</p>:<button onClick={makeShip} className="text-white bg-cyan-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Ship</button>
                        }
                        
                    </td>
                </>
                    :
                    <>
                        <td>
                            <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-primary btn modal-button">Delete</label></td>
                        <td>
                            <p className='text-2xl font-bold text-red-700 sp-style'>Not Paid Yet</p>
                        </td>

                    </>
            }

        </tr>
    );
};

export default ManageTable;