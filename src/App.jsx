import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      {/* primium and cards section */}
      <section className='mt-20'>
        <div className='container mx-auto text-center space-y-6'>
          <h2 className='text-5xl font-bold text-[#101727]'>Premium Digital Tools</h2>
          <p className='text-xl text-[#627362]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
          <div className="btns bg-gray-50 p-1 rounded-full flex w-max mx-auto">
            <button onClick={()=> setToggle(true)} className={`px-6 py-2 rounded-full ${toggle ? 'bg-linear-to-r from-[#642ef7] to-[#9216fa] text-white font-semibold shadow-md' : ''}   text-xl text-gray-700`}>Products</button>
            <button onClick={()=> setToggle(false)} className={`px-6 py-2 rounded-full ${toggle === false ? 'bg-linear-to-r from-[#642ef7] to-[#9216fa] text-white font-semibold shadow-md' : ''}   text-xl text-gray-700`}>Cart<span>(2)</span></button>
          </div>
        </div>
        
        {/* Cards section */}
        {
          toggle ? <Products></Products> : <Cart></Cart>
        }
      </section>
      <Product></Product>
    </>
  )
}

export default App
