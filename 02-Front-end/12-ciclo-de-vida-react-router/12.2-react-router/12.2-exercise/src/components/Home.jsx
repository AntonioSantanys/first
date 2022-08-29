import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>HomePage</h1>
                <Link to="/List">Clique aqui para ir à lista.</Link>
            </div>
        )
    }
}

export default Home;