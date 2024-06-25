import React from 'react'
import list from '../../public/list.json'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const PackageNavbar = ({packageItem,filterItem,setItem}) => {
    return (
        <>
            <div className="navbar space-x-10  bg-gray-50">
                <div className="flex ">
                    <a className=" font-sans text-xl cursor-pointer  hover:text-gray-900 text-gray-600" onClick={()=>setItem(list)}>All</a>
                </div>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal gap-20 px-1">
                    {
                        packageItem.map((val)=>(
                            <li><a className=" font-sans text-xl  text-gray-600" onClick={()=>filterItem(val)}>{val}</a></li>


                        ))
                    }
                        


                    </ul>
                </div>
            </div>
        </>
    )
}

export default PackageNavbar
