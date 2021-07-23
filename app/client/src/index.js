import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './styles/index.css';

const MainApp = (props) => {
    return (
        <App/>
    )
}

ReactDOM.render(<MainApp/>, document.getElementById('app'));