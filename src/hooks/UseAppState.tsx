import { useEffect, useState } from "react"
import { AggragatedData, RawData } from "../types";
import { aggregateData } from "../utils/utilities";

const UseAppState = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<AggragatedData>(null);
    const [rawdata, setRawData] = useState<RawData[]>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await fetch("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub", {
                    method: "POST",
                    body: JSON.stringify({ angular_test: "angular-developer" }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                const result: any[] = await res.json();
                setData(aggregateData(result));
                setRawData(result)

            } catch ({ message: error }) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [])

    return { isLoading, error, data, rawdata }
}

export default UseAppState
