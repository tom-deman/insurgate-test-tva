const Result = ( { companyData } ) => {
    return(
        <div className="px-8">
            { companyData !== '' &&
                <div className="py-16 mb-4 border border-r-0 border-l-0 border-b-0">
                    <ul>
                        <li className="text-xl">
                            Result for:
                            <strong>
                                &nbsp;{ companyData?.identifier }
                            </strong>
                        </li>
                        <li className="mt-5 py-1">
                            Company name:
                            <h2 className="text-xl insurgate-primary-color inline">
                                &nbsp;{ companyData.company_name && companyData.company_name }
                            </h2>
                        </li>
                        { companyData.juridical_form &&
                            <li className="py-1">
                                { `Juridical form: ${ companyData?.juridical_form?.fr?.short }, ${ companyData?.juridical_form?.fr?.label }` }
                            </li>
                        }
                        <li>
                            { companyData.addresses && companyData.addresses.map( el => {
                                return(
                                    <>
                                        <p className="py-1">
                                            Country: { el?.country_code }
                                        </p>
                                        <p className="py-1">
                                            Adresse:
                                                { `${ el.street !== null ? el.street : '' }
                                                ${ el.house_number !== null ? el.house_number + ', ' : '' }
                                                ${ el.zip_code !== null ? el.zip_code : '' }
                                                ${ el.municipality !== null ? el.municipality : '' }
                                                ${ el.country_code }` }
                                        </p>
                                    </>
                                )
                            } ) }
                        </li>
                        { companyData.active &&
                            <li className="py-1">
                                Statut:&nbsp;
                                    { companyData.active === true
                                        ? 'Active'
                                        : 'Inactive'
                                    }
                            </li>
                        }
                        { companyData.activities.length !== 0 &&
                            <li className="mt-2 py-1">
                                <span className="font-semibold">
                                    Sector of activity:
                                </span>
                                <ul className="list-decimal pl-8 mt-2">
                                    { companyData?.activities?.map( el => {
                                        return(
                                            <>
                                                <li className="pl-2">
                                                    { el.label?.fr?.label }
                                                </li>
                                            </>
                                        )
                                    } ) }
                                </ul>
                            </li>
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Result
