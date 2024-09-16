
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <div className='flex justify-between container'>
            <h1 className='text-2xl font-semibold flex items-center'>ARKO CHEFS</h1>
            <div className='sm:flex gap-4 items-center hidden'>
                <a href="">Home</a>
                <a href="">Rcipe</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='sm:flex hidden h-full rounded-full bg-[#150B2B0D]'>
                    <span className='mr-2 w-8 flex items-center justify-center'><IoSearch /> </span>
                    <input  type="text" placeholder='search' className='border-none rounded-full bg-[#150b2b02]'/>
                </div>
                <div className='w-10 h-10 rounded-full bg-[#0BE58A] flex justify-center items-center'>
                    <img src="../../../src/assets/Frame.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;