import { useState } from 'react'

import './assets/css/tailwind.css'
import './assets/css/main.css'

import Nav from './components/Nav'
import AppMainContent from './components/AppMainContent'
import Result from './components/Result'
import Footer from './components/Footer'


const App = () => {
    const [ companyData, setCompanyData ] = useState( '' )

    return(
        <div className='h-screen w-screen overflow-x-hidden'>
            <header>
                <Nav />
            </header>
            <main className='container mx-auto'>
                <AppMainContent
                    setCompanyData={ setCompanyData }
                />
                <Result
                    companyData={ companyData }
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
