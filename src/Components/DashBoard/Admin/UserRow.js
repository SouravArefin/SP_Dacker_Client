import React from 'react';
import { toast } from 'react-toastify';
import noImage from '../../../no-image.png'
const UserRow = ({ user, index, refetch }) => {
    const { email, role, name, img } = user
    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('SuccessFully make a admin')
                }
                else {
                    toast.error(`Sorry!!! You can't make anyone admin.Only admin can make other's admin`)
                }
            })

    }
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>
                {
                    img ? <div class="avatar">
                        <div class="w-20 rounded">
                            <img src={img} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                        :
                        <div class="avatar">
                            <div class="w-20 rounded">
                                <img src={noImage} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                }


            </td>
            <td><span className="font-bold">{name}</span></td>
            <td><span className="font-bold">{email}</span></td>
            <td>{role ? <span className='text-green-700 sp-style'> Admin</span> : <button onClick={makeAdmin} className="btn btn-xs">Promote</button>}</td>

        </tr>

    );
};

export default UserRow;