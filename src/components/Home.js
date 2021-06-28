import React from 'react'


function Home() {
    return (
        <div>
            <h1>Home Component</h1>
            <div className="add-to-cart">
                <img src="http://www.pngall.com/wp-content/uploads/2016/04/Cart-Free-Download-PNG.png"/>

            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-12/red/device-front.png.transform/pdpCarousel/image.jpg" />

                </div>
                <div className="text-wrapper item">
                    <span>Iphone 12 (Red)</span>
                    <span>Price: $699</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Home
