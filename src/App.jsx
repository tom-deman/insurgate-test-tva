import './assets/css/tailwind.css'
import './assets/css/main.css'

import Nav from './components/Nav'
import AppDescription from './components/AppDescription'
import SearchField from './components/SearchField'
import Result from './components/Result'
import Footer from './components/Footer'

const App = () => {
    return(
        <div className='h-screen w-screen'>
            <header>
                <Nav />
            </header>
            <main>
                <AppDescription />
                <SearchField />
                <Result />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
