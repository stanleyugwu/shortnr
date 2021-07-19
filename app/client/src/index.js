import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App = (props) => {
    return (
        <>
            <Header/>
            <h2>HELLO THERE</h2>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))