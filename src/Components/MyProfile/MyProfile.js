import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { GrUpdate } from 'react-icons/gr'
import img from '../../hand.jpg'
const MyProfile = () => {
    return (
        <div className='shadow-xl m-10'>
     
        <div className='cursor-pointer rounded-lg bg-white px-5'>
            <img className="rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear mb-5" src={img} alt=""  />
            <div className='card-border w-full  bg-[#6D9900] '>

            </div>
        <div className="spacer w-full bg-[#6D9900]"></div>
        <div className='text-center mt-3'>
            <h1 className=' sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>name</h1>
                <h1 className='sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>Supplier:</h1>
            <p className='sp-style  font-bold text-[#6D9900] mb-3'>Price: /-</p>
                <p className='font-bold sp-style text-[#5f57a8] mb-3'>In-Stock:</p>
                <p className='sp-style  font-bold text-[#233002] mb-3'>Sold:</p>
            <p className=' sp-style text-[#707070] line-height'></p>  
        </div>
        <div className='flex justify-evenly mt-5 mb-10'>
             
              
                
                
            <button  className='nav-btn font-bold text-md flex items-center'><GrUpdate className='text-sky-700'></GrUpdate><span className='font-bold text-md ml-1 text-sky-700'>Update</span></button>
        </div>
        </div>
      
    </div>
   
);
};

export default MyProfile;