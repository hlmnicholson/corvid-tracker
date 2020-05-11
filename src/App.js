import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './Components';
import { fetchData } from './api/';
import styles from './App.module.css';

class App extends Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    }
    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
               <Cards data={data} />
               <CountryPicker />
               <Chart />
            </div>
        );
    }
}

export default App;
