import React, { useEffect, useState } from 'react';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';
import { useQuery } from 'react-query';
import OrderCard from './OrderCard';
const MyOrder = () => {
    const [user] = useAuthState(auth)
   // const [orders, setOrders] = useState([])
    //console.log(orders);
    const navigate = useNavigate()
  
    // useEffect(() => {
    //     const getItems = async () => {
    //         const email = user?.email
    //         const url = `http://localhost:4000/singleOrder?email=${email}`
           
    //         try {
    //             const { data } = await axios.get(url, {
    //                 headers: { 
    //                     authorization: `Bearer ${localStorage.getItem('token')}`
    //                 }
    //             })
                
    //             setOrders(data)
    //         } catch (error) {
                
    //             if (error.response.status === 403 || error.response.status === 401) {
    //                signOut(auth)
    //                 navigate('/signin')
    //             }
    //             toast(error.message)
    //       }
    //     }
    //     getItems()

    // }, [])
    const email = user?.email
    const { data: orders, isLoading,refetch } = useQuery('orders', () => fetch(`http://localhost:4000/singleOrder?email=${email}`, {
        method: 'GET',
        headers: {
            authorization:`Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
         {orders.length ?    <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>Here is the {orders.length} {orders.length==1 ?'tool':'tools'} that you ordered :-</h1> : <h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>You Don't Have any order</h1>}
          
         <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                           
                           
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((o, index) => <OrderCard
                            key={o._id}
                            o={o}
                                index={index}
                                refetch ={refetch }
                        ></OrderCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;