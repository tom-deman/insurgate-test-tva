import { useState } from "react"

const Footer = () => {
    const currentYear = useState( new Date().getFullYear() )

    return(
        <footer className="fixed bottom-0 py-10 bg-neutral-50 border border-gray-100 border-t-1 w-full">
            <p className="text-center text-sm font-light">
                © { currentYear } - Thomas Deman - All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer
