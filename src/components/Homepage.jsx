import React from 'react'
import NavbarHome from './NavbarHome'

const Homepage = () => {
  return (
    <div>
        <NavbarHome/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <center>
                            <h2>FASHION IMAGE SEARCH ENGINE</h2>
                        <p>This project aims to develop a fashion image search engine that allows users to find similar 
clothing items based on uploaded images or visual descriptions. This will help users 
discover new styles, shop similar pieces, and find inspiration from existing outfits. Object 
detection is done by pretrained model YOLOv8.Then the detected object and do a 
similarity check for shopping sites in Google.</p>
</center>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <center>
                        <img height={700} src="https://i.pinimg.com/564x/b8/2d/65/b82d651c37274bd1d9c4166962e54df6.jpg" alt="" />
                        </center>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
