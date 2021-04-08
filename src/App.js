import React, { Component } from 'react';

import CouresForm from './component/CouresForm';
import CouresList from './component/CouresList';

import './App.css';


class App extends Component {
  state = {
    courses : [
      {name: "HTML"},
      {name: "JavaScript"},
      {name: "CSS"}
    ],
    current: ''
    }

    updateCourse = (e) => { // step two [2]
      // console.log(e.target.value); this is for check only 
      this.setState({
        current: e.target.value
      })
    }

    addCourse = (e) => {
      e.preventDefault();
      // console.log(`add course`); for check only
      let current = this.state.current;
      let courses = this.state.courses;
      if (current) {
        courses.push({name: current})
        this.setState({
          courses,
          current: ''
        })
      }
    }

    deleteCourse = (index) => {
      // clone
      let courses = this.state.courses;
      // Edit
      courses.splice(index, 1);
      // update
      this.setState({
        courses
      })
    }

    editCourse = (index, value) => {

      let {courses} = this.state;
      let course = courses[index];
      course['name'] = value;
      this.setState({
        courses
      })
    }

  render() { 

    const {courses} = this.state; // step one [1]
    const couresList = courses.map( (course, index) => {
      return <CouresList 
      details={course} key={index} 
      index={index} 
      deleteCourse={this.deleteCourse} 
      editCourse={this.editCourse}
      />
    })

    return ( 
      <React.Fragment>
        <div className='container con-two'>
          <CouresForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
          <ul>
            {this.state.courses.length > 0 ? couresList 
            : <p className='massage'>Please Enter your course name !</p>}
          </ul>
        </div>
      </React.Fragment>
      );
  }
}

export default App;
