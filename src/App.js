import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Title from './components/Title';
import Footer from './components/Footer';
import images from "./assets/images/simpsons.json"

class App extends Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    status: "none",
    charClicked: []
  }
  shuffleChar = () => {
    this.setState({ images: this.shuffle(images) })
  }
  shuffle = (arr) => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  render() {
    return (<div>
      <NavBar
        status={this.state.status}
        score={this.state.score}
        topScore={this.state.topScore}
      />
      <Title />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            {
              images.map((char) => {
                return (
                  <img onClick={this.shuffleChar} key={char.id} className="img img-thumbnail" src={require(char.image + ".jpg")} alt={char.alt}></img>
                )
              })

            }
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
      <Footer />
    </div >
    );
  }
}
export default App;
