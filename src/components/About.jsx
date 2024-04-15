import React from 'react'
import NavbarHome from './NavbarHome'

const About = () => {
  return (
    <div style={{ backgroundColor: '#020217', color: 'white' }}>  {/* Added black background and white text color */}
      <NavbarHome/>
      <div className="container">  {/* Corrected typo from "conatiner" to "container" */}
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br /><br />
            <h4>About Us</h4>
            <p>Welcome to FISE, your ultimate destination for fashion discovery and inspiration! Born from a passion for style and powered by cutting-edge AI technology, our platform offers an innovative visual search engine dedicated to transforming how you find and engage with fashion online.</p>
            <h4>Our Mission</h4>
            <p>At FISE, we aim to revolutionize the fashion shopping experience by making it more intuitive, personal, and enjoyable. We understand that finding the perfect outfit can be time-consuming and frustrating. That's why we've developed a tool that simplifies the search process, using visual AI to help you discover styles that match your personal tastes and preferences seamlessly.</p>
            <h4>What We Offer</h4>
            <p>Our platform harnesses the power of advanced image recognition technology to allow you to search for clothing and accessories using just an image. Snap a photo, upload it to our site, and instantly browse similar items from a vast database of fashion products. Whether you're looking to recreate a celebrity's outfit or find a specific item you've seen online, our search engine makes it possible with precision and ease.

              - Visual Search: Upload an image and find similar fashion items in seconds.
              - Curated Collections: Explore collections curated by our fashion experts, designed to keep you at the forefront of trends and seasonal must-haves.
              - Style Advice: Get recommendations tailored to your style preferences and current trends.
              - Seamless Shopping: Integrated links to purchase items directly from retailers, ensuring a smooth shopping experience from discovery to delivery.</p>
            <h4>Our Technology</h4>
            <p>FISE leverages a sophisticated neural network trained on fashion product images. Our technology not only recognizes clothing types but also understands nuances like color, texture, pattern, and style. This deep learning capability ensures that every search is met with accurate and relevant results, truly personalized to the user's visual cues.</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
