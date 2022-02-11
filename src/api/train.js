import React from 'react'
// import Search from './Search'
import Navbar from './navbar'
import axios from "axios";
import Trainimage from "./train_image";

class Train extends React.Component {
    state = {
        Image: [],
    };

    onSearchSubmit = async (entry) => {
        console.log("hello");
        const response = await axios.get(
            `https://pixabay.com/api/?key=25621304-ef4aeb9e1afa7178d28b0f842&q=${entry}&image_type=photo`
        )
        this.setState({ Image: response.data.hits });

    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "30px" }}>
                <Navbar onSearchSubmit={this.onSearchSubmit} />
                <Trainimage Image={this.state.Image} />
            </div>
        );
    }
}

export default Train
