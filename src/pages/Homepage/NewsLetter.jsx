import React from 'react'

const NewsLetter = () => {
    return (
        <>

            <div className=" max-w-screen-2xl space-y-8 m-auto py-4 lg:py-5 px-4 lg:px-20 rounded-lg  bg-blue-500">
                <form>
                  <div className="flex flex-col items-center gap-5 py-20">

                    <h6 className=" font-sans text-white text-4xl text-center font-bold">Subscribe to our Newsletter for upcoming </h6>
                    <h6 className="font-sans text-yellow-400 text-4xl text-center font-bold">trip Updates</h6>
                    <fieldset className="form-control w-80">
                        {/* <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label> */}
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="input   md:py-8  md:px-52 join-item" />
                            <button className="btn bg-yellow-400 md:pb-10  text-sm md:py-6  md:px-8 text-white join-item">Subscribe</button>
                        </div>
                    </fieldset>
                  </div>
                </form>
            </div>

        </>
    )
}

export default NewsLetter
