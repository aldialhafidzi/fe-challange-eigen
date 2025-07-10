import { Breadcrumb, Col, Divider, Row, Skeleton } from "antd";
import useGetNews from "../../hooks/useGetNews";
import { useParams } from "react-router";
import { useMemo } from "react";
import CardNews from "../../components/CardNews";

function RelatedArticles({ slug }: { slug?: string }) {
    const params = useMemo(() => {
        return {
            q: slug?.split(' ')?.[0],
            pageSize: '3'
        }
    }, [slug]);

    const { data, isLoading } = useGetNews({ params });

    return (
        <>
            <h2 style={{ fontSize: '24px' }}>Related Article</h2>

            <Row gutter={[20, 20]}>
                {isLoading && [0, 1].map(v =>
                    <Col key={v} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <Skeleton.Image active style={{ width: 350, maxWidth: '100%', height: 210 }} />
                        <Skeleton active paragraph={{ rows: 4 }} />
                    </Col>
                )}

                {!isLoading && data?.filter((_, index) => index !== 0)?.map((article, index) => (
                    <Col key={index} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <CardNews article={article} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

function DetailArticle({ slug }: { slug?: string }) {
    const params = useMemo(() => {
        return {
            q: slug,
            pageSize: '5',
            page: '1'
        }
    }, [slug]);

    const { data, isLoading } = useGetNews({
        params
    });

    const detail = data?.filter(v => v?.urlToImage)?.[0];

    return (
        <>
            <Breadcrumb
                items={[
                    {
                        title: 'Home',
                        href: '/'
                    },
                    {
                        title: 'News',
                        href: '/news'
                    },
                    {
                        title: !isLoading ? detail?.title : 'Loading..'
                    },
                ]}
            />

            {isLoading ?
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <Skeleton paragraph={{ rows: 1 }} />
                    <Skeleton.Image active style={{ width: 850, maxWidth: '100%', height: 400 }} />
                    <Skeleton paragraph={{ rows: 4 }} />
                </div>
                :
                <>
                    <h1>{detail?.title}</h1>
                    <p style={{ fontSize: '18px', marginBottom: '2rem', maxWidth: '75%' }}>
                        {detail?.description}
                    </p>
                    <img style={{ width: '100%', height: 'auto', marginBottom: '2rem' }} src={detail?.urlToImage} alt={detail?.title} />
                    <article style={{ fontSize: '20px', marginBottom: '6rem' }} dangerouslySetInnerHTML={{ __html: detail?.content }} />
                </>
            }
        </>
    )
}

function NewsDetailPage() {
    const { slug } = useParams();

    return (
        <Row>
            <Col span={24}>
                <DetailArticle slug={slug} />

                <Divider />

                <RelatedArticles slug={slug} />
            </Col>
        </Row>
    )
}

export default NewsDetailPage