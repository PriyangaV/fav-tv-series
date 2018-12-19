import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
        this.state =  {
            series: [],
            seriesName: '',
            isFetching: false
        }
    }
    componentDidMount() {
        this.textInput.current.focus();
    
        // const series = ['Game of Thrones', 'Vikings', 'Open Areana'];
        // setTimeout(() => {
        //   this.setState({series});
        // }, 2000);

        // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        //     .then( response => response.json())
        //     .then( series => this.setState({series}))

    }

    onSeriesInputChange = event => {
        this.setState({ seriesName: event.target.value, isFetching: true });

        fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
        .then( response => response.json())
        .then( series => this.setState({series, isFetching: false}));
    }
    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <Intro message="Here you can find all of your most loved series!"/>

                <div> 
                    <input 
                        value={seriesName} 
                        type="text"
                        ref={this.textInput}
                        placeholder={`Type your favorite series here...`}
                        onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p style={{display: 'none'}}>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV series have been found with <span style={{color: '#1c7e9c', fontWeight: 'bold'}}>{seriesName}</span></p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}

export default Series;
