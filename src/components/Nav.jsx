import logo from '../assets/img/logo.png'

const Nav = () => {
    return(
        <nav className='flex justify-around py-6 shadow-md shadow-gray-100 bg-white'>
            <a
                href="https://www.insurgate.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={ logo }
                    alt="logo.png"
                    className='lg:w-36 md:w-24 w-20'
                />
            </a>
            <ul className='flex items-center lg:text-base md:text-sm text-xs'>
                <li>
                    <a
                        href="https://www.linkedin.com/in/thomas-deman-168562193/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-blue-700'
                    >
                        Linkedin
                    </a>
                </li>
                <li className='px-2 lg:px-20 md:px-12'>
                    <a
                        href="https://github.com/tom-deman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-blue-700'
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href="https://tom-deman.github.io/portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-blue-700'
                    >
                        Portfolio
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
