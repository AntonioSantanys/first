import React from "react";
import { Link } from "react-router-dom";

class List extends React.Component {
    render() {

        const { ship } = this.props.match.params;

        return (
            <div>
                <ul>
                    <li>Água</li>
                    <li>Fogo</li>
                    <li>Ar</li>
                    <li>{ship}</li>
                </ul>
                <Link to="/Home">Clique aqui para ir à HomePage.</Link>
            </div>
        )
    }
}

export default List;