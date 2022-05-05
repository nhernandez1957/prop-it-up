import React, {Component} from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Age : props.Age
        };
    }


    render() {

        const increaseAge = () => {this.setState({Age: this.state.Age + 1})}

        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.state.Age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={increaseAge}>Birthday Button for {this.props.buttonName}</button>
            </div>
        )
    }
}

export default PersonCard;