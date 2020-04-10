import React from 'react';
import './App.css';
import axios from "axios";
import DataCard from "./components/DataCard";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });
        //data gives us name data.name, data.country, data.searches, data.id
      })
      .catch(error => console.error("error with axios call for data", error));
  }


  render () {
    return (
      <div className="App">
  
        <NavBar />
        <div className="dataCardContainer">
          {this.state.data.map(item => {
                    console.log("item", item);
                    return <DataCard key={item.id} item ={ item }/>;
                  })}
        </div>
       
      </div>
    )
  }

}

export default App;
