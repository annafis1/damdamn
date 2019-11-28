import React from 'react';

<<<<<<< HEAD
import FireBox from "./fire";
// import TreeBox from "./tree";
import Box from "./boardBox";
import "./index.css"

const boardRule = [
    [3,0,3,0,3],     // 0
    [0,3,3,3,0],     // 1
    [0,0,3,0,0],     // 2
    [3,3,3,3,3],     // 3
    [1,1,1,1,1],     // 4
    [1,1,1,1,1],     // 5
    [1,1,1,1,1],     // 6
    [2,2,2,2,2],     // 7
    [0,0,2,0,0],     // 8
    [0,2,2,2,0],     // 9
    [2,0,2,0,2]      // 10
];

const boxes = new Array(45).fill(
    <Box contain="white"/>);

// boxes[2] = <FireBox/>


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOver: 0,
            gameBoard: boxes,
            gameState: null,
            pondPickCoordinate: [0,0],
            pondDropCoordinate: [0,0]
        }
    }

    renderTest() {
        this.state.gameBoard[2] = <FireBox/>
    }

    setGameState(state) {
        this.setState({
            gameState: state
        });
    }

    setPickCoordinate(coordinateX, coordinateY) {
        this.setState({
            pondPickCoordinate: [coordinateX, coordinateY]
        })
    }

    setDropCoordinate(coordinateX, coordinateY) {
        this.setState({
            pondDropCoordinate: [coordinateX, coordinateY]
        });
        alert(coordinateY)
    }

    setGameOver(state) {
        this.setState ({
            isOver:state
        })
    }    

    render() {
        let board = [];
        let row = [];
        console.log("REACH HERE FOR LOOPING")
        for (let i = 0; i < this.state.gameBoard.length; i+=5) {
            for (let j = i; j <= i+4; j++) {
                row.push(this.state.gameBoard[j]);
            } board.push(<div className="board-row"> {row} </div>);
            row = [];
            console.log(board)
        }

        return(
            <div>
                
                <div className="board-div">
                    {board[0]}
                    {board[1]}
                    {board[2]}
                    {board[4]}
                    {board[5]}
                    {board[6]}
                    {board[7]}
                    {board[8]}
                </div>
                <div className="test-gameover">
                    <button onClick={this.addPion}> Move </button>
                    <p>{this.state.isOver}</p>
                </div>
=======
import '../index.css';
import Square from './boardBox';

export default class Board extends React.Component {

    renderSquare(i, j, squareShade) {
        return <Square
            piece = {this.props.squares[i][j]}
            style = {this.props.squares[i][j]? this.props.squares[i][j].style : null}
            shade = {squareShade}
            onClick={() => this.props.onClick([i,j])}
        />
    }

    render() {
        const board = [];
        for(let i = 0; i < 11; i++){
            const squareRows = [];
            for(let j = 0; j < 5; j++){
                squareRows.push(this.renderSquare(i, j, "square"));
            }
            board.push(<div className="board-row">{squareRows}</div>)
        }

        return (
            <div>
                {board}
>>>>>>> f3a584e072656e8c49db89ea009300593ac5f9c1
            </div>
            
        );
    }
}

function isEven(num){
    return num % 2 === 0;
}