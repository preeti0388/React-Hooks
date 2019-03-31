import React, { useState } from 'react';
import ItemList from './ItemList';

const App = () => {

   //Array Destructuring
    const [item, setItem] = useState('posts');
        return(
        <div>
        <div>
            <button onClick={() => setItem('posts')}>Posts</button>
            <button onClick={() => setItem('todos')}>Todos </button>
            </div>
            <ItemList myitem = { item } />
            </div>
        );
    }

export default App;