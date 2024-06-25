import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';






const OfferCard = ({ item }) => {


    return (
        <>




            {item.map((val) => (

                <div className="bg-base-100   rounded-xl shadow-xl">

                    <div key={val.id} className="card  my-5  w-full card-side px-5 ">
                        <div className="w-1/3   pt-6">
                            <figure>
                                <img
                                    src={val.image}
                                    className="rounded-lg" alt="Movie" />
                            </figure>

                        </div>
                        <div className="w-2/3">

                            <div className="card-body flex flex-col items-start justify-start ">
                                <h2 className="card-title text-xl text-gray-500 font-sans">{val.title}</h2>
                                <p className=" font-sans text-xl">{val.description}</p>

                            </div>
                        </div>

                    </div>
                    <div className="divider  divide-neutral-700 m-2"></div>
                    <div className="flex items-center justify-center py-4">
                        <a className="text-blue-500 text-center font-sans  font-semibold cursor-pointer text-xl">View More Details <ArrowForwardIosIcon /></a>
                    </div>


                </div>



            ))}




        </>
    )
}

export default OfferCard
