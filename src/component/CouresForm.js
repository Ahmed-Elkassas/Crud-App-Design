import React from 'react'

const CouresForm = (props) => {

    return ( 
        <div className='course-form'>
            <h3>Add Course</h3>
            <form onSubmit={props.addCourse}> {/* step two [2] */}
                <input placeholder="type here" type="text" value={props.current} onChange={props.updateCourse} />
                <button type="submit">Add Coures</button>
            </form>
        </div>
        );
}

export default CouresForm;
