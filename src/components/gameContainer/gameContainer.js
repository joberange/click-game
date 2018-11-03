import React, { Component } from 'react';
import Cards from '../cards';
import images from "../../images.json";
import "./gameContainer.css";

class GameContainer extends Component {
    state = {
        images,
        message: "Click any picture to start",
        score: 0,
        topScore: 0
    };

    handleClick = (id, clicked) => {
        const imageOrder = this.state.images;

        if (clicked) {
            imageOrder.forEach((image, index) => {
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "Try Again!",
                score: 0
            })
        }
        else {
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    imageOrder[index].clicked = true;
                }
            });

            const { topScore, score } = this.state;
            const newScore = score + 1;
            const newTopScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "Correct!",
                score: newScore,
                topScore: newTopScore
            })
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="container scoreContainer">
                    <div className="gameMessage text-center">
                        <p>{this.state.message}</p>
                    </div>
                    <div className="gameScores text-center">
                        <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                    </div>
                </div>

                <div className="container-fluid cardContainer">
                    <div className="img-card">
                        {this.state.images.map(image => (
                            <Cards
                                key={image.id}
                                id={image.id}
                                name={image.name}
                                clicked={image.clicked}
                                image={image.image}
                                handleClick={this.handleClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default GameContainer;