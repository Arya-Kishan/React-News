import React, { createContext, useState } from 'react'
import { app } from './Firebase/Config'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { useQuery } from '@tanstack/react-query';

const firestore = getFirestore(app);

const set_doc = async (id, obj) => {
    let result = await setDoc(doc(firestore, `message/${id}`), obj)
}

const get_doc = async (id) => {

    let result = await getDoc(doc(firestore, `message/${id}`))
    return (result.data())
}

export const newsContext = createContext();


export default function Context({ children }) {

    const [news, setNews] = useState(null)
    const [data,setData] = useState("context call")

    return (
        <div>
            <newsContext.Provider value={{ news, setNews, set_doc, get_doc, data }}>
                {children}
            </newsContext.Provider>

        </div>
    )
}
