import React from 'react';

import WebHeader from './WebHeader';

interface Props {
    name?: string;
}

interface State {
    isVisible: boolean;
}

class WebHeaderFixed extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            this.state.isVisible ?
                <WebHeader /> :
                <div />
        )
    }
}

export default WebHeaderFixed;