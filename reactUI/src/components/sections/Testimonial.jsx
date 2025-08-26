
function Testimonial() {
    return (
        <div className="relative pt-20 pb-40 px-32 overflow-hidden">
            <img className="h-[478px] absolute left-0 top-32 -z-10 " src="src/assets/shadow2.png" alt="" />
            <img className="h-[558px] absolute right-0  top-0 -z-10 " src="src/assets/shadow3.png" alt="" />
            <div className="flex flex-col justify-center items-center gap-16 ">
                <h1 className="text-[#0F172A] font-bold text-4xl"> Testimonial</h1>
                <div className="flex justify-between w-full">
                    <div className=" bg-transparent flex gap-3 max-w-md p-5  border-white border-2 ">
                        <img className="size-12" src="src/assets/person1.png" alt="" />
                        <div className="space-y-2 mt-2">
                            <h1 className="text-[#0F172A] font-semibold">Mr Smith</h1>
                            <p className="leading-5">RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creations enables them to provide world class service.”</p>
                        </div>
                    </div>
                    <div className=" bg-transparent flex gap-3 max-w-md p-5 border-white border-2  ">
                        <img className="size-12" src="src/assets/person1.png" alt="" />
                        <div className="space-y-2 mt-2">
                            <h1 className="text-[#0F172A] font-semibold">Mr Smith</h1>
                            <p className="leading-5">RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creations enables them to provide world class service.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
