import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../img/ceacf192f06daaf9ab6d0274ea45517b334ce6b1.png"
const Hero = () => {
  const heroStyle = {
    backgroundColor: '#EDF2EE', 
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const btnStyle = {
    backgroundColor: '#00B207',
    borderColor: '#00B207',
    borderRadius: '50px',
    padding: '12px 32px',
    fontWeight: '600',
    fontSize: '16px'
  };

  const orangeText = { color: '#FF8A00' };
  const greenText = { color: '#00B207' };

  return (
    <section  style={heroStyle}  className="py-5">
      <div className="container" >
        <div className="row align-items-center">
          
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <p className="text-uppercase fw-medium mb-2" style={{ ...greenText, fontSize: '14px', letterSpacing: '1px' }}>
              Welcome to Shopery
            </p>
            
            <h1 className="display-3 fw-bold mb-3" style={{ color: '#1A1A1A' }}>
              Fresh & Healthy <br />
              <span className="fw-normal">Organic Food</span>
            </h1>
            
            <div className="d-flex align-items-baseline justify-content-center justify-content-lg-start gap-2 mb-2">
              <span className="fs-3">Sale up to</span>
              <span className="fs-3 fw-bold" style={orangeText}>30% OFF</span>
            </div>
            
            <p className="text-secondary mb-4">
              Free shipping on all your order. we deliver, you enjoy
            </p>
            
            <button className="btn btn-success d-inline-flex align-items-center gap-2" style={btnStyle}>
              Shop now 
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 1.875L16.875 7.5M16.875 7.5L11.25 13.125M16.875 7.5L1.125 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

         
          <div className="col-lg-6 position-relative text-center">
            <img 
              src={img}
              alt="Fresh Vegetables Basket" 
              className="img-fluid" 
              style={{ maxHeight: '500px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}
            />
          </div>
        </div>

       
        <div className="position-absolute bottom-0 start-50 translate-middle-x pb-4 d-flex gap-2">
          <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#ccc' }}></span>
          <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#00B207' }}></span>
          <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#ccc' }}></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;