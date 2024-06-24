import React from 'react'

const SecondaryFooter = () => {
    return (
        <>
            <div className="max-w-screen-2xl m-auto  px-4 lg:px-20">
                <footer className="footer footer-center bg-base-300 text-base-content p-4">
                    <aside>
                        <p>Copyright © ${new Date().getFullYear()} - All right reserved by Safar Ltd</p>
                    </aside>
                </footer>
            </div>
        </>
    )
}

export default SecondaryFooter
