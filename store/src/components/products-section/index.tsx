import ProductCard from "../product-card"

export default function ProductsSection() {
  const products = [
    {
      _id: '1',
      name: 'Product 1',
      images: ['https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80'],
      price: 1000,
    }
  ]

  return (
    <section className="py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {
          products.map(product => (
            <ProductCard product={product} key={product._id} />
          ))
        }
      </div>
    </section>
  )
}
