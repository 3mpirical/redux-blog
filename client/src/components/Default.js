import React from "react";
import { Link } from "react-router-dom";


class Default extends React.Component {
    render() {
        return (
            <div className="default" >
                Sorry, but it looks like this page doesn't exist...
                <br/>
                <button 
                    className="btn-blue"
                    onClick={() => this.props.history.goBack()} >
                Go Back?</button>
            </div>
        )
    }
}


export { Default };