import React, { Component } from 'react'
import Result from './Result'
import Actions from './Actions'

class Counter extends Component {
   state = {
      counter: 0,
   }
   handlePlusCount = () => {
      this.setState({ counter: this.state.counter + 1 })
   }
   handleMinusCount = () => {
      this.setState({ counter: this.state.counter - 1 })
   }
   handleZeroCount = () => {
      this.setState({ counter: 0 })
   }
   render() {
      return (
         <div className='containerCounter'>
            <Result res={this.state.counter} />
            <Actions plus={this.handlePlusCount} minus={this.handleMinusCount} zero={this.handleZeroCount}/>
         </div>
      )
   }
}

export default Counter