import React, { Component } from 'react';
import './Serach.scss'

class Search extends Component {

  searchData = (e) => {
    const term = e.target.value;

    this.props.search(term)
  }
  
  
  render() { 
    return ( 
        <form className="buscador">
          <input type="text" placeholder="buscador" onChange={this.searchData}/>
        </form>
     );
  }
}
 
export default Search;