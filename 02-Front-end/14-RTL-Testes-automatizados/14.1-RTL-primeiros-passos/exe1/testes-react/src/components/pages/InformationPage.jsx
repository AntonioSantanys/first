import React from "react";
import Header from "../Header";

class InformationPage extends React.Component {
    render() {
        return(
            <div data-testid="information-page">
                <Header />
                <h2>Informações</h2>
            </div>
        )
    }
}

export default InformationPage;