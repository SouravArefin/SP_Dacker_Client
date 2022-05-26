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
import GetTouch from './GetTouch';
import wave from '../../waves.svg'
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

                        {/* // */}
                        <div className='bg-gradient-to-t from-primary to-secondary'>

                        <div className="custom-shape-divider-top-1653206227">
                    <img src={wave} alt="" />
                </div>
                        <h1 className='text-uppercase sp-style text-center text-gray-700 text-4xl md:text-5xl '>We Always Try To Give Our Best</h1>
                        
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
                        
                      <GetTouch/>

                     

            </div>
                    
        }
        
        </>
       
    );
};

export default Home;