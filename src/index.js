import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Canvas extends React.Component{
    render() {
        return(
            <div class="canvas">
                <div class="row1">
                    <div class="vert-container">
                        <Box className="box" id="partners"/>
                    </div>
                    <div class="vert-container">
                        <Box className="box" id="activities"/>
                        <Box className="box" id="resources"/>
                    </div>
                    <div class="vert-container">
                        <Box className="box" id="value"/>
                    </div>
                    <div class="vert-container">
                        <Box className="box" id="relationships"/>
                        <Box className="box" id="channels"/>
                    </div>
                    <div class="vert-container">
                        <Box className="box" id="segments"/>
                    </div>
                </div>

                <div class="row2">
                    <div class="vert-container">
                        <Box className="box" id="structure"/>
                    </div>
                    <div class="vert-container">
                        <Box className="box" id="revenue"/>
                    </div>
                </div>
            </div>
        );
    }
}

class Box extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    addItem() {
        let newListItems = this.state.listItems;
        newListItems.push("");
        this.setState({
            listItems: newListItems,
        })
    }

    deleteItem(i) {
        let newListItems = this.state.listItems;
        newListItems.splice(i,1);
        this.setState({
            listItems: newListItems,
        })
    }

    editItem(i, newValue) {
        let newListItems = this.state.listItems;
        newListItems[i] = newValue;
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
                        editItem={this.editItem}
                    />
                </li>
            );
        });

        return(
            <div className="box">
                <h1>{this.props.id}</h1>
                <ul>
                    {listItems}
                </ul>
                <button className="AddButton" onClick={this.addItem}>+</button>
            </div>
        );
    }
}

class ListItem extends React.Component{

    deleteItemHelper = () => {
        this.props.deleteItem(this.props.index);
    }

    editItemHelper = (event) => {
        this.props.editItem(this.props.index, event.target.value);
    }

    render(){
        return(
            <div className="ListItem">
                <input type="text" value={this.props.value} onChange={this.editItemHelper}></input>
                <button onClick={this.deleteItemHelper}>X</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Canvas />);