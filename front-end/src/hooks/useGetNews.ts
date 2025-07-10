import { useEffect, useState } from "react";
import { getNews, type Article, type ParamsNews } from "../services/news.api";

export default function useGetNews({
    params = {
        q: 'Apple',
        pageSize: '9'
    }
}: {
    params?: ParamsNews
}) {
    const [totalResults, setTotalResults] = useState(0);
    const [data, setData] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const { articles, totalResults } = await getNews(params);
            setData(articles);
            setTotalResults(totalResults);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    return { data, totalResults, isLoading }
}