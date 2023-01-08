import { useState } from 'react'

import search from '../assets/img/690150.png'

const SearchField = ( { setCompanyData } ) => {
    const [ inputValue, setInputValue ] = useState( '' )
    const [ error, setError ] = useState( '' )

    const beVatRegex = new RegExp( '^(BE)?0[0-9]{9}$' )

    const changeInputValue = ( event ) => {
        setInputValue( event.target.value.trim() )
    }

    const searchVat = async() => {
        if( !beVatRegex.test( inputValue ) ) {
            setError( 'Error: please enter Belgian VAT format, example: BE0674965689' )
        }
        else {
            setError( '' )
            const credentials = btoa("insurgate:insurgate")
            const headers = {
                "Authorization" : `Basic ${credentials}`
            }
            await fetch( `https://04ibs0zhna.execute-api.eu-central-1.amazonaws.com/staging/company?number=${ inputValue }`, {
                headers: headers
            } )
                .then( res => {
                    if( res.status === 200 ) {
                        return res.json()
                    }
                    else if( res.status === 400 || res.status === 500 ) {
                        setError( 'Server error, please try again.' )
                    }
                } )
                .then( data => {
                    setCompanyData( data.company )
                    setInputValue( '' )
                } )
                .catch( err => console.error( err ) )
        }
    }

    return(
        <>
            <div className="flex mt-8">
                <input
                    value={ inputValue }
                    onChange={ changeInputValue }
                    type="text"
                    id="tva-search"
                    placeholder="Enter your VAT number here"
                    className="bg-blue-100 lg:w-11/12 w-5/6 py-2 px-6 outline-none shadow-lg border border-blue-200 shadow-blue-50"
                />
                <button
                    className="lg:w-1/12 w-1/6 border-blue-200 border border-l-0 hover:bg-blue-50 flex justify-center items-center"
                    onClick={ () => searchVat() }
                >
                    <img
                        src={ search }
                        alt="magnifier icon"
                        width="26"
                    />
                </button>
            </div>
            <p
                id='error'
                className='text-red-500 text-sm font-light mt-2 h-4'
            >
                { error }
            </p>
        </>
    )
}

export default SearchField
