import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async ({ queryKey }) => {
    const { data } = await axios.get(`https://arya-kishan.github.io/JSON/${queryKey[1]}.json`)
    return (data)
}

export const fetchApiData = (endpoint) => {
    return useQuery({
        queryKey: ['data', endpoint],
        queryFn: fetchData,
    })
}