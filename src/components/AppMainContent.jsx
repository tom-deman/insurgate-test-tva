import SearchField from './SearchField'

const AppMainContent = ( { setCompanyData } ) => {
    return(
        <div className="flex lg:mt-16 mt-2 py-10 lg:px-8 px-2 lg:mb-8">
            <div className='lg:w-1/2 md:w-full w-full'>
                <h1 className="lg:text-4xl md:text-2xl text-xl font-medium tracking-wide insurgate-primary-color">
                    Test technique front - Insurgate
                </h1>
                <p className="mt-8 text-justify lg:text-base md:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius id saepe suscipit vero exercitationem laboriosam, inventore debitis quam earum autem repudiandae reiciendis quia nobis placeat? Rem voluptas, iure harum doloremque laborum enim reprehenderit saepe cumque sed nesciunt ex optio nostrum, omnis quo officiis aliquid neque expedita? Molestiae corrupti nostrum fugit modi quo numquam maiores esse eius natus ipsam ipsum iusto beatae eveniet laborum, sequi ipsa animi iste dolorem cupiditate eos! Molestiae, vel magni? Fugit quaerat nisi architecto omnis culpa?
                </p>
                <SearchField setCompanyData={ setCompanyData } />
            </div>
            <div className='lg:w-1/2 w-full md:w-full md:hidden hidden lg:block illustration' />
        </div>
    )
}

export default AppMainContent
