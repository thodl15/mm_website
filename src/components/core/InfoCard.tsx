import React from 'react';

import './../../sass/info.css';

interface Props {
    question: string;
    answer: string;
}

interface State {
    isOpen: boolean;
}

class InfoCard extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.updateOpen = this.updateOpen.bind(this);
    }

    updateOpen() {
        console.log("AHHHH");
        this.setState((prevState, prevProps) => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return (
            <div className={"infoCard"}>
                <div className={"qCard"} onClick={this.updateOpen}>
                    <div className={"infoText"}>
                        {this.props.question}
                    </div>
                    <div className={"btnInfo"}>
                    
                    </div>
                </div>
                {
                    this.state.isOpen ? 
                    <div className={"aCard"}>
                        {this.props.answer}
                    </div> :
                    <div/>
                }
            </div>
        )
    }
}

export default InfoCard;