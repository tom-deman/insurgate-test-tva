import SearchField from './SearchField'

const AppMainContent = () => {
    return(
        <div className="flex mt-16 py-10 px-8">
            <div className='w-1/2'>
                <h1 className="text-4xl font-medium tracking-wide insurgate-primary-color">
                    Test technique front - Insurgate
                </h1>
                <p className="mt-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, maiores commodi inventore eius necessitatibus cupiditate ullam numquam? Perspiciatis ut possimus illo sint, consequuntur voluptatum voluptates. Et culpa labore sapiente quisquam illum illo quos. Repellendus magnam esse, nemo tempore necessitatibus perferendis, numquam reiciendis voluptatibus ut mollitia maxime repudiandae fugit repellat dolor.
                </p>
                <SearchField></SearchField>
            </div>
            <div className='w-1/2 illustration' />
        </div>
    )
}

export default AppMainContent
