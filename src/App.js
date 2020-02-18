import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Title from './components/Title';
import Footer from './components/Footer';
import images from "./assets/images/simpsons.json"
function App() {
  return (<div>
    <NavBar />
    <Title />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          {
            images.map((char) => {
              return (
                <img key={char.id} className="img img-thumbnail" src={require(char.image + ".jpg")} alt={char.alt}></img>
              )
            })

          }
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
