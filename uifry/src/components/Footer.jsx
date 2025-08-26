import React from 'react'

function Footer() {
    return (
        <div className='lg:px-20 sm:px-8 px-3 '>
            <div className='sm:flex hidden justify-between py-8'>
                <img src="src/assets/logo (2).png" alt="" />
                <div className='flex text-sm font-bold gap-16'>
                    <a href="#">Home</a><a href="#">About</a><a href="#">Pricing</a><a href="#">Blog</a><a href="#">Contact</a>
                </div>
            </div>
            <hr className='w-full sm:flex hidden' />
            <div className='sm:flex hidden justify-between py-8'>
                <h1>All rights reserved ® uifry.com  | Terms and conditions apply!</h1>
                <div className='flex  gap-5'>
                    <div className='size-10 rounded-full flex justify-center items-center bg-black'>
                        <img src="src/assets/instagram.svg" alt="" />
                    </div>
                    <div className='size-10 rounded-full flex justify-center items-center bg-black'>
                        <img src="src/assets/pinterest.svg" alt="" />
                    </div>
                    <div className='size-10 rounded-full flex justify-center items-center bg-black'>
                        <img src="src/assets/flickr.svg" alt="" />
                    </div>
                    <div className='size-10 rounded-full flex justify-center items-center bg-black'>
                        <img src="src/assets/twitter.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <div className='sm:hidden flex flex-row justify-between'>
                    <img className='size-fit' src="src/assets/logo (2).png" alt="" />
                    <div className='flex flex-col text-sm font-bold gap-8'>
                        <a href="#">Home</a><a href="#">About</a><a href="#">Pricing</a><a href="#">Blog</a><a href="#">Contact</a>
                    </div>
                    <div className='flex flex-col  gap-5'>
                        <div className='size-10 rounded-full flex justify-center items-center bg-black'>
                            <img src="src/assets/instagram.svg" alt="" />
                        </div>
                        <div className='size-10 rounded-full flex justify-center items-center bg-black'>
                            <img src="src/assets/pinterest.svg" alt="" />
                        </div>
                        <div className='size-10 rounded-full flex justify-center items-center bg-black'>
                            <img src="src/assets/flickr.svg" alt="" />
                        </div>
                        <div className='size-10 rounded-full flex justify-center items-center bg-black'>
                            <img src="src/assets/twitter.svg" alt="" />
                        </div>
                    </div>
                </div>
                <h1 className='mx-auto py-16 text-center max-w-64 text-sm sm:hidden flex '>All rights reserved ® uifry.com  | Terms and conditions apply!</h1>
            </div>
        </div>
    )
}

export default Footer
