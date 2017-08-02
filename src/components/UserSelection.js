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
        <div>
            {this.props.value}
            </div>

    );
}
}
export default Display;