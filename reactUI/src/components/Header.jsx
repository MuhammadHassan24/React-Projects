import Button from './Button'

function Header() {
    return (
        <div className='  w-full bg-transparent flex justify-between items-center px-10 pt-3'>
            <div><img src="src/assets/RPlogo.png" alt="" /></div>
            <nav className='flex gap-12 text-base font-semibold text-black'>
                <a href="#">Services</a><a href="#">Portfolio</a><a href="#">About Us</a><a href="#">Testimonials</a>
            </nav>
            <Button text="Contact Us" className='bg-[#5380EA]' />
        </div>
    )
}

export default Header
