import React, {Component} from 'react';

class Input extends Component {
    constructor(props){
        super(props);

        this.state={
        paraChange: this.props.value
        };
    }
onChange=(term)=>{

    this.setState({term});   
     this.props.onChange(term);
}



render(){
    return(
        <div>
            <input type="number" 
              className="form-inline" 
              value={this.state.value}  
              onChange={event=>this.onChange(event.target.value)} 
              placeholder="enter paragraph"/>
        </div>

    );
}
}
export default Input;