import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';
import Modal from '../Modal';
import ManageTable from './ManageTable'
const ManageOrder = () => {
    const [modal, setModal] = useState({})
    const { data: allorders, isLoading, refetch } = useQuery('allorders', () => fetch(`https://sp-dacker-server.onrender.com/orders`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }
    const orderDelete = (id) => {
        // console.log("id want to delete", id);
        // const confirmMsg = window.confirm("Are you sure?")

        // if (confirmMsg) {
        //     console.log("delete with id", id)


        fetch(`https://sp-dacker-server.onrender.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    refetch()
                    setModal({})
                    toast.success('Order delete successfully')
                }
            })

    }

    return (
        <div>
            {allorders?.length ? <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>Here is the {allorders?.length} {allorders?.length == 1 ? 'order' : 'orders'}:-</h1> : <h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>There is no Order</h1>}




            {
                modal?._id && <Modal
                    modal={modal}
                    setModal={setModal}
                    sendEvent={orderDelete}


                ></Modal>
            }



            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ToolsName</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>transaction Id</th>
                            <th colspan='2'>Action</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            allorders?.map((o, index) => <ManageTable
                                key={o._id}
                                o={o}
                                index={index}
                                refetch={refetch}
                                sendEvent={orderDelete}
                                setModal={setModal}
                                isLoading={isLoading}
                            ></ManageTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;