import React, { Component } from 'react';

class CouresList extends Component {
    state = { 
        isEdit: false
    }


    toggleEdit = () => {
        // clone
        let {isEdit} = this.state
        // update
        this.setState({
            isEdit: !isEdit    // Toggle
        })
    }


    funcList = () => {
        return (
            <li>
                {/* step one [1] */}
                <span className='name'>{this.props.details.name}</span>
                <span onClick={() => {this.toggleEdit()}} className="edit-icon">
                    <i className="far fa-edit fa-2x"></i>
                </span>
                <span onClick={() => {this.props.deleteCourse(this.props.index)}} className='trash-icon'>
                    <i className="fas fa-trash fa-2x"></i>
                </span>
            </li>
            )}

        updateCourseItem = (e) => {
            e.preventDefault();
            this.props.editCourse(this.props.index, this.input.value);
            this.toggleEdit();
        }
        

        funcUpdate = () => {
        return (
            <form onSubmit={this.updateCourseItem} className="update">
                <input type='text' ref={(v) => {this.input = v}} defaultValue={this.props.details.name} />
                <button type='submit'>update</button>
            </form>
        )
    }


    render() { 
        let {isEdit} = this.state;
        return ( 
            <React.Fragment>
                { isEdit ? this.funcUpdate() : this.funcList()}
            </React.Fragment>
            );
    }
}

export default CouresList;