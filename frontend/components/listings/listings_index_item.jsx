import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class ListingsIndexItem extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <div className="listing-item map-on"
                onClick={() => this.props.history.push(`/listings/${this.props.listing.id}`)}
            >
                <div className="listing-item-picture">
                    <img className="listing-item-picture"
                    src={this.props.listing.photoUrls[0]} alt=""/>
                    {/* {ReactHtmlParser(this.props.listing.photoUrls[0])} */}
                </div>

                <div className="listing-item-content">
                    <div className="LIC-1">
                        <span>{this.props.listing.property_type} - </span>
                        <span>{this.props.listing.num_beds} BEDS - </span>
                        <span>{this.props.listing.num_bathrooms} BATHS</span>
                    </div>
                    <div className="LIC-2">
                        <span>{this.props.listing.title}</span>
                    </div>
                    <div className="LIC-3">
                        <span>${this.props.listing.price} per night</span>
                    </div>
                    {/* <div className="LIC-4">
                        <span>review score here</span>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(ListingsIndexItem);