import React from 'react';
import './App.css';



// Добавьте в игру возможность "ничья" - когда количество ходов исчерпалось,
//  и поле заполнено.
// Task 3

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        squares : Array(9).fill(null),
        count: 0,
        count1: 1,
        count2: 1,
        draw: 1
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]   
    ]
  }
  makeCounter = () =>{
    let count = 0;
  
    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }
isWinner = () => {
 let s = (this.state.count % 2 === 0) ? 'X' : 'O';
  
 for (let i = 0; i < 8; i++){
   let line = this.winnerLine[i];
   if (this.state.squares[line[0]] === s 
    &&  this.state.squares[line[1]] === s 
    &&  this.state.squares[line[2]] === s ) {
      if(s === 'X'){
        this.setState({ count1: this.state.count1 + 1 });
        console.log(this.state.count1);
      }
      if(s === 'O'){
        this.setState({ count2: this.state.count2 + 1 });
        console.log(this.state.count2);
      }
      alert(s + 'win');

    } 
 }
}
 
 
  clickHandler = event => {
    this.setState({ draw: this.state.draw + 1 });
    if(this.state.draw === 9){
      alert('ничья');
    }
    console.log(this.state.draw + 'draw');
   let data = event.target.getAttribute('data');
   let currentSqueres = this.state.squares;
   console.log(currentSqueres);
   if(currentSqueres[data] === null){
    currentSqueres[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
    this.setState({ count: this.state.count + 1 });
    this.setState({ squares: currentSqueres });
   }
   else{
     alert('так нельзя');
   }
   this.isWinner();
  }
  setTimeout = () => {
    this.setState({ squares : Array(9).fill(null) });
    this.setState({ count : 0});
    this.setState({ draw : 1})
  };

render() {
   return(
     
    <div className="wrap">
      <div className="tic-tac-toe">
        <div className="ttt-grid" onClick={this.clickHandler} data="0">
        {this.state.squares[0]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="1">
        {this.state.squares[1]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="2">
        {this.state.squares[2]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="3">
        {this.state.squares[3]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="4">
        {this.state.squares[4]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="5">
        {this.state.squares[5]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="6">
        {this.state.squares[6]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="7">
        {this.state.squares[7]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="8">
        {this.state.squares[8]}</div>
        </div>
        <div className="buton" onClick={this.setTimeout}  > начать новую игру</div>
        <div className="count2" > X = { this.state.count1 - 1} </div>
        <div className="count2" > O = { this.state.count2 - 1} </div>
         
    </div>  
   );
}

}

export default App;
