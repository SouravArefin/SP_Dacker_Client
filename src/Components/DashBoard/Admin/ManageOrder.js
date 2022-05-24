import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';
import ManageTable from './ManageTable'
const ManageOrder = () => {

     const { data: allorders, isLoading,refetch } = useQuery('allorders', () => fetch(`http://localhost:4000/orders`, {
        method: 'GET',
        headers: {
            authorization:`Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }
    const orderDelete = (id) => {
        console.log("id want to delete", id);
        const confirmMsg = window.confirm("Are you sure?")

        if (confirmMsg) {
            console.log("delete with id", id)


            fetch(`http://localhost:4000/order/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type":"application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        refetch()
                        toast.success('Order delete successfully')
                    }
                })
            
        }
        else {
            toast.error('ok,No problem')
        }

    }
    return (
        <div>
         {allorders?.length ? <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>Here is the {allorders?.length} {allorders?.length==1 ?'order':'orders'}:-</h1> : <h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>There is no Order</h1>}
          
         <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th colspan='2'>Action</th>
                           
                           
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allorders?.map((o, index) => <ManageTable
                            key={o._id}
                            o={o}
                                index={index}
                                refetch ={refetch }
                                sendEvent={orderDelete}
                        ></ManageTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;