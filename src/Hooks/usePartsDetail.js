import React, { useEffect, useState } from 'react';

const usePartsDetail = (id) => {
    
    const [part, setPart] = useState([]);  
    useEffect(() => {
         
           const url = `http://localhost:4000/parts/${id}`
            fetch(url)
            .then(response => response.json())
        .then(data=>setPart(data))
    },[part])
    return { part, setPart}
};

export default usePartsDetail;