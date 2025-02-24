import { useEffect, useState } from 'react'
import './App.css'
import Product from './components/product';

const PAGE_SIZE = 10;
function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=500");
    const data = await res.json();
    setProducts(data.products);
  }

  const totalProducts = products.length;
  const totalNumberOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE
  const end = start + PAGE_SIZE

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1));
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1));
  }

  useEffect(() => {
    fetchData()
  }, [])

  return !products.length?<p>No data found</p> : (
    <div className="App">
      <h1>Pagination</h1>
      <div className='pagination'>
      <button className='page-number' disabled={currentPage===0} onClick={()=>goToPreviousPage()}>◀️</button>
      {
        Array.from({ length: totalNumberOfPages }).map((_, index) => (
          <button className={"page-number "+ (index===currentPage ? "active":"")} key={index} onClick={() => setCurrentPage(index)}>{index}</button>
        ))
      }
      <button className='page-number' disabled={currentPage===totalNumberOfPages-1} onClick={()=>goToNextPage()}>▶️</button>
      </div>

      <div className="container">
      {products && products.slice(start,end).map((product) => 
          <Product
            key={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
          />
      )}
      </div>
    </div>
  )
}

export default App
