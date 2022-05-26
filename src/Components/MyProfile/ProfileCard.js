import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import noImg from '../../no-image.png'
const ProfileCard = ({ singleUser }) => {
    const { name, email, img, role, number, address, institute, _id } = singleUser;
    console.log(singleUser);
    const [profileUser] = useAuthState(auth)
    const profileName = name || profileUser.displayName
    // console.log(singleUser)
    const navigate = useNavigate();

    // console.log(singleUser)
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            {/* <div classNameName="card profile-card ">
                {
                    img ? <img src={img} alt="John" style={{ width: "100%" }} />
                        :    <img src={noImg} alt="John" style={{ width: "100%" }} />
             }
                <h1 classNameName='pt-5 sp-style text-blue-700 font-bold'>Name: {profileName}</h1>
                <h1 classNameName='sp-style font-bold'>Email: {email}</h1>
                <h1 classNameName='sp-style font-bold'>Number: {
                    number ? number : "N/A"
                }</h1>
                <h1 classNameName='sp-style font-bold'>Address: {
                    address ? address : "N/A"
                }</h1>
                <h1 classNameName='sp-style font-bold '>Educational Institution :
                    <span classNameName="text-green-700">
                    {
                    institute ? institute : "N/A"
                }
                </span>
                 
                
                </h1>
                <p classNameName="title font-bold sp-style">Role: {
                    role === 'admin' ? 'Admin' : ' User'
                }</p>
                <div>
                    <Link classNameName='mx-2' to="#">
                        <i classNameName="fa fa-dribbble" />
                    </Link>
                    <Link classNameName='mx-2' to="#">
                        <i classNameName="fa fa-twitter" />
                    </Link>
                    <Link classNameName='mx-2' to="#">
                        <i classNameName="fa fa-linkedin" />
                    </Link>
                    <Link classNameName='mx-2' to="#">
                        <i classNameName="fa fa-facebook" />
                    </Link>
                </div>
                <p>
                    <button onClick={() => navigate(`/dashboard/my-profile/edit-profile/${_id}`)}>Update Profile</button>
                </p>
            </div> */}
            <div className="mt-10 md:pl-2 card md:w-1/2 w-4/5 mx-auto lg:card-side bg-base-100 shadow-xl">
                <figure className='flex-1'>
                    {
                        img ? <img className='rounded-full ' src={img}
                            alt={name} />
                            : <img className='rounded-full' src={noImg}
                                alt={name} />
                    }

                </figure>
                <div className="card-body flex-1">
                    <h2 className="card-title sp-style text-blue-700 font-bold">Name: {profileName}</h2>
                    <h1 className='sp-style font-bold'>Email: {email}</h1>
                    <h1 className='sp-style font-bold'>Number: {
                        number ? number : "N/A"
                    }</h1>
                    <h1 className='sp-style font-bold'>Address: {
                        address ? address : "N/A"
                    }</h1>
                    <h1 className='sp-style font-bold '>Educational Institution :
                        <span className="text-green-700">
                            {
                                institute ? institute : "N/A"
                            }
                        </span>


                    </h1>
                    <p className="title  font-bold sp-style">Role:
                        <span className='text-red-700'>
                        {
                        role === 'admin' ? 'Admin' : ' User'
                        }
                        </span>
                   
                    </p>
                    <div className="card-actions justify-end">
                  
                        <button    className="btn btn-primary" onClick={() => navigate(`/dashboard/my-profile/edit-profile/${_id}`)}>Update Profile</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;