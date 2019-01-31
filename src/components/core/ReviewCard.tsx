import React from 'react';

interface Props {
    name: string;
    rating: number;
    review: string;
}

class ReviewCard extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    computeRatingDisplay(review: number) {
        var starArray = [];
        for(var i = 0; i < review; i++) {
            starArray.push(
                <span className={"ratingStar"}></span>
            );
        }
        return (
            <div>
                {starArray}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className={"testReview"}>{this.props.review}</div>
                <div className={"testName"}>{this.props.name}</div>
                <div className={"testRating"}>{this.computeRatingDisplay(this.props.rating)}</div>
            </div>
        )
    }
}

export default ReviewCard;