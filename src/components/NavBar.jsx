import { NavLink } from 'react-router-dom';

const activeStyle = "underline underline-offset-4";

export const NavBar = () => {

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                <li>
                    <NavLink to='/all' className={({isActive}) => isActive ? activeStyle : undefined}>All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({isActive}) => isActive ? activeStyle : undefined}>Clothes</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={({isActive}) => isActive ? activeStyle : undefined}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures' className={({isActive}) => isActive ? activeStyle : undefined}>Fornitures</NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={({isActive}) => isActive ? activeStyle : undefined}>Toys</NavLink>
                </li>
                <li>
                    <NavLink to='/others' className={({isActive}) => isActive ? activeStyle : undefined}>Others</NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    silvi@platzi.com
                </li>
                <li>
                    <NavLink to='/orders' className={({isActive}) => isActive ? activeStyle : undefined}>Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/account' className={({isActive}) => isActive ? activeStyle : undefined}>Account</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({isActive}) => isActive ? activeStyle : undefined}>Sign in</NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures' className={({isActive}) => isActive ? activeStyle : undefined}>🛒 0</NavLink>
                </li>
            </ul>
        </nav>
    )
};