import React, {Component} from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.props.Age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        )
    }
}

export default PersonCard;