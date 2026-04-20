import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import AvailableProducts from './components/AvailableProducts/AvailableProducts'
import CartItem from './components/CartItem/CartItem'
import Carts from './components/Carts/Carts'
import Started from './components/Started/Started'
import PricingCards from './components/PricingCards/PricingCards'

const fetchProducts = async () => {
  const res = await fetch('/products.json');
  return res.json()
}
const productsPromise = fetchProducts();

function App() {
  const [toggle, setToggle] = useState(true);
  const [purchase, setPurchased] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemoveItem = (item) => {
        const filterItem = purchase.filter(filterItem => filterItem.id !== item.id);
        setPurchased(filterItem);
        setTotalPrice(totalPrice - item.price);
    }

  const handlePurchase = () => {
    setPurchased([]);
    setTotalPrice(0);
  }

  return (
    <>
      <Navbar purchase={purchase}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      {/* primium and cards section */}
      <section className='my-20'>
        <div className='container mx-auto text-center space-y-6'>
          <h2 className='text-5xl font-bold text-[#101727]'>Premium Digital Tools</h2>
          <p className='text-xl text-[#627362]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
          <div className="btns bg-gray-50 p-1 rounded-full flex w-max mx-auto">
            <button onClick={() => setToggle(true)} className={`px-6 py-2 rounded-full ${toggle ? 'bg-linear-to-r from-[#642ef7] to-[#9216fa] text-white font-semibold shadow-md' : ''}   text-xl text-gray-700`}>Products</button>
            <button onClick={() => setToggle(false)} className={`px-6 py-2 rounded-full ${toggle === false ? 'bg-linear-to-r from-[#642ef7] to-[#9216fa] text-white font-semibold shadow-md' : ''}   text-xl text-gray-700`}>Cart<span> ({purchase.length})</span></button>
          </div>
        </div>

        {/* Cards section */}
        {
          toggle ? <Suspense fallback={<div className='w-full py-10 flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>}>
            <AvailableProducts productsPromise={productsPromise} purchase={purchase} setPurchased={setPurchased} totalPrice={totalPrice} setTotalPrice={setTotalPrice}></AvailableProducts>
          </Suspense> : <Carts purchase={purchase} totalPrice={totalPrice} setTotalPrice={setTotalPrice} handleRemoveItem={handleRemoveItem} handlePurchase={handlePurchase}></Carts>
        }
      </section>

      <Started></Started>
      <PricingCards></PricingCards>
    </>
  )
}

export default App
