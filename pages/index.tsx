import Layout from '../components/Layout'
import Card from '../components/Card/Card'
import data from '../data/data'

export default function Home() {
    return (
        <Layout>
            <h1 className="display-1">Products</h1>
            <div className="d-flex flex-wrap">
                {data && data?.products?.map((product, productIndex) => (
                    <Card
                    key={productIndex}
                    className="m-4"
                    title={product.name}
                    body={
                        <div className="">
                            <div className="">
                                <img loading='lazy' src={product.image} alt="product" width="300" height="400" />
                            </div>
                            <div className="">${product.price}</div>
                            <div className="d-flex justify-content-between">
                                <div className="btn btn-primary">Buy Now</div>
                                <div className="btn btn-info ml-2">Add to Cart</div>
                            </div>
                        </div>
                    }
                />
                ))}
            </div>
        </Layout>
    )
}
