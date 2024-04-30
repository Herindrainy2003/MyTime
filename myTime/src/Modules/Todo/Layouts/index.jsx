import React from 'react'
import "./style.css"
import Form from '../Form'
import DisplayTodo from '../DisplayTodo';
import DisplayFinish from "../DisplayFinishTodo"
function Layouts() {
    return (
        <div className='container'>
            <div>
                <Form />
            </div>
            <div className='display'>
                <div>
                    <DisplayTodo />
                </div>
                <div>
                    <DisplayFinish />
                </div>
            </div>

        </div>
    )
}

export default Layouts
