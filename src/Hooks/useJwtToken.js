
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// const useJwtToken = user => {
//    // console.log(user,'555');
//     const [token, setToken] = useState('')
//     useEffect(() => {

//         const getToken = async () => {

//             const email = user?.user?.email
//            // console.log({ email });
//             if (email) {
//               //  const { data } = await axios.post('https://powerful-dawn-49608.herokuapp.com/signin', { email })
//                 const { data } = await axios.post('http://localhost:4000/signin', { email })
//                // console.log(data.getToken);
//                 setToken(data.getToken);
//                 localStorage.setItem('token', data.getToken);

//             }

//         }
//         getToken()
//     }, [user])
//     return [token]
// };

// export default useJwtToken;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
const useJwtToken = user => {
    console.log(user,'555');
    const [token, setToken] = useState('')
    useEffect(() => {

        const getToken = async () => {

            const email = user?.user?.email
            const name = user?.user?.displayName
            const img = user?.user?.photoURL
            const currentUser = {email:email,name:name,img:img}
           // console.log({ email });
            if (email) {
                fetch(`http://localhost:4000/user/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(currentUser)
              })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setToken(data.getToken);
                 localStorage.setItem('token', data.getToken);
                })
               // console.log(data.getToken);
                // setToken(data.getToken);
                // localStorage.setItem('token', data.getToken);

            }

        }
        getToken()
    }, [user])
    return [token]
};

export default useJwtToken;