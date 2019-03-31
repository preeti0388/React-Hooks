import React from 'react';
//import axios from 'axios';

class ItemList extends React.Component{

    // componentDidMount() {
    //     //axios.get(`https://jsonplaceholder.typicode.com/${this.props.myitem}`);
    // }

    render(){
        return <div>{this.props.myitem}</div>
    }
}

export default ItemList;