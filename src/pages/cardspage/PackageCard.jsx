import React from 'react'



// creating package card using props

const PackageCard = ({item}) => {
    return (
        <>


         
                <div className="card p-10 md:p-0 bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={item.image}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-sans">{item.title}</h2>
                        <p className="text-sm font-sans">{item.description}</p>
                        <div className="divider"></div>

                        <div className="card-actions flex  justify-between items-center">
                            <button className="btn  bg-green-500 text-white">Buy Now</button>
                            <div>
                            <p>Rs.{item.price}</p>
                            </div>
                          

                        </div>
                    </div>
                </div>
         
        </>
    )
}

export default PackageCard
