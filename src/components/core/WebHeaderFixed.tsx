import React, { CSSProperties } from 'react';

import WebHeader from './WebHeader';

import './../../sass/fixedNav.css';


interface State {
    isVisible: boolean;
}

const fixedStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 9000,
    backgroundColor: '#fff',
    color: '#0dc0c9',
} as CSSProperties;

class WebHeaderFixed extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isVisible: false
        }

        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.addEventListener("scroll", this.onScroll);
    }

    onScroll(event : any) {
        if((this.state.isVisible && window.scrollY < 150) || (!this.state.isVisible && window.scrollY >= 150)) {
            this.setState((prevState : State, prevProps : any) => ({
                isVisible: !prevState.isVisible
            }));
        }
    }

    render() {
        return (
            this.state.isVisible ?
                <div className={"fixedNav"}><WebHeader /></div> :
                <div />
        )
    }
}

export default WebHeaderFixed;