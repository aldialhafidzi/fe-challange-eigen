import { NavLink } from "react-router"
import type { Article } from "../services/news.api"
import { Button, Card } from "antd"

function CardNews({ article }: { article?: Article }) {
    return (
        <NavLink to={`/news/${article?.title}`}>
            <Card
                cover={<img style={{ objectFit: 'cover', aspectRatio: '16 / 9' }} alt={article?.title} src={article?.urlToImage} />}
                variant="borderless"
                hoverable
            >

                <h5 style={{
                    fontSize: '18px', display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    margin: 0,
                    minHeight: '56px'
                }}>
                    {article?.title}
                </h5>

                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '4px', marginBottom: '1rem', marginTop: '1rem' }}>
                    {article?.source?.name &&
                        <p style={{ margin: 0, background: '#000000', display: 'inline-block', color: '#FFFFFF', padding: '0.3rem 0.6rem', fontSize: 11, borderRadius: '16px' }}>{article?.source?.name}</p>
                    }

                    {article?.author &&
                        <p style={{ margin: 0, background: '#000000', display: 'inline-block', color: '#FFFFFF', padding: '0.3rem 0.6rem', fontSize: 11, borderRadius: '16px' }}>{article?.author}</p>
                    }
                </div>

                <p style={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    minHeight: '101px',
                    fontSize: 16
                }}>
                    {article?.description}
                </p>

                <Button type="dashed" size="large" style={{ width: '100%' }} variant="solid">Read More..</Button>
            </Card>
        </NavLink>
    )
}

export default CardNews