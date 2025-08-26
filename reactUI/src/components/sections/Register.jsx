import Button from "../Button"
function Register() {
    return (
        <div className="bg-[#EBF0FF] pt-20 px-32 flex flex-col justify-center">
            <div className="flex justify-between">
                <div className=" flex justify-center items-center">
                    <img src="src/assets/formimage.png" alt="" /></div>
                <div className="px-8 py-10 bg-white rounded-xl max-w-lg space-y-5">
                    <h1 className="text-[#5380EA] font-bold text-4xl">Register interest</h1>
                    <p className="text-base leading-5">Use the form below to contact us. Please be as detailed and precise as possible. Include your industry and any specific requests. To help us get to know and serve you better, we thank you for first giving us a good description of who you are. You can also send an email, call us or send us a WhatsApp to make an appointment.</p>
                    <form action="">
                        <div className="space-y-3">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Name</label>
                                <input className="h-11 border-2 border-[#DEE6FF] outline-[#DEE6FF] bg-[#F9FAFF] px-4 rounded-lg" type="text" placeholder="Enter your email" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Company</label>
                                <input className="h-11 border-2 border-[#DEE6FF] outline-[#DEE6FF] bg-[#F9FAFF] px-4 rounded-lg" type="text" placeholder="Enter your name" />
                            </div><div className="flex flex-col gap-1">
                                <label htmlFor="">Email Address</label>
                                <input className="h-11 border-2 border-[#DEE6FF] outline-[#DEE6FF] bg-[#F9FAFF] px-4 rounded-lg" type="text" placeholder="Enter your email address" />
                            </div><div className="flex flex-col gap-1">
                                <label htmlFor="">Message</label>
                                <textarea className="border-2 border-[#DEE6FF] outline-[#DEE6FF] bg-[#F9FAFF] px-4 py-3 rounded-lg" rows={4} placeholder="Your message here"></textarea>
                            </div>
                            <Button className="bg-[#5380EA] w-36 text-center shadow-md shadow-[#5380EA] mt-5" text={"Submit"} />
                        </div>
                    </form>
                </div>
            </div>
            <hr className="w-5/6 self-center mt-24 text-[#475569]" />
            <h1 className="text-[#475569] text-center py-8" >@Copyright 2023 all right reserved by Naimur Rahman Hira</h1>

        </div>
    )
}

export default Register
