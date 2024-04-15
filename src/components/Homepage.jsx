import React from 'react'
import NavbarHome from './NavbarHome'

const Homepage = () => {
  return (
    <div style={{ backgroundColor: '#020217', color: 'white' }}>
        <NavbarHome/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br /><br /><br />
                        
                            <h2>FASHION IMAGE SEARCH ENGINE</h2>
                            <br />
                        <p>Welcome to FISE - Revolutionizing Your Fashion Experience
                        Discover the future of fashion shopping with Fashin Image Search Engine, your premier online destination for style exploration and wardrobe innovation. Utilizing advanced AI technology, FISE transforms your approach to finding fashion that speaks to your personality and style preferences. At FISE, you're not just shopping; you're embarking on a personalized fashion journey.</p>
                       
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br /><br /><br />
                        
                        <img height={400} width={650} src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <br /><br /><br /><br /> <br /><br />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
