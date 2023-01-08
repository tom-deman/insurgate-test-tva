import './assets/css/tailwind.css'
import './assets/css/main.css'

import Nav from './components/Nav'
import AppMainContent from './components/AppMainContent'
import Result from './components/Result'
import Footer from './components/Footer'

const App = () => {
    return(
        <div className='h-screen w-screen'>
            <header>
                <Nav />
            </header>
            <main className='container mx-auto'>
                <AppMainContent />
                <Result />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
