import React from 'react';
import { danger } from '../../../../constant';
import {ToastContext} from './../../../../app';
class PomodoroCreate extends React.Component {
    static contextType = ToastContext;
    constructor(props) {
        super(props);
        this.state = {taskName: '', time: '01:00' };
        this.createPomodoro = this.createPomodoro.bind(this);
        this.valueChangeHandler = this.valueChangeHandler.bind(this);
    }

    valueChangeHandler(e) {
        console.log(e.target.name, e.target.value);
        this.setState((data) =>({[e.target.name]: e.target.value}));
    }
    createPomodoro(e){
       if(!this.state.taskName || !this.state.time) {
            const {setToastParams}= this.context;
            setToastParams({show:true, type:'danger', content:'Please fill all the required details.'})   
       } else {
           console.log(this.state);
           this.props.createPomodoroState(this.state);
       }
    }

    render() {
        return (
            <section>
                <form className='form'>
                        <input type='text' name='taskName' placeholder='task name' onChange={this.valueChangeHandler}/>
                        <input type='time' value={this.state.time} name='time' placeholder='timer' onChange={this.valueChangeHandler}/>
                        <button type='button' class='btn btn-primary' onClick={this.createPomodoro}> Create Pomodoro</button>
                </form>
            </section>

        );
    }

};

export default PomodoroCreate;
