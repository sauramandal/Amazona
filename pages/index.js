import Layout from '../components/Layout'

export default function Home() {
    return (
        <Layout>
            <div className="">
                <h1 className='display-1'>Products</h1>
                <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                </ul>
            </div>
        </Layout>
    )
}