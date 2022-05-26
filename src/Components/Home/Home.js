import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusineesSummary/BusinessSummary';
import { BiWorld } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import useParts from '../../Hooks/useParts';
import ToolsCard from './ToolsCard';
import { useNavigate, useParams } from 'react-router-dom';
import world from '../../world.jpg'
import hand from '../../hand.jpg'
import project from '../../project.jpg'
import loader from '../../loading.gif'
import ReviewSlider from '../Review/ReviewSlider'
const Home = () => {
    const{id}=useParams()
    const [parts, setParts] = useParts()
    const toolsCopy = [...parts];
    const reversedTools = toolsCopy?.reverse();
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
                        : <div>
                        <Banner />
                        <h1 className='text-uppercase text-center text-white text-4xl md:text-5xl font-semibold'>We are trusted</h1>
                            <h1 className='text-uppercase text-center text-white text-2xl custom-border w-fit mx-auto mt-2 pb-4'>We understand our users expectation</h1>
                            <div className="business-summery mt-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
                                <BusinessSummary
                                    icon={<BiWorld></BiWorld>}
                                    end={50}
                                    title="Countries"
                                    image={world}
                                />
                                <BusinessSummary
                                    icon={<BsPeopleFill></BsPeopleFill>}
                                    end={900}
                                    title="Happy Clients"
                                    image={hand}
                                />
                                <BusinessSummary
                                    icon={<MdOutlineComputer></MdOutlineComputer>}
                                    end={1200}
                                    title="Successful Projects"
                                    image={project}
                                />
                            </div>
            <h1 className="text-5xl text-center text-rose-700 mt-10 sp-style">Latest Tools</h1>
            <div className='container mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                            {
                                reversedTools.slice(0, 6).map(tool => <ToolsCard handlePurchase={handlePurchase} tool={tool} key={tool._id}></ToolsCard>)
                            }

                
                        </div>
                        <button  className="happy mt-10 bg-primary hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white" onClick={() => navigate('/parts')}>
                                 More Tools
                            </button>
                        <h1 className="text-5xl text-center text-rose-700 mt-10 sp-style">Our Customer's Review</h1>

                        <div className='container mx-auto  mb-10'>
                <ReviewSlider></ReviewSlider>
            </div>

            </div>
                    
        }
        
        </>
       
    );
};

export default Home;