import { qs } from "../utils/helpers"

const apiKey = String(process.env.REACT_APP_NEWS_API_KEY)

export interface ParamsNews {
    country?: string
    pageSize?: string
    q?: string
    from?: string
    sortBy?: string
    page?: string
}

export interface ResponseArticles {
    status: string
    totalResults: number
    articles: Article[]
}

export interface Article {
    source: Source
    author?: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export interface Source {
    id?: string
    name: string
}


export async function getTopHeadlines(params: ParamsNews): Promise<ResponseArticles> {
    const paramsObj = {
        apiKey,
        ...params
    }

    const res = await fetch(`https://newsapi.org/v2/top-headlines?${qs(paramsObj)}`)

    if (res?.ok) return await res.json()
    throw res.json()
}


export async function getNews(params: ParamsNews): Promise<ResponseArticles> {
    const paramsObj = {
        apiKey,
        ...params
    }

    const res = await fetch(`https://newsapi.org/v2/everything?${qs(paramsObj)}`)

    if (res?.ok) return await res.json()
    throw res.json()
}