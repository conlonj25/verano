import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Canvas extends React.Component{
    render() {
        return(
            <div className="Canvas">
                <Box id="Customers"></Box>
                <Box id="Transport"></Box>
            </div> 
        );
    }
}

class Box extends React.Component{
    render(){
        return(
            <div className="Box">
                <h1>{this.props.id}</h1>
                <ListItem id="Enron"/>
                <ListItem id="Kodak"/>
            </div>
        );
    }
}

class ListItem extends React.Component{
    render(){
        return(
            <span className="ListItem">
                <p>{this.props.id}</p>
            </span>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Canvas />);