import { Col, Divider, Input, Pagination, Row, Skeleton } from "antd";
import useGetNews from "../../hooks/useGetNews";
import { useNavigate, useSearchParams } from "react-router";
import { useMemo } from "react";
import type { SearchProps } from "antd/es/input";
import CardNews from "../../components/CardNews";
const { Search } = Input;

function NewsPage() {
    const navigate = useNavigate();
    const [sp] = useSearchParams();

    const page = sp.get('page') || 1;
    const q = sp.get('q') || '';

    const params = useMemo(() => {
        return {
            q: String(q || 'Apple'),
            pageSize: '9',
            page: String(page)
        }
    }, [q, page])

    const { data, totalResults, isLoading } = useGetNews({
        params
    });

    const onSearch: SearchProps['onSearch'] = (value) => {
        navigate(`/news?page=${page}&q=${value}`)
    };

    return (
        <>
            <title>News Page - Eigen Frontend Challange - Aldi Alhafidzi</title>
            <Row>
                <Col>
                    <h1>Articles Page</h1>
                    <p style={{ fontSize: '18px', marginBottom: '2rem', maxWidth: '75%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <Divider />

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Search
                            placeholder="Search topic, brands or something.."
                            onSearch={onSearch}
                            style={{ width: 350, marginBottom: '4rem' }}
                            size="large"
                        />
                    </div>

                    <Row gutter={[20, 20]}>
                        {isLoading && [0, 1, 2, 3, 4, 5, 6, 7, 8].map(v =>
                            <Col key={v} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }} xl={{ span: 8 }}>
                                <Skeleton.Image active style={{ width: 350, maxWidth: '100%', height: 210 }} />
                                <Skeleton active paragraph={{ rows: 4 }} />
                            </Col>
                        )}

                        {!isLoading && data?.map((article, index) => (
                            <Col key={index} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }} xl={{ span: 8 }}>
                                <CardNews article={article} />
                            </Col>
                        ))}
                    </Row>

                    <div style={{ padding: '3rem 0rem', display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                            defaultCurrent={Number(page)}
                            total={totalResults}
                            onChange={(newPage) => {
                                navigate(`/news?page=${newPage}&q=${q}`)
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default NewsPage