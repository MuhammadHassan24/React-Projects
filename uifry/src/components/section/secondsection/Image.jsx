
function Image() {
    return (
        <>
            <div className="">
                <div className="w-[440px] h-[530px] relative bg-[#F6F6F9] sm:flex hidden justify-center items-center">
                    <img className="absolute bottom-0" src="src/assets/person3.png" alt="" />
                    <img className="absolute -bottom-16 -left-40" src="src/assets/chart3.png" alt="" />
                    <img className="absolute -top-10 right-10" src="src/assets/Group (1).png" alt="" />
                    <img className="absolute -left-8 top-14" src="src/assets/Icon.png" alt="" />
                </div>
            </div>
            <div className="w-[280px] h-[380px] bg-[#F6F6F9] relative ml-10 mr-3 sm:hidden flex ">
                <img className="absolute bottom-0 " src="src/assets/person3.png" alt="" />
                <img className="absolute size-56 -bottom-14 -left-20" src="src/assets/chart3.png" alt="" />
                <img className="absolute size-fit top-10 -right-5" src="src/assets/Icon.png" alt="" />
                <img className="absolute size-20 -left-10 top-20" src="src/assets/line1.png" alt="" />
            </div></>

    )
}

export default Image
