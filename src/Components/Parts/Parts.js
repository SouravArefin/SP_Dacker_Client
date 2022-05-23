import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../Hooks/useParts';
import Banner from '../Banner/Banner';
import ToolsCard from '../Home/ToolsCard';
import loader from '../../loading.gif'
const Parts = () => {
    const [parts] = useParts()
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/parts/${id}`)
    }
    return (
        <>
        
        {
                    parts.length === 0 ?
                        <div className='h-[80vh] w-[100ew] flex items-center justify-center'>
                            <img src={loader} alt='' />
                        </div>
                    :
                    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        parts.map(tool => <ToolsCard handlePurchase={handlePurchase} tool={tool} key={tool._id}></ToolsCard>)
                    }
                </div>   
                    
        }
        </>

      
    );
};

export default Parts;