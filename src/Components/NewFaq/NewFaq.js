import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../../ask.jpg'
import Accordion from './Compo/Accordion'
const NewFaq = () => {
    return (
        <div className=" ">
           
            <div className='m-20 grid grid-cols-1 gap-10  md:grid-cols-2  justify-items-center'>

      <div>
                    <Accordion title=" What Kind Of Products Do You Supply? " content="
       We provide the best tools in Bangladesh for small business and entrepreneurs. We're community-powered software for social media marketing and analytics. Stop struggling to get better at social media and get great results now. It's easy to get started at BoldTap!Build a presence in LinkedIn Marketing. Instant growth and ROI by using the BoldTap Social Analytics Platform." />
        <Accordion
          title="Do You Supply in All Over Bangladesh?"
          content="Yes we supply our tools all over Bangladesh and are planning on all over the world, but the real win is that we do it for less than we could.Today we sold our screws for 7E and then sold them again for $3.What a steal and we even have more.The barber pole and welder are for the boy.It's a tote where we can put everything together so he doesn't have to go digging for anything he needs.It's been a great system for keeping him busy.."
        />
        <Accordion
          title="Do You Supply Products Outside Bangladesh?"
          content=" Yes. We supply outside Bangladesh for the making of quality tools, so our first product is by far and away our own product, which we pride ourselves in. And the sourcing of the factories to make these and obviously the manufacturing are in the hands of JW Boston. So that's where the quality and the high-quality of this product is, and we are very, very proud of the quality of the material we use. I think we've talked about this before but most T-shirts you can buy in the shop this year have been made in America, in a factory. A lot of them are made in China.
         "
        />
      </div>
            
            <div>
<img className='w-1/2  md:mx-0 mx-auto 'src={image} alt=''/>
            </div>
      
    
        </div>
        </div>
    );
};

export default NewFaq;