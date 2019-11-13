import React from "react";

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

boxes[1] = boxes[3] = <Box contain="white" />
boxes[2] = <FireBox/>


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
                    <button> Press Me</button>
                    <p>{this.state.isOver}</p>
                </div>
            </div>
            
        );
    }
}

export default Board;