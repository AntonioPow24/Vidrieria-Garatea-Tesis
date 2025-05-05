import { useEffect, useState } from "react";

const apiKey = `c430bc72d3ea4dcb0054d673fb5d65ee`

export const useWeather  = ( city, interval= 60000 ) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        let isMounted = true
        
        //fetch a la api de Clima
        const fetchWeather = async () => {
            try {
                
                const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}` )
                
                if( !response.ok){
                    throw new Error( 'No se pudo obtener la data del clima')
                }

                const data = await response.json()

                if (isMounted) {  //Formatear algunos datos del Api de Clima
                    setWeatherData({
                        ...data,
                        main: {
                            ...data.main,
                            temp: Math.round(data.main?.temp),
                            temp_max: Math.round(data.main?.temp_max),
                            temp_min: Math.round(data.main?.temp_min),
                            feels_like: Math.round(data.main?.feels_like),
                        }
                    });
                    setLoading(false);
                }



            } catch (error) {
                setError( error )
            } finally{
                setLoading( false )
            }
        }

        fetchWeather()

        // Llamadas periodicas
        const intervalId = setInterval( fetchWeather, interval)

        return () => {
            isMounted= false
            clearInterval( intervalId ) // limpiar el intervalo al desmontar el componente
        }

    },[ city ] )

    return { weatherData, loading , error }

}