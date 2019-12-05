import React, { Component } from "react";

class NoMatch extends Component{
    render(){
        return(
            <center>
                <img src="404.png" width="600px" />
                <p>
                    <h2>Page Not Found</h2>
                </p>
            </center>
        )
    }
}

export default NoMatch;