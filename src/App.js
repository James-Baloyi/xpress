import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
         apiResponse: "" 
        };
}

async getData(port){
    var url = `http://localhost:${port}/data/trimble`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    await xhr.send();
    var resp = xhr.responseText;
    this.setState({apiResponse: resp})
}
componentDidMount() {
    var port = process.env.PORT || 5000;
    this.getData(port);
}

render(){
return(
<p>echo {this.state.apiResponse}</p>
);

}
}

export default App;
