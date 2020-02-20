import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Title from './components/Title';
import Card from "./components/Card";
import Footer from './components/Footer';
import images from "./assets/images/simpsons.json"
class App extends Component {

  state = {
    images,
    charClicked: [],
    score: 0,
    topScore: 0,
    message: "Click on an image to begin!"
  }



  shuffleChar = () => {
    this.setState({ images: this.shuffle(images) })
  };

  incrementScore = () => {
    let newScore = this.state.charClicked.length;
    console.log("newScore: " + newScore);
    this.setState({ score: newScore });
    console.log("score: " + this.state.score)
    if (this.state.topScore < this.state.score) {
      this.setState({ topScore: this.state.score })
    };
  };

  clickHandler = (event) => {
    this.setState({ message: "Click on an image to begin!" })
    let char = event.target.id;
    if (this.state.charClicked.includes(char)) {
      this.setState({ charClicked: [], score: 0, message: "Doh! You already picked that character, Try again." });
    } else {
      let charClicked = this.state.charClicked;
      charClicked.push(char);
      this.setState({ charClicked: charClicked })
      console.log(this.state.charClicked);
      this.incrementScore();
    };
    if (this.state.score === this.state.images.length) {
      this.setState({ message: "Cowabunga Dude!! You guess correctly." });
    };
    this.shuffleChar();
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
    return (<div className="App">
      <NavBar
        message={this.state.message}
        score={this.state.score}
        topScore={this.state.topScore}
      />
      <Title /><div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">{
          this.state.images.map(char => {
            return <Card key={char.id} id={char.id} classname={"img img-thumbnail"} src={require(char.image + ".jpg")} alt={char.name} onClick={this.clickHandler} />
          })
        }
        </div>
        <div className="col-sm-1"></div>
      </div>
      <Footer />
    </div>
    );
  };
}


export default App;
