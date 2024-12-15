import { useEffect, useState } from "react"
import { FetchApi } from "../../api"

const FetchData = (url,end) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true)
        setData(null)

        FetchApi(url,end)
            .then((res) => {
                setLoading(false)
                setData(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[url])

    return {data, loading}
}

export default FetchData
