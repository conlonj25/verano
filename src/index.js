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
            listItems: ["Enron","Kodak","Gateway"],
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(i) {
        let newListItems = this.state.listItems;
        newListItems.splice(i,1);
        this.setState({
            listItems: newListItems,
        })
    }

    addItem() {
        let newListItems = this.state.listItems;
        newListItems.push("Waystar Royco");
        this.setState({
            listItems: newListItems,
        })
    }

    render(){

        const listItems = this.state.listItems.map((value,index)=>{
            return(
                <li key={index}>
                    <ListItem
                        value={value}
                        index={index}
                        deleteItem={this.deleteItem}
                    />
                </li>
            );
        });

        return(
            <div className="Box">
                <h1>{this.props.id}</h1>
                <ul>
                    {listItems}
                </ul>
                <button onClick={this.addItem}>+</button>
            </div>
        );
    }
}

class ListItem extends React.Component{

    deleteItemHelper = () => {
        this.props.deleteItem(this.props.index);
    }

    render(){
        return(
            <div className="ListItem">
                {this.props.value}
                <button onClick={this.deleteItemHelper}>X</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Canvas />);