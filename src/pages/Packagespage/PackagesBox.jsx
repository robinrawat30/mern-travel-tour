import React from 'react'

import list from '../../../public/list.json'
import PackageCard from '../cardspage/PackageCard'

const PackagesBox = () => {
  return (
    <>
      <div className="max-w-screen-2xl m-auto py-8 lg:py-20 px-4 lg:px-20">
        <div className="gird-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 grid ">

          {list.map((item) => (
            <PackageCard item={item} key={item.id} />

          ))}
        </div>
      </div>
    </>
  )
}

export default PackagesBox
