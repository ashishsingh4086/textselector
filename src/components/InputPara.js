import React, {Component} from 'react';

class Input extends Component {
    constructor(props){
        super(props);

        this.state={
        paraChange: this.props.value
        };
    }
onChange=(event)=>{

    this.setState({
        value:event.target.value},
   
            this.props.onChange(this.state.value)
        );
}



render(){
    return(
        <div>
  
              <input type="number" className="form-control" inputMode="numeric" onChange={this.onChange} value={this.state.value} placeholder="enter paragraph"/>
        

            </div>

    );
}
}
export default Input;