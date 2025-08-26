import Button from "../Button"
import ExpreienceBox from "/src/components/ExpreienceBox"
function Interest() {
    return (
        <div className='py-20 px-32  '>
            <div className='flex flex-col justify-center items-center gap-8 px-16'>
                <h1 className='text-[#5380EA] font-bold max-w-38 text-center'>Thank You For Your Interest In Us!</h1>
                <h1 className='text-[#0F172A] font-bold text-5xl text-center  '>Founded Over 7 Years Ago, RR Technologies Is Now The Main <span className='text-[#E54A2A]'>Web Design</span> And <span className='text-[#E54A2A]'>Web Development</span> Agency In Bangladesh.</h1>
            </div>
            <p className='text-center mt-8'>Technology and business fused together can bear fruitful results talking in terms of business flourishment and success. And this is what exactly we aim to deliver to our esteemed clients, offering our mix of reliability, capability, and longevity to get your website blossoming. We at RR Technologies excel in the area of digital marketing, web software, web development, web designing, and other web solutions that you may consider availing for your website growth.</p>
            <div className='flex py-20 justify-between '>
                <div className='flex flex-col items-center gap-5'>
                    <p className='max-w-lg'>Are you facing difficulties with your website? Do you have a website but lack traffic? No need to worry. We at RR Technologies use our technological expertise amalgamated with our experience to scoop out the right potion of success for your firm. We are highly passionate about our work and leave no stones unturned to delight our customers with high-quality work and efficient project management that comes as a surprise bearing bounteous outcomes.
                    </p>
                    <p className='max-w-lg '>Are you facing difficulties with your website? Do you have a website but lack traffic? No need to worry. We at RR Technologies use our technological expertise amalgamated with our experience to scoop out the right potion of success for your firm. We are highly passionate about our work and leave no stones unturned to delight our customers.
                    </p>
                    <Button text={"Show more.."} className="bg-[#0F172A] rounded-lg " />
                </div>
                <img className='w-fit h-fit' src="src/assets/vector1.png" alt="" />
            </div>

            <div className="flex justify-between items-center  ">
                <ExpreienceBox imageUrl={"src/assets/grommet-icons--projects.svg"} title={"Projects"} count={"65+"} />
                <ExpreienceBox imageUrl={"src/assets/ph--handshake-light.svg"} title={"Clients"} count={"30+"} />
                <ExpreienceBox imageUrl={"src/assets/experience.svg"} title={"Experience"} count={"7years+"} />
                <ExpreienceBox imageUrl={"src/assets/mdi--company.svg"} title={"Company"} count={"15+"} />
            </div>
        </div>
    )
}

export default Interest
