import React from 'react'
import { Link } from 'react-router-dom'
import WorkIcon from '@mui/icons-material/Work';
import DiscountIcon from '@mui/icons-material/Discount';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const AuthCard = (props) => {
   
    return (
        <>
              <div className={`absolute   ${props.btnstyle} mt-2 md:mt-2  lg:mt-0   top-52 md:top-28 lg:top-20  right-3 md:right-6  lg:right-3  z-50`} >
                <div className="card  px-3 py-4 md:px-2 md:py-6 bg-base-100   w-auto  space-y-10 shadow-xl">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl  font-bold text-gray-900 ">Hey Traveller</h1>
                        <p className="text-xs font-sans text-gray-700">Get exclusive deals & Manage your trips</p>
                        <Link className="btn btn-wide font-sans bg-orange-500 uppercase text-sm text-white" >Login / Signup </Link>

                    </div>
                    <div>
                        <ul className="flex flex-col gap-2 items-start justify-center">
                            <li className="text-sm  font-semibold space-x-3"><DiscountIcon style={{color:"gray"}}/><Link to='/'>Offer</Link></li>
                            <li className="text-sm  font-semibold  space-x-3"><WorkIcon style={{color:"gray"}}/>{"  "}<Link to='/'>My Trip</Link></li>
                            <li className="text-sm  font-semibold  space-x-3"><CheckCircleIcon style={{color:"gray"}}/>{"  "}<Link to='/'>SafarTrip</Link></li>

                            <div className="divider m-0"></div>
                            <li className="text-sm  font-semibold space-x-3"><CurrencyRupeeIcon style={{color:"grey"}}/><Link to='/'>Go Cash</Link></li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AuthCard
