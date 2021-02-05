import React, { Component } from 'react'
import './App.css';
import Card from './components/Card'
import AddNewCar from './components/AddNewCar'
import Counter from './components/Counter'


class App extends Component {
  state = {
    empty: false,
    arrCard: [{
      title: 'Honda',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/honda-logo.png',
      imgAlt: 'Honda',
      active: false
    },
    {
      title: 'Toyota',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/toyota-logo.png',
      imgAlt: 'Toyota',
      active: false
    },
    {
      title: 'Mazda',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/mazda-logo.png',
      imgAlt: 'Mazda',
      active: false
    },
    {
      title: 'Nissan',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/nissan-logo.png',
      imgAlt: 'Nissan',
      active: false
    },
    ]
  }

  Click = (index) => {
    this.setState({
      arrCard: this.state.arrCard.map((acc, ind) => {
        if (ind === index) {
          acc.active = !acc.active
          // console.log(`${acc.title} active - ${acc.active}`);
        }
        return acc
      })
    })
  }
  Close = (index) => {
    this.setState({ arrCard: this.state.arrCard.splice(index, 1) })

  }

   render() {
     let {empty} = this.state
     this.state.arrCard.length>0?empty=false:empty=true
    return (
      <div className="App">
        <AddNewCar arrCard={this.state.arrCard} click={this.Click} />
       {empty?<h1>List is empty</h1>:<Card arrCard={this.state.arrCard} Click={this.Click} Close={this.Close}/>}
        <Counter />
      </div>
    );

  }
}

export default App;
