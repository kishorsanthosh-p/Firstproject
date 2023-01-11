import React from 'react';
import './index.css';
export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      searchQuery1: "",
      searchQuery2: "",
      searchQuery3: "",
      searchQuery4: ""
    }
  }

  handleInputtext(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }
  handleInputaddres(event) {
    this.setState({
      searchQuery1: event.target.value
    });
  }
  handleInputCheckbox(event) {
    this.setState({
      searchQuery2: event.target.value
    });
  }
  handleInputradio(event) {
    this.setState({
      searchQuery3: event.target.value
    });
  }
  handleInputselect(event) {
    this.setState({
      searchQuery4: event.target.value
    });
  }
  handleButtonClicked(event) {
    var searchQuery = this.state.searchQuery;
    var searchQuery1= this.state.searchQuery1;
    var searchQuery2= this.state.searchQuery2;
    var searchQuery3= this.state.searchQuery3;
    var searchQuery4= this.state.searchQuery4;
    alert('Your Name is: ' + searchQuery+
    '\nYour Adders is: '  + searchQuery1+
    '\nYour Age is: '  + searchQuery3+
    '\nYour Gender is: '  + searchQuery4+
    '\n All the information in  : '  + searchQuery2);
    event.preventDefault();
    
  }

  render() {
    return  (
      <div><center>
        <h1>Form</h1>
        <label>Name
        <input type="text"  value={this.state.searchQuery} onChange={this.handleInputtext.bind(this)}/>
        </label><br/><br/>
        <label >addres
            <textarea value={this.state.searchQuery1} onChange={this.handleInputaddres.bind(this)}></textarea>
        </label><br/>
        <label >
            select your Age<br/>
                    <input type="radio"  value="20-30" checked={this.state.searchQuery3==="20-30"} onChange={this.handleInputradio.bind(this)}/>
                    <label for="html">20-30</label><br/>
                    <input type="radio"  value="30-40"checked={this.state.searchQuery3==="30-40"} onChange={this.handleInputradio.bind(this)}/>
                    <label for="css">30-40</label><br/>
                    <input type="radio"  value="40-50"checked={this.state.searchQuery3==="40-50"} onChange={this.handleInputradio.bind(this)}/>
                    <label for="javascript">40-50</label>
        </label><br/>
        <label  checked={this.state.searchQuery4} onChange={this.handleInputselect.bind(this)}>
            select your Gender
                    <select name="cars" id="cars">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
        </label><br/>
        <label value={this.state.searchQuery2} onChange={this.handleInputCheckbox.bind(this)}>
            Above the Information is Correct
                    <input type="checkbox"  value="Correct"/>
        </label><br/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Submit
        </button></center>
      </div>
    );
  }
}
