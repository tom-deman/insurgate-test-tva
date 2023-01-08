import search from '../assets/img/690150.png'

const SearchField = () => {

    const searchVat = () => {
        alert( 'search now' )
    }

    return(
        <div className="flex mt-8">
            <input
                type="text"
                id="tva-search"
                className="bg-blue-100 w-11/12 py-2 px-6 outline-none shadow-lg border border-blue-200 shadow-blue-50"
            />
            <button className="w-1/12 border-blue-200 border border-l-0 hover:bg-blue-50 flex justify-center items-center">
                <img
                    src={ search }
                    alt="magnifier icon"
                    width="26"
                    onClick={ () => searchVat() }
                />
            </button>
        </div>
    )
}

export default SearchField
