import React, { useState } from 'react'

import list from '../../../public/list.json'







import OfferCard from '../cardspage/OfferCard';
import PackageNavbar from '../../components/PackageNavbar';
import PercentIcon from '@mui/icons-material/Percent';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const HomeOfferPackages = () => {

    const [item, setItem] = useState(list);

    const packageItem = [...new Set(list.map((val) => val.vehicle))];

    const filterItem = (val) => {
        const newItem = list.filter((newval) => newval.vehicle === val);
        setItem(newItem);
    }


    return (
        <>


            <div>
                <div className=" max-w-screen-2xl  bg-gray-50 rounded-lg shadow-xl my-5  m-auto py-5 lg:py-12 px-4 lg:px-20 ">
                    <div className="py-4 md:py-8">
                        <h1 className="text-center text-black  font-sans   font-semibold text-5xl">Offer for you <LocalOfferIcon fontSize='60'/></h1>

                    </div>
                    <div>


                        <PackageNavbar packageItem={packageItem} filterItem={filterItem} setItem={setItem} />

                        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10">


                            <OfferCard item={item} key={item.id} />


                        </div>
                    </div>





                </div>



            </div>
        </>
    )
}

export default HomeOfferPackages
