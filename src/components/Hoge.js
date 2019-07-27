import React, { Component } from 'react'

export default class hoge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoge: false,
            button: false
        }
    }

    func() {
        this.setState({
            button: !this.state.button // state.buttonフラグを反転させる
        });
    }

    render() {
        console.log(this);

        return (
            <div>
                <button className={"piyo" + (this.state.button ? " on" : "")}
                    onClick={() => {
                        this.func();
                        this.props.fuga(this.state.hoge);
                    }}>
                    hoge</button>
            </div>
        )
    }
}
