import React from 'react';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';

import UserRow from './UserRow';

const AllUser = () => {


    const { data: allUsers, isLoading, refetch } = useQuery('allUsers', () => fetch(`http://localhost:4000/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }
    // console.log(allUsers)
    return (
        <div >
            <h2 className='text-2xl'>Total User : {allUsers.length}</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User  / admin</th>

                        </tr>
                    </thead>

                    <tbody>

                        {
                            allUsers?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;