import { useState } from 'react'

import './assets/css/tailwind.css'
import './assets/css/main.css'

import Nav from './components/Nav'
import AppMainContent from './components/AppMainContent'
import Result from './components/Result'
import Footer from './components/Footer'

const App = () => {
    const [ companyData, setCompanyData ] = useState( undefined )

    return(
        <div className='overflow-x-hidden'>
            <header>
                <Nav />
            </header>
            <main className='container mx-auto'>
                <AppMainContent setCompanyData={ setCompanyData } />
                <Result companyData={ companyData } />
            </main>
            <footer className={`w-full lg:block hidden ${ companyData === undefined && 'lg:absolute lg:bottom-0' }`}>
                <Footer />
            </footer>
        </div>
    )
}

export default App
