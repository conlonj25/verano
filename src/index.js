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

    constructor(props) {
        super(props);
        this.state = {
            listItems: ["Enron","Kodak"],
        }
    }

    render(){

        const listItems = this.state.listItems.map((value,index)=>{
            return(
                <li key={index}>
                    <ListItem value={value} index={index}/>
                </li>
            );
        });

        return(
            <div className="Box">
                <h1>{this.props.id}</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

class ListItem extends React.Component{
    render(){
        return(
            <div className="ListItem">
                {this.props.value}
                <button>X</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Canvas />);