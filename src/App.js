import React, { Component } from "react";
import "./Components/Card/card-list.styles.css";
import CardList from "./Components/Card/Card";
import "./App.css";
import SearchBox from "./Components/SearchBox/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchText: "",
    };
  }
  handleChange = (event) => {
    this.setState({ searchText: event.target.value }, () =>
      console.log(this.state)
    );
  };
  componentDidMount() {
    fetch("https://dtcdashboard.pythonanywhere.com/api/v1/employee/")
      .then((res) => res.json())
      .then((employee) => this.setState({ employees: employee }));
  }
  render() {
    const { employees, searchText } = this.state;
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox placeholder="Search By Name" onChange={this.handleChange} />
        <div className="card-list">
          <CardList employees={filtered} />
        </div>
      </div>
    );
  }
}

export default App;
