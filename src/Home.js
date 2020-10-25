import React from 'react';
import './Home.css';
import Product from './Product'

function home() {
    return (
        <div className="home">
           <div className="home__container">
               <img
                 className="home__image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 alt="Amazon banner"
               />
               <div className="home__row">
                   <Product
                     id="24280358"
                     title='The lean startup'
                     price={29.99}
                     image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                     rating={5}
                   />
                   <Product
                      id="49538094"
                      title='Kenwood KMix Stand Mixer for Baking, Stylish kitchen Mixer with K-beater, Dough Hook and Whisk, % litre Glass Bowl'
                      price={239.00}
                      rating= {4}
                      image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"

                   />

               </div>
               <div className="home__row">
                   <Product
                      id="49536094"
                      title= "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                      price={199.99}
                      rating= {3}
                      image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                   <Product
                      id="49538097"
                      title= "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                      price={98.99}
                      rating= {5}
                      image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                   />
                   <Product
                      id="49538087"
                      title= "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                      price={598.99}
                      rating= {4}
                      image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"

                   />

               </div>
               <div className="home__row">
                   <Product
                      id="49538088"
                      title= "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                      price={1094.98}
                      rating= {4}
                      image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                   />
               </div>

           </div>
        </div>
    );
}

export default home;
