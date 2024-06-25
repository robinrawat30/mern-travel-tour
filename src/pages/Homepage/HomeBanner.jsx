import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';

import Hero from "../../assets/Hero.png"



import {useTypewriter,cursor} from 'react-simple-typewriter'




const HomeBanner = () => {
    const[typeEffect]=useTypewriter({
        words:['...Kedarnath','...Rishikesh','...London','...Kashmir'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:50,


    })
    return (
        <>
            
            <div className="bg-orange-500   rounded-tr-full rounded-bl-full">
                <div className=" max-w-screen-2xl m-auto py-4 lg:py-5 px-4 lg:px-20 ">


                    <div className="hero  min-h-screen">
                        <div className="hero-content  flex-col-reverse  md:flex-row-reverse  lg:justify-start items-center">
                            <div className="  rounded-xl relative">
                                <img src={Hero} className=" rounded-lg   bg-orange-500 -z-10  md:max-w-sm  shadow-2xl" />

                                <button className="btn btn-lg  glass absolute    top-3/4 hover:no-animation">
                                <EmailIcon fontSize="large" color="warning" />Congratulations
                                <CheckCircleIcon color="success" fontSize="small"></CheckCircleIcon>
                                 <br></br>
                                 <span className=" text-sm">Your Booking completed</span></button>

                            </div>

                            <div className=" space-y-10 md:space-y-20">
                                <h1 className=" font-bold   text-white   text-6xl" >Safar with us & <br></br> explore hidden gems <br /><span className=" text-yellow-400">{" "}{typeEffect}</span></h1>
                                {/* <h1 className="font-bold font-sans text-6xl text-yellow-400">{typeEffect}</h1> */}
                                <p className=" text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quod dolores itaque eligendi alias eaque praesentium tempore, quaerat iste ipsa illo facilis laboriosam sit maiores iure libero labore nostrum </p>
                                <p className="text-sm   text-white"><VerifiedIcon fontSize="small" color="success" />Traval with experts{" "}<VerifiedIcon fontSize="small" color="success"/>Explore hidden gems{"  "}<VerifiedIcon fontSize="small" color="success"/>Instant booking</p>
                                {/* <div>
                                    <Link to='/packages' className=" btn bg-orange-500 text-white ">Get Started</Link>
                                </div> */}


                            </div>
                        </div>
                    </div>





                </div>


            </div>




        </>
    )
}

export default HomeBanner
