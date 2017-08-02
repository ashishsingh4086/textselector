import React, {
    Component
}
from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/InputPara';
import Display from './components/UserSelection';

const ROOT_URL = "https://baconipsum.com/api/?type=all-meat"; //define a constant to hold the api URL 


//class that extends React components 
class App extends Component {
    constructor(props) {
        super(props); //call the super class index.js 

        //store state paras and text that keeps changing upon user request
        this.state = {
            paras: 1,
            text: ''
        };
    }

    //we need to fetch some data as soon as the component is rendered.
    //this can be avoided too but is a good practice to have some preloaded data as our initial paras  length is 4
    componentDidMount() {
        this.fetchLpsum();
    }

    //function to perform the ajax request using axios. Fetch can be used to 
    fetchLpsum = () => {
        axios.get(`${ROOT_URL}&paras=${this.state.paras}`)
            .then((response) => {
                //retrieve data from the reponse and set the state value to text
                this.setState({
                    text: response.data
                }, () => {
                    console.log(this.state.text);
                })
            })
            // incase of rejected promise log the error
            .catch((err) => {
                console.log(err);
            });
    }
    changePara = (num) => {

        this.setState({
            paras: num
        }, this.fetchLpsum);
    }
  render() {
    return (
      <div className="Entry">

        <Input  value={this.state.paras} onChange={this.changePara}/>
        <div className="Display">
            <Display value={this.state.text}/>
         </div>
      </div>
    );
  }
}

export default App;
