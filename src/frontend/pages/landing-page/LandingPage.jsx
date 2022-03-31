import './landing-page.css'
import React from 'react'
import NavgationTop from '../../components/navigation/NavigationTop'
import { Link } from 'react-router-dom'
import {ecom_logo, landing_image, signup_icon, login_icon, canon_eos_6d, nikkor_200mm, dsmc2, redvolt_microv, fisheye, nikon_z9} from '../../assets/index.js'


export default function LandingPage (){
    return <div>
       <NavgationTop/>
    <main className="wrapper flex-column">
        <div className="full-wrapper flex-column">
           <div className="background-img-container">
               <img src={landing_image} alt="backgroung-image" className="responsive-img" />
                <div className="centered-content">
                    <p className="m-text">Sometimes you will never know the <strong>true value</strong> of a moment unit
                    it becomes <strong>a memory.</strong></p>
                    <p className="m-text">So we at <span className="text-italic font-weight-4">Shutter Island</span> aim at catering all your photography needs in a single marketplace at a reliable and discounted prices.</p> 
                    <Link to="/categories"><button className="btn primary-btn mg-t-m">Shop Products</button></Link>
                </div>
           </div>
        </div>

        <div className="overlay-card-container flex-column">
                <div className="flex-sb mg-t-s mg-l-m">
                    <div className="overlay-card pointer border-radius-sm flex-se">
                        <img src={canon_eos_6d} alt="EOS 6D" className="responsive-image"/>
                        <div className="overlay-text">
                            <p className="m-text">Camera</p>
                        </div>
                        
                    </div>
                    <div className="flex-center-column mg-r-m">
                        <h2>Camera</h2>
                        <p>"Life is like a camera. Focus on what's important. Capture the good times. And if things don't work out, just take another shot."</p>
                        <a href="../products/products-listing-1.html"><button className="btn primary-btn mg-t-xs">Shop Cameras</button></a>
                    </div>
                </div>
                
                <div className="line-divider"></div>

                <div className="flex-sb mg-t-s mg-r-m">
                    <div className="flex-center-column mg-l-m">
                        <h2>Lens</h2>
                        <p>“Before you point fingers at someone, clean them well. You better remove that log on your lens before you can see the speck on someone's own afar!”</p>
                        <a href="../products/products-listing-1.html"><button className="btn primary-btn mg-t-xs">Shop Lens</button></a>
                    </div>
                    <div className="overlay-card pointer border-radius-sm flex-se">
                        <img src={nikkor_200mm} alt="NIKKOR_200MM" className="responsive-image"/>
                        <div className="overlay-text">
                            <p className="m-text">Lens</p>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="line-divider"></div>

                <div className="flex-sb mg-t-s mg-l-m">
                    <div className="overlay-card pointer border-radius-sm">
                        <img src={dsmc2} alt="DSMC2 display" className="responsive-image"/>
                        <div className="overlay-text">
                            <p className="m-text">Display,</p>
                            <p className="m-text">Lights</p>
                        </div>
                        
                    </div>
                    <div className="flex-center-column mg-r-m">
                        <h2>Display & Lights</h2>
                        <p>“Every little candle is a great knight fighting against the darkness! Every time you feel yourself tiny, remember these brave candles!”</p>
                        <a href="../products/products-listing-1.html"><button className="btn primary-btn mg-t-xs">Shop Displays,Lights</button></a>
                    </div>
                </div>

                <div className="line-divider"></div>

                <div className="flex-sb mg-t-s mg-r-m">
                    <div className="flex-center-column mg-l-m">
                        <h2>Accessories</h2>
                        <p>“You should only have so many accessories. You have to make sure you have the right ones at the right time.”</p>
                        <a href="../products/products-listing-1.html"><button className="btn primary-btn mg-t-xs">Shop Accessories</button></a>
                    </div>
                    <div className="overlay-card pointer border-radius-sm">
                        <img src={redvolt_microv} alt="REDVOLT MICRO V" className="responsive-image"/>
                        <div className="overlay-text">
                            <p className="m-text">Others</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="line-divider"></div>

            <div className="flex-se mg-t-l">
                <div className="horizontal-card padding-m border-radius-sm">
                  <div className="cart-item ">
                      <div className="cart-item-image">
                          <img src={fisheye} alt="FISHEYE_NIKKOR_8-15MM" className="responsive-image"/>
                      </div>
                      <div className="flex-row-wrap flex-sb">
                          <div className="cart-item-details">
                              <div className="primary-details flex-sb-column">
                                  <h4>New Arrivals!</h4>
                                  <h5 className="mg-t-m">NIKON</h5>
                                  <p className="light">FISHEYE NIKKOR 8-15MM</p>
                                  <p>FX/35mm,f/3.5 to 4.5,
                                    f/22 to 29 </p>
                              </div>
                          
                          </div>
                      </div>
                  </div>
                </div>

                <div className="horizontal-card padding-m border-radius-sm">
                  <div className="cart-item ">
                      <div className="cart-item-image">
                          <img src={nikon_z9} alt="NIKON Z9" className="responsive-image"/>
                      </div>
                      <div className="flex-row-wrap flex-sb">
                          <div className="cart-item-details">
                              <div className="primary-details flex-sb-column">
                                  <h4>New Arrivals!</h4>
                                  <h5 className="mg-t-m">NIKON</h5>
                                  <p className="light">NIKON Z9</p>
                                  <p>Nikon Z mount</p>
                                  <p>35.9 mm x 23.9 mm</p>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>

    </main>
    </div>
}