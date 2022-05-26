import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';


const UpdateProfile = () => {
    const [authUser] = useAuthState(auth);
    // console.log(authUser);
    const [updateProfile] = useUpdateProfile(auth);
    const [user, setUser] = useState({});
    // console.log(user);

    useEffect(() => {
        fetch(`https://salty-reef-27679.herokuapp.com/user/${authUser?.email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                email: `${authUser?.email}`,
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setUser(json);
            });
    }, [authUser?.email]);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        const image = data?.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = ` https://api.imgbb.com/1/upload?key=c0749433704e7ac8ba2e6b642a43ad51`
        console.log(url);
        if (data?.image[0]) {
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.success) {
                        const img = result.data.url;
                        const userInfo = {
                            name: data.displayName || authUser.displayName,
                            // institution: data.institution || user?.institution || "N/A",
                            number: data.number || user?.number || "N/A",
                            address: data.address || user?.address || "N/A",
                            institute: data.institute || user?.institute || "N/A",
                            img:
                                img ||
                                "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                        };
                        console.log(userInfo);
                        fetch(`https://salty-reef-27679.herokuapp.com/user/${authUser.email}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                email: ` ${authUser?.email}`,
                                authorization: ` Bearer ${localStorage.getItem("token")}`,
                            },
                            body: JSON.stringify(userInfo),
                        })
                            .then((response) => response.json())
                            .then((json) => {
                                console.log(json);
                                toast.success("Profile Updated Successfully");
                                updateProfile({
                                    name:
                                        data?.displayName || authUser?.displayName || "N/A",
                                    img:
                                        img ||
                                        "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                                });
                                reset();

                            });
                    }
                });
        } else {
            const userInfo = {
                name: data.displayName || authUser.displayName,
                // institution: data.institution || user?.institution || "N/A",
                number: data.number || user?.number || "N/A",
                address: data.address || user?.address || "N/A",
                institute: data.institute || user?.institute || "N/A",
                img:
                    user?.photoURL ||
                    authUser?.photoURL ||
                    "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
            };
            // console.log(userInfo);
            fetch(`https://salty-reef-27679.herokuapp.com/user/${authUser.email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    email: `${authUser?.email}`,
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(userInfo),
            })
                .then((response) => response.json())
                .then((json) => {
                    // console.log(json);
                    toast.success("Profile Updated Successfully");
                    updateProfile({
                        name: data?.displayName || authUser?.displayName || "N/A",
                        img:
                            user?.photoURL ||
                            authUser?.photoURL ||
                            "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                    });
                    reset();

                });
        }
        console.log(data);

    };



    return (
        <>
            <h1 className='mt-10 text-3xl text-center text-cyan-700 sp-style'>Update Your Profile</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 m-10'>


                <form className='m-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("displayName", {

                            })}
                        />
                        <label className="label">
                            {errors.displayName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.displayName.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Update Email"
                            className="input input-bordered w-full max-w-xs"
                            value={authUser.email}
                            disabled
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Update Number"
                            className="input input-bordered w-full max-w-xs"
                            {...register("number", {

                            })}
                        />
                        <label className="label">
                            {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update Address"
                            className="input input-bordered w-full max-w-xs"
                            {...register("address", {

                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">institute</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Update institute"
                            className="input input-bordered w-full max-w-xs"
                            {...register("institute", {

                            })}
                        />
                        <label className="label">
                            {errors.institute?.type === 'required' && <span className="label-text-alt text-red-500">{errors.institute.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Update Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs cursor-pointer"
                            {...register("image", {

                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white bg-cyan-700' type="submit" value="Update" />
                </form>
            </div>
        </>
    );
};

export default UpdateProfile;