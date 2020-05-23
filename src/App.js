import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './Components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        // fetch data
        // set state
        this.setState({ data: data, country: country });
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart />
            </div>
        );
    }
}

export default App;
