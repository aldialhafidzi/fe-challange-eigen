import { Button, Divider, Layout } from "antd"
import { Outlet } from "react-router"
const { Content } = Layout;

function DefaultLayout() {
    return (
        <Layout>
            <Content style={{ maxWidth: 1024, margin: '0 auto', padding: '24px', width: '100%' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>#Eigen Frontend Challange - Aldi Alhafidzi</p>

                    <div>
                        <Button href="/" size="large" variant="link" color="primary">Home</Button>
                        <Button href="/news" size="large" variant="link" color="primary">News Page</Button>
                    </div>
                </header>

                <Divider />

                <main style={{ minHeight: '75dvh' }}>
                    <Outlet />
                </main>

                <Divider />

                <footer style={{ padding: '20px', textAlign: 'center' }}>
                    <p>Copyright {new Date().getFullYear()} - Eigen Frontend Challange - Aldi Alhafidzi</p>
                </footer>
            </Content>
        </Layout>
    )
}

export default DefaultLayout