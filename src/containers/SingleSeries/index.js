import React, { Component } from 'react';
import Loader from '../../components/Loader';
import Content from '../../components/Content';

class SingleSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: null
        }
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then( response => response.json())
        .then( show => this.setState({show, isFetching: false}))
    }

    render() {
        const { show } = this.state; 
        return (
            <div>
                { show === null && <Loader /> }
                { 
                    show !== null 
                    && 
                    <Content show={show} />
                }
            </div>
        )
        
    }
}

export default SingleSeries;