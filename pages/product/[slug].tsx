import { useRouter } from 'next/router'
import Card from '../../components/Card/Card'
import Layout from '../../components/Layout'
import data from '../../data/data'

const productDetails = [
    { id: 0, name: 'Category: ', key: 'category' },
    { id: 1, name: 'Brand: ', key: 'brand' },
    { id: 2, name: 'Rating: ', key: 'rating' },
    { id: 3, name: 'Description: ', key: 'description' },
    { id: 4, name: 'Price: $', key: 'price' },
]

const ProductScreen = () => {
    const router = useRouter()
    const { slug } = router.query
    const product = data.products.find((item) => item.slug === slug)
    if (!product) {
        return <div className="">Product Not Found</div>
    }
    return (
        <Layout title={product.name} description={product.description}>
            <div className="">
                <Card
                    className="m-4"
                    title={product.name}
                    body={
                        <div className="d-flex">
                            <div className="">
                                <img
                                    loading="lazy"
                                    src={product.image}
                                    alt="product"
                                    width="600"
                                    height="800"
                                />
                            </div>
                            <div className="mx-2">
                                {productDetails.map((item) => (
                                    <div key={item.id} className="">
                                        <h3>
                                            {item.name} {product[item.key]}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                />
            </div>
        </Layout>
    )
}

export default ProductScreen
