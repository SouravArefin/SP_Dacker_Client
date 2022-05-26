import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ToolsCard = ({ tool, handlePurchase }) => {
    const { image, name, availableQuantity, price, details, minOrderQuantity, _id } = tool;
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='sp-style text-xl'>{details}</p>
                <p className='sp-style text-sky-700 text-xl font-bold'>Price: ${price} (per piece)</p>
                <p className='sp-style text-xl'>Stock: {availableQuantity}</p>
                <p className='sp-style text-xl'>Minimum Order: {minOrderQuantity}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handlePurchase(_id)} className="btn btn-primary w-full text-white">Buy Now
                    <FontAwesomeIcon className='pl-2'icon={faBagShopping}></FontAwesomeIcon>
                    
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;