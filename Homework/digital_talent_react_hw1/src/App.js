import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { CsvToHtmlTable } from 'react-csv-to-table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    }
  }
  render() {
    axios.get("DOF_fishbase.csv").then(result => {
      this.setState ({
        data: result.data
      })
    }).catch(function (error) {
      console.log("error:" + error);
    })
    return (
      <div class="container">
        <div class="table-responsive">
          <CsvToHtmlTable data={this.state.data} csvDelimiter="," tableClassName="table table-striped table-hover" />
        </div>
      </div>
    );
  }
}

export default App;
