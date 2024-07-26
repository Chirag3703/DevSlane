import React from 'react'
import Product from './Product.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PageNo from './PageNo.jsx'

function App() {
  return (
    <>
      <Header></Header>
      <div class="mx-28 my-10 bg-white py-10 px-12">
        <div class="flex flex-col self-end mb-5 font-semibold">
          <select class="self-end border-gray-400 text-gray-400 border-solid border 
            p-1 bg-gray-50">
            <option>Default sorting</option>
            <option>Price:Lowest to Highest</option>
            <option>Price:Highest to Lowest</option>
            <option>Date:Latest to Oldest</option>
          </select>
        </div>
        <div class="flex flex-wrap justify-between gap-4">
          <Product image="https://estore.kalasource.in/wp-content/uploads/2018/06/mug-white.jpg"
            title="Mugs" description="Black Printed Coffee Mug" price="$15.00"></Product>
          <Product image="https://tbhai.com/cdn/shop/files/HappyFathersDayMug.jpg?v=1716386074&width=1426"
            title="Mugs" description="Father's Day Coffee Mug" price="$19.00"></Product>
          <Product image="https://mstshirtcreations.com/wp-content/uploads/2018/06/tshirt5.jpg"
            title="Tshirts" description="Green Printed Tshirt" price="$34.00"></Product>
          <Product image="https://homafy.com/wp-content/uploads/2023/03/customized-mugs-for-girl-Copy.jpg"
            title="Mugs" description="Personalized Mug" price="$15.00"></Product>
          <Product image="https://static.bershka.net/assets/public/7d6d/d8eb/3fd54f61998e/152b3d30d030/0287829670013-a4o/0287829670013-a4o.jpg?ts=1719914714366&w=800"
            title="Tshirts" description="Printed Brown Tshirt" actual="$34.00" 
            price="$25.00"></Product>
          <Product image="https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C2140%2C2000%7C71CvoYcOXJL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
            title="Tshirts" description="Printed Dark Blue Tshirt" price="$34.00"></Product>
          <Product image="https://mstshirtcreations.com/wp-content/uploads/2018/06/tshirt5.jpg"
            title="Tshirts" description="Printed Green Tshirt" actual="$35.00" 
            price="$28.00"></Product>
          <Product image="https://www.styched.in/cdn/shop/products/small-monday-black-mj.jpg?v=1578590668&width=1426"
            title="Tshirts" description="Printed Tshirt Coffee Black Color" actual="$35.00" 
            price="$25.00"></Product>
          <Product image="https://www.cubimall.com/wp-content/uploads/2018/06/tshirt7.jpg"
            title="Tshirts" description="Typography Teal Printed Tshirt" actual="$34.00" 
            price="$32.00"></Product>
            <div class="flex justify-start gap-1">
            <PageNo number="1"></PageNo>
            <PageNo number="2"></PageNo>
            <PageNo number="→"></PageNo>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
