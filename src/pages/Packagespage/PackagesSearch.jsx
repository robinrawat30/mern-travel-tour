import React from 'react'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const PackagesSearch = () => {
    return (
        <>
            <div className="max-w-screen-2xl glass shadow-xl   rounded-xl mx-auto mt-20 py-4 lg:py-5 px-4 lg:px-20 ">
                <div >

                    <div className="flex flex-col  py-6  gap-8 justify-center items-center">
                        <h1 className=" text-5xl font-sans text-orange-500 font-bold">Book any package with safar <AirplaneTicketIcon fontSize='60'/></h1>
                        <p className="text-xl font-sans  text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <fieldset className="form-control w-80">
                            {/* <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label> */}
                            <div className="join pb-10">
                                <input
                                    type="text"
                                    placeholder="Seach...."
                                    className="input  border-gray-200 border-2  focus:border-2  md:py-8  md:px-52 join-item" />
                                <button className="btn border-gray-200  border-solid  bg-orange-500 md:pb-10  text-sm md:py-6  md:px-8 text-white join-item">Search</button>
                            </div>
                        </fieldset>
                    </div>
                </div>

            </div>

        </>
    )
}

export default PackagesSearch
