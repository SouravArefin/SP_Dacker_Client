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
            
                       


                        
            <h1 className="text-5xl text-center text-amber-900 mt-10 sp-style">Latest Tools</h1>
            <div className='container mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                            {
                                reversedTools.slice(0, 6).map(tool => <ToolsCard handlePurchase={handlePurchase} tool={tool} key={tool._id}></ToolsCard>)
                            }

                
                        </div>
                        <button  className="happy mt-10 bg-primary hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white" onClick={() => navigate('/parts')}>
                                 More Tools
                            </button>
                        <h1 className="md:text-5xl text-2xl review-style text-center text-amber-900 mt-10 ">What Our Client's Says</h1>
                        <div className='container mx-auto  mb-10'>
                <ReviewSlider></ReviewSlider>
                        </div>
                        
                      <GetTouch/>

                     {/* extra section */}

                     <h1 className='text-uppercase text-center text-amber-700 sp-style text-4xl md:text-5xl mt-20 font-semi custom-border-primary w-fit mx-auto pb-4 mb-5'>Frequently Asked Questions</h1>

                        <div className="custom-shadow ml-20 mr-20 p-10">
                        <h1 className="text-xl md:text-2xl text-red-700 sp-style"> What Kind Of Products Do You Supply?</h1>
                        <p className="text-xl md:text-2xl text-blue-700 sp-style">`We provide the best tools in Bangladesh for small business and entrepreneurs. We're community-powered software for social media marketing and analytics. Stop struggling to get better at social media and get great results now. It's easy to get started at BoldTap!Build a presence in LinkedIn Marketing. Instant growth and ROI by using the BoldTap Social Analytics Platform.</p>
                <h1 className="text-2xl md:text-2xl text-red-700 sp-style"> Do You Supply in All Over Bangladesh?</h1>
                        <p className="text-xl text-blue-700 sp-style">`Yes we supply our tools all over Bangladesh and are planning on all over the world, but the real win is that we do it for less than we could.Today we sold our screws for 7E and then sold them again for $3.What a steal and we even have more.The barber pole and welder are for the boy.It's a tote where we can put everything together so he doesn't have to go digging for anything he needs.It's been a great system for keeping him busy.`</p>
                <h1 className="text-xl md:text-2xl text-red-700 sp-style">Do You Supply Products Outside Bangladesh??</h1>
                        <p className="text-xl text-blue-700 sp-style">`Yes. We supply outside Bangladesh for the making of quality tools, so our first product is by far and away our own product, which we pride ourselves in. And the sourcing of the factories to make these and obviously the manufacturing are in the hands of JW Boston. So that's where the quality and the high-quality of this product is, and we are very, very proud of the quality of the material we use. I think we've talked about this before but most T-shirts you can buy in the shop this year have been made in America, in a factory. A lot of them are made in China.`</p>
                        </div>
            </div>
                    
        }
        
        </>
       
    );
};

export default Home;