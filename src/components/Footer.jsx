const Footer = () => {
    const currentYear = () => {
        return new Date().getFullYear()
    }

    return(
        <footer className="py-10 bg-neutral-50 border border-gray-100 border-t-1 w-full">
            <p className="text-center text-sm font-light">
                © { currentYear() } - Thomas Deman - All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer
