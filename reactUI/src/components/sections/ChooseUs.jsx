import ExpreienceBox from "../ExpreienceBox"

function ChooseUs() {
    return (
        <div className="relative py-20 px-32">
            <img className="absolute left-0 top-10 -z-10" src="src/assets/shadow1.png" alt="" />
            <img className="absolute -z-10 right-0 bottom-0" src="src/assets/shadow2.png" alt="" />
            <div className=' flex flex-col justify-center items-center gap-5 '>
                <h1 className='text-[#5380EA] text-xl font-bold text-start '>Services we offer</h1>
                <h1 className="text-[#0F172A] font-extrabold text-5xl leading-11 ">For Your Web Development Needs?
                </h1>
                <p className='text-center'>We have passion and love for what we do& we don’t believe in cutting corners and setting wrong expectations. We aim at improving with each passing day and showcase what we actually are in reality, and we do not pretend in any circumstances. There are multiple reasons that will make you fall for us for availing top-notch web development services. Here are a few of them</p>
                <div className=' grid grid-cols-3 place-content-center place-items-center justify-center gap-10  mt-10 w-full'>
                    <ExpreienceBox imageUrl={"src/assets/hugeicons--ai-brain-01.svg"} title={"Experience"} count={"Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place. Also, we have a streamlined project management system to cater to your project requisites. Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines."} className={`px-3 py-7 bg-white rounded-2xl shadow-xl`} />

                    <ExpreienceBox imageUrl={"src/assets/streamline-ultimate--team-meeting.svg"} title={"Dedicated team"} count={"Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place. Also, we have a streamlined project management system to cater to your project requisites. Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines."} className={`px-3 py-7 bg-white rounded-2xl shadow-xl`} />
                    <ExpreienceBox imageUrl={"src/assets/bx--timer.svg"} title={"Rapid turnaround time"} count={"Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place. Also, we have a streamlined project management system to cater to your project requisites. Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines."} className={`px-3 py-7 bg-white rounded-2xl shadow-xl`} />
                    <div></div>
                    <ExpreienceBox imageUrl={"src/assets/streamline-freehand--receipt-view-pricing.svg"} title={"Competitive pricing"} count={"Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place. Also, we have a streamlined project management system to cater to your project requisites. Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines."} className={`px-3 py-7 bg-white rounded-2xl shadow-xl`} />
                    <div></div>
                </div>

            </div>

        </div>
    )
}

export default ChooseUs
