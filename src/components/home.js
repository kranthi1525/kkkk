import React, { useEffect } from 'react';
// import img1 from '../images/img1.png';
// import img2 from '../images/img2.png';




const Home = () => {
//   useEffect(() => {
//     createFloatingElements();
//   }, []);

//   const createFloatingElements = () => {
//     const hero = document.querySelector('.hero');
//     for (let i = 0; i < 10; i++) {
//       const element = document.createElement('div');
//       element.classList.add('floating-element');
//       element.style.width = `${Math.random() * 50 + 10}px`;
//       element.style.height = element.style.width;
//       element.style.left = `${Math.random() * 100}%`;
//       element.style.top = `${Math.random() * 100}%`;
//       element.style.animationDuration = `${Math.random() * 5 + 5}s`;
//       element.style.animationDelay = `${Math.random() * 5}s`;
//       hero.appendChild(element);
//     }
//   };

  return (
    <div className="root">
      <div className="container">
        <header>
          <div className="logo">AVISHKAR</div>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Theams</a>
            <a href="#">Timeline</a>
            <a href="#">Sponsors</a>
            <a href="#">FAQs</a>
            <a href="#">Team</a>
          </nav>
        </header>
         <main className="hero">
          
            <div className="mid">
            {/* <img src={img2} alt="Description of image" className='img1'/>
            <img src={img1} alt="Description of image" className='img1'/> */}
            </div>

           
    
          
          {/* <h1 className="subtle">AVISHKAR</h1>
          <p className="description">SEASON 2</p>
          <p className="description">Seulforns Reanoesisant modue suq crianne siat, supdatioce koseqoatre anda sestintons at seneg silvistrase cantips tastaanugon</p>
          <button className="cta-button">Register</button> */}
        </main>
      </div>
    </div>
  );
};

export default Home;
