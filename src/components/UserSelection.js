import React, {Component} from 'react';

class Display extends Component {


render(){
    return(
        <div className="jumbotron">
     
            {this.props.getText}
     
            </div>

    );
}
}
export default Display;