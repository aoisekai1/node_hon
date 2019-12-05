import React, { Component } from "react";

class Posts extends Component{
    state = {
        resData : []
    }

    getResponse = async () => {
        const response = await fetch('/api/posts');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    componentDidMount() {
        this.getResponse()
            .then(res => {
                this.setState({ resData: res.data, nama: 'Nami' });
            })
    }

    componentCard = (params) => {
        let component = (
            <div className="col-xs-6">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Code Post</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            params.map((items, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{items.code}</td>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>{items.status}</td>
                                    <td>{items.create_at}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
        return component;
    }

    render(){
        return(
            <div className="App">
                {this.componentCard(this.state.resData)}
            </div>
        )
    }
}

export default Posts;