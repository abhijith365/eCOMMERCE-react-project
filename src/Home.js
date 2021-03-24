import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">

            <div className="home__container">
                <img className="home__image" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="img" />


                <div className="home__row">
                    <Product
                        id="1111"
                        title="The Lean Startup. How Constant Innovation
                                Creates Radecally Successful Busnesses
                                Paperback"
                        price="19.99"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="2222"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish
                        Kitchen Mixer with K-beater, Bough Hook and
                         Whisk, 5 Liter Glass Bowl"
                        price={239}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3333"
                        title="Samsung LC49RG90SSuXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="4444"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alaxa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="5555"
                        title="New Apple iPod Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="6666"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="7777"
                        title="Nike Air Max 95 "
                        price={178.98}
                        rating={4}
                        image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_402,c_limit/e7f476f0-5a2d-4448-99af-3626342d5ed0/air-max-95-shoe-jbmQ47.jpg"
                    />
                    <Product
                        id="8888"
                        title="Nike Air Max Verona SE"
                        price={260}
                        rating={5}
                        image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/265425e1-0c22-453a-9c90-c455b8f4945a/air-max-verona-se-shoe-47KtK8.jpg"
                    />
                    <Product
                        id="9999"
                        title="Nike Air Max 97 SE"
                        price={380.99}
                        rating={5}
                        image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/99299e60-a797-41bd-91e5-e64167da73fd/air-max-97-se-shoe-PcDvfm.jpg"
                    />
                    <Product
                        id="1011"
                        title="Nike Air Max 95 EOI"
                        price={199.99}
                        rating={3}
                        image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e93e0186-a9e5-449e-8401-b1e4946bf45d/air-max-95-eoi-shoe-4cF4h4.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6666"
                        title="New Apple iPhone 12 pro (64GB) - Black"
                        price={1294.98}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
                    />
                    <div className="home__row">
                        <Product
                            id="6666"
                            title="Samsung Galaxy S21 Ultra 5G (Phantom Black, 16GB, 512GB Storage) | Get Galaxy Active Watch 2 at Rs 990"
                            price={899.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/917nPCOw9-L._SL1500_.jpg"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
