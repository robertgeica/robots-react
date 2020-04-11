import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import CardList from './components/Card-List';
import SearchBox from './components/Search-Box';


const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        getUsersList();

    }, []);


    const getUsersList = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();

        setRobots(data);
    }


    const handleSearch = (e) => {
        setSearchField(e.target.value)
    }

    const filteredRobots = robots.filter(
        robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
        <div className="App">        
            <SearchBox 
                placeholder="search for robots"
                handleSearch={handleSearch}
            />

            <CardList robots={filteredRobots}/>

        </div>
    );
}

export default App;
