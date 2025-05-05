import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useEffect, useState } from "react"


export const useCurrentDate = () => {
    const [dateTime, setDateTime] = useState(new Date() )

    useEffect ( () => {
        const timer = setInterval( () => {
            setDateTime( new Date() )
        }, 1000)

        return () => clearInterval( timer )
    },[])

    const formattedDate = format( dateTime, 'MMMM dd', { locale: es } )
    const formattedTime = format(dateTime, 'hh:mm');
    const period = format(dateTime, 'a');
    const formattedDay = format(dateTime, 'cccc', { locale: es });

    return { formattedDate, formattedDay, formattedTime, period }
}