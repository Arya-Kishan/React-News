import React, { createContext, useState } from 'react'

export const newsContext = createContext();


export default function Context({ children }) {

    const [news,setNews] = useState(null)

    return (
        <div>
            <newsContext.Provider value={{news,setNews}}>
                {children}
            </newsContext.Provider>

        </div>
    )
}
