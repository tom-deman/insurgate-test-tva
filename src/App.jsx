import './assets/css/tailwind.css'
import './assets/css/main.css'

import Nav from './components/Nav'
import SearchField from './components/SearchField'
import Result from './components/Result'
import Footer from './components/Footer'

const App = () => {
    return(
        <div>
            <Nav></Nav>
            <SearchField></SearchField>
            <Result></Result>
            <Footer></Footer>
        </div>
    )
}

export default App
