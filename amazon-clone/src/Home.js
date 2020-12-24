import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/5_DesktopHero_Unrec_150x600-._CB419216629_.jpg"
            alt="">
            </img>

            {/* product id, title, price, ratings, images */}
            <div className="home__row">
            <Product 
                id="121"
                title="The SmartPhones & Tablets"
                price={15000}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg">
            </Product>

            <Product 
                id="122"
                title="The Laptops"
                price={45000}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Jupiter/GW/Phase-1/V245274172_IN_CEPC_Electronics_GW_Graphics_Jupiter20_758X608_dbcc2X._SY608_CB418806080_.jpg">
            </Product>

            <Product 
                id="123"
                title="The SmartWatches"
                price={4000}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Coupons/Jupiter20/Storefront/2V_Mi-Smart-Band-5.jpg">
            </Product>
            </div>

            <div className="home__row">
            <Product 
                id="124"
                title="Washing Machine"
                price={25000}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US160_FMwebp_QL70_.jpg 1x, https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US240_FMwebp_QL65_.jpg 1.5x, https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US320_FMwebp_QL65_.jpg 2x, https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US400_FMwebp_QL65_.jpg 2.5x, https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US480_FMwebp_QL65_.jpg">
            </Product>

            <Product 
                id="125"
                title="The Headphones"
                price={3000}
                rating={5}
                image="https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY218_.jpg 1x, https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY327_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY436_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY545_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY654_FMwebp_QL65_.jpg">
            </Product>

            <Product 
                id="126"
                title="The God Of War Game (PS4)"
                price={1500}
                rating={5}
                image="https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY218_.jpg 1x, https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY327_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY436_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY545_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY654_FMwebp_QL65_.jpg">
            </Product>

            <Product 
                id="127"
                title="The Electronic Appliances"
                price={50000}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Jupiter/GW/Phase-1/V245274172_IN_CEPC_Electronics_GW_Graphics_Jupiter20_758X608_dbcc2X._SY608_CB418806080_.jpg">
            </Product>

            </div>

            
            {/* product  */}
            
        </div>
    )
}

export default Home
