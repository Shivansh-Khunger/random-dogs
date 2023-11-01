import React, { useEffect, useState } from "react";

export default function Forecast() {
    let [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://random.dog/woof.json`)
            .then(response => {
                if (response.ok) {
                     return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    },[])

    if (loading) {
        return (
            <div>loading ...</div>
        )
    }
    if (error) {
        return (
            console.log("Kuch to gadbad Hai"),
            <div>fuck ...</div>
        )
    }
    console.log(data.file);
    return (
        <div>
            <img src={data.url} alt="" />
        </div>
    )
}