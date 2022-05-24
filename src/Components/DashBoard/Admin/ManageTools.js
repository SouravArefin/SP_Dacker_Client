import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';
import Modal from '../Modal';
import ToolCard from './ToolCard';

const ManageTools = () => {
    const [modal,setModal] = useState({})
    const { data:allParts, isLoading,refetch } = useQuery('allParts', () => fetch(`http://localhost:4000/parts`, {
        method: 'GET',
        headers: {
            authorization:`Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }

   
    const partsDelete = (id) => {
        console.log("id want to delete", id);
        // const confirmMsg = window.confirm("Are you sure?")

        // if (confirmMsg) {
        //     console.log("delete with id", id)


            fetch(`http://localhost:4000/parts/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type':'application/json',
                     'authorization': `Bearer ${localStorage.getItem('token')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        setModal({})
                        refetch()
                        toast.success('Tools delete successfully')
                    }
                   
                })
          
        }
        // else {
        //     toast.error('ok,No problem')
        // }


    
    return (
        <div>
         {allParts?.length ? <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>Here is the {allParts?.length} {allParts?.length==1 ?'Tool':'Tools'}:-</h1> : <h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>There is no Tools.Add Some Tools</h1>}
          
            {
                modal?._id && <Modal
                    modal={modal}
            setModal={setModal}
                sendEvent={partsDelete}
              
                
                ></Modal>
            }
         <div className=" mt-10 mb-10">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Stock</th>
                            <th>Minimum-Order</th>
                            <th>Details</th>
                            <th colspan='2'>Action</th>
                           
                           
                        </tr>
                    </thead>
                    <tbody>

                        {
                           allParts?.map((o, index) => <ToolCard
                            key={o._id}
                            o={o}
                                index={index}
                                refetch={refetch}
                               sendEvent={partsDelete}
                               setModal={setModal}
                        ></ToolCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTools;