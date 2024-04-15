import React from 'react';
import NavbarHome from './NavbarHome';

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#020217', color: 'white' }}>
      <NavbarHome /> <br /><br /><br /><br /><br />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://i.pinimg.com/736x/99/58/33/995833922c33514afd8010d63d40141b.jpg" 
                    className="img-fluid rounded-start" 
                    alt="Office Environment"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Contact Us</h5>
                    <p className="card-text">
                      For queries, please call:<br />
                      <strong>0-814-477-8866</strong><br />
                      or contact our 24x7 Help Desk.<br />
                      Email ID: <a href="mailto:helpdesk@fashionimagesearchengine.com">elpdesk@fashionimagesearchengine.com</a><br />
                      For queries, call:<br />
                      <strong>+91 7123456777</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
}

export default Contact;
