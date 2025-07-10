import { Col, Row, Skeleton } from "antd";
import useGetTopHeadlines from "../../hooks/useGetTopHeadlines"
import CardNews from "../../components/CardNews";
import { NavLink } from "react-router";

function HomePage() {
    const { data, isLoading } = useGetTopHeadlines();

    return (
        <Row>
            <Col span={24}>
                <h1>Top News Headline</h1>

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

                <div style={{ display: 'flex', justifyContent: 'center', padding: '24px' }}>
                    <NavLink to="/news" style={{ fontSize: '20px' }}>More News</NavLink>
                </div>
            </Col>
        </Row>
    )
}

export default HomePage