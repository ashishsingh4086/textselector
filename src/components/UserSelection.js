import React, {Component} from 'react';

class Display extends Component {
    constructor(props){
        super(props);

        this.state={
            item: props.value
        };
    }

render(){
    return(
        <div className="jumbotron">
            <li className="list-group-item">
            {this.props.value}
            </li>
            </div>

    );
}
}
export default Display;