import SearchField from './SearchField'

const AppMainContent = ({ setCompanyData }) => {
    return(
        <div className="flex mt-16 py-10 px-8 mb-8">
            <div className='w-1/2'>
                <h1 className="text-4xl font-medium tracking-wide insurgate-primary-color">
                    Test technique front - Insurgate
                </h1>
                <p className="mt-8 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius id saepe suscipit vero exercitationem laboriosam, inventore debitis quam earum autem repudiandae reiciendis quia nobis placeat? Rem voluptas, iure harum doloremque laborum enim reprehenderit saepe cumque sed nesciunt ex optio nostrum, omnis quo officiis aliquid neque expedita? Molestiae corrupti nostrum fugit modi quo numquam maiores esse eius natus ipsam ipsum iusto beatae eveniet laborum, sequi ipsa animi iste dolorem cupiditate eos! Molestiae, vel magni? Fugit quaerat nisi architecto omnis culpa?
                </p>
                <SearchField setCompanyData={ setCompanyData } />
            </div>
            <div className='w-1/2 illustration' />
        </div>
    )
}

export default AppMainContent
