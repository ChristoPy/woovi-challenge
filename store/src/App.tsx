import { StoreProvider } from "./providers/store"
import Header from "./components/header"
import Hero from "./components/hero"
import ProductsSection from "./components/products-section"

function App() {
  return (
    <>
      <StoreProvider>
        <Header />
        <Hero />
        <ProductsSection />
      </StoreProvider>
    </>
  )
}

export default App
