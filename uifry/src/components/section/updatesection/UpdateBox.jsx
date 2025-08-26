

function UpdateBox({ imageUrl, title, desc }) {
    return (
        <div className='sm:w-auto space-y-5'>
            <img src={imageUrl} alt="" />
            <h1 className='text-sm'>{title}</h1>
            <h1 className='font-bold w-[330px] sm:text-xl text-2xl  '>{desc}</h1>
            
        </div >
    )
}

export default UpdateBox
