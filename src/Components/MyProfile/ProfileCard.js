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
            <div className="card profile-card ">
                {
                    img ? <img src={img} alt="John" style={{ width: "100%" }} />
                        :    <img src={noImg} alt="John" style={{ width: "100%" }} />
             }
                <h1 className='pt-5 sp-style text-blue-700 font-bold'>Name: {profileName}</h1>
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
                <p className="title font-bold sp-style">Role: {
                    role === 'admin' ? 'Admin' : ' User'
                }</p>
                <div>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-dribbble" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-twitter" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-linkedin" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-facebook" />
                    </Link>
                </div>
                <p>
                    <button onClick={() => navigate(`/dashboard/my-profile/edit-profile/${_id}`)}>Update Profile</button>
                </p>
            </div>
        </>
    );
};

export default ProfileCard;