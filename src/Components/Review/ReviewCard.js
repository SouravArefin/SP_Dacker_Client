import React, { useEffect, useState } from 'react';
import GetReview from './GetReview';

const ReviewCard = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/reviews`)
            .then(res => res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div data-aos="flip-up" className='ml-20 mr-20 grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
            {
                reviews.map(r => <GetReview
                
                    key={r._id}
                    r={r}
                ></GetReview>)
            }
        </div>
    );
};

export default ReviewCard;