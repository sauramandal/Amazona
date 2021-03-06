import Layout from '../components/Layout'
import Card from '../components/Card/Card'
import Product from '../models/Product'
import db from '../utils/db'
import Link from 'next/link'

type Props = {
    products: Array<{
        name: string
        slug: string
        category: string
        image: string
        isFeatured: boolean
        featuredImage: string
        price: number
        brand: string
        rating: number
        numReviews: number
        countInStock: number
        description: string
    }>
}

export default function Home({ products }: Props) {
    return (
        <Layout title={'Amazona'}>
            <div
                className="d-flex flex-wrap justify-content-center"
                style={{ marginTop: '60px' }}
            >
                {products &&
                    products?.map((product, productIndex) => (
                        <Card
                            key={productIndex}
                            className="m-4"
                            title={product.name}
                            body={
                                <Link
                                    href={`/product/${encodeURIComponent(
                                        product.slug
                                    )}`}
                                >
                                    <div className="">
                                        <div
                                            className=""
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <img
                                                loading="lazy"
                                                src={product.image}
                                                alt="product"
                                                width="400"
                                                height="500"
                                            />
                                        </div>
                                        <div className="">${product.price}</div>
                                        <div className="d-flex justify-content-between">
                                            <div className="btn btn-primary" onClick={(evt) => {evt.stopPropagation()}}>
                                                Buy Now
                                            </div>
                                            <div className="btn btn-info ml-2" onClick={(evt) => {evt.stopPropagation()}}>
                                                Add to Cart
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                        />
                    ))}
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    await db.connect()
    const products = await Product.find({}).lean()
    await db.disconnect()
    return {
        props: {
            products: products.map(db.convertDocToObj),
        },
    }
}
