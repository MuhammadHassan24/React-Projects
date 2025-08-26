
function Portfolio() {
    return (
        <div className="py-16 px-32 border-2 space-y-10 border-[#5380EA]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0F172A] font-bold text-4xl">Our Portfolio</h1>
                <img className="max-w-48" src="src/assets/Vector18.png" alt="" />
            </div>
            <div className="flex justify-between w-full ">
                <div className=" space-y-5">
                    <h1 className="hover:text-[#5380EA] text-xl font-medium" >Ecommerce websites </h1>
                    <h1 className="hover:text-[#5380EA] text-xl font-medium" >Wordpress Websites </h1>
                    <h1 className="hover:text-[#5380EA] text-xl font-medium" >Logos Design </h1>
                    <h1 className="hover:text-[#5380EA] text-xl font-medium" >Graphices design </h1>
                </div>
                <div className="grid grid-cols-4 grid-rows-4  ">
                    <img src="src/assets/portfolio1.png" alt="" />
                    <img src="src/assets/portfolio2.png" alt="" />
                    <img src="src/assets/portfolio1.png" alt="" />
                    <img src="src/assets/portfolio2.png" alt="" />
                    <img src="src/assets/portfolio1.png" alt="" />
                    <img src="src/assets/portfolio2.png" alt="" />
                    <img src="src/assets/portfolio1.png" alt="" />
                    <img src="src/assets/portfolio2.png" alt="" />
                    <img src="src/assets/portfolio1.png" alt="" />
                    <img src="src/assets/portfolio2.png" alt="" />
                    <img src="src/assets/portfolio1.png" alt="" />
                    <img src="src/assets/portfolio2.png" alt="" />
                    <img src="src/assets/portfolio1.png" alt="" />
                    <img src="src/assets/portfolio2.png" alt="" />
                    <img src="src/assets/portfolio1.png" alt="" />
                    <img src="src/assets/portfolio2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
