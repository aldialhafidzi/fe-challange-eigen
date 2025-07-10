import { useEffect, useState } from "react";
import { getTopHeadlines, type Article } from "../services/news.api";

export default function useGetTopHeadlines() {
    const [data, setData] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const { articles } = await getTopHeadlines({ country: 'us', pageSize: '10' });
            setData(articles);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return { data, isLoading }
}