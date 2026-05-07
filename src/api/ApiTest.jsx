import axios from "axios";
import { useEffect, useState } from "react";

function ApiTest() {
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "Gulizar",
            body: "Frontend Developer",
            userId: 1
        })
            .then((res) => {
                console.log("İstek Başarılı:", res.data);
                setApiData(res.data);
            })
            .catch((err) => {
                console.log("ERROR:", err.message);
                setError(err.message);
            });
    }, []);

    return (
        < >
        </>
    );
}

export default ApiTest;