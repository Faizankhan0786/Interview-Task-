import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             items: [],
             isLoaded: false,
         
         }
     }

    componentDidMount () {

        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true, 
                items: json,
            })

        });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return<div>Loading...</div>
        }
        
        else {

    return (
      <div className="App">

          <ui>
            {items.map (item =>(
              <li key = {item.id}>
               Name : {item.title} | Price : {item.price} | Description:{item.description}
               | category : {item.category} | Rating : {item.rate} {item.count}
               <img src = {item.image}></img>
               
                </li>
                 
        ))}
          </ui>
      </div>
      );
      
    }
   }
}

export default App;