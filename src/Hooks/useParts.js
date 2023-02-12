import React, { useEffect, useState } from 'react';

const useParts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {

        const url = `https://spdackerserver.up.railway.app/parts`
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return [parts, setParts]
};

export default useParts;