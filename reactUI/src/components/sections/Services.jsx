import ServiceBox from "../ServiceBox"

function Services() {
    return (
        <div className="bg-[#EBF0FF] py-16 px-32 flex justify-between items-center  ">
            <div className="w-full flex justify-between items-center">
                <div className="max-w-[460px] space-y-5">
                    <h1 className='text-[#5380EA] text-xl font-bold text-start '>Services we offer</h1>
                    <h1 className="text-[#0F172A] font-extrabold text-4xl leading-11 ">We Believe In True Partnership And Thus Get Our <span className='text-[#E54A2A]'>Customers</span> A Bang For Their Bucks. There Are Various Areas In Which We Function, Here Are A Few Of Them:</h1>
                </div>
                <div className="w-fit h-fit grid grid-cols-2 gap-5 ">
                    <ServiceBox className="bg-[#0F172A] text-white font-extrabold" title={"Web Design & Web Development"} svgUrl={"src/assets/f7--square-on-circle.svg"} />
                    <ServiceBox className="bg-white text-[#0F172A] font-extrabold" title={"E-Commerce Solutions"} svgUrl={"src/assets/iconamoon--shopping-card-fill.svg"} textWidth={32} />
                    <ServiceBox className="bg-white text-[#0F172A] font-extrabold" title={"Customized Application Development"} svgUrl={"src/assets/si--dashboard-customize-fill.svg"} />
                    <ServiceBox className="bg-white text-[#0F172A] font-extrabold" title={"Search Engine Optimization & Digital Marketing"} svgUrl={"src/assets/hugeicons--search-list-02.svg"} />
                </div></div>
        </div>
    )
}

export default Services
