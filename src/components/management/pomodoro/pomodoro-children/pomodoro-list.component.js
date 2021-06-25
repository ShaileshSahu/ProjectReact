import React from 'react';
import {FaPlay} from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { FiPause } from "react-icons/fi";

import Timer from './../../../sharedcomponents/timer.component';


class PomodoroList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        console.log(this.props);
        return (<>
        
        <h3>PomodoroList</h3>
            <section className='pomodoro-list-container'>
            { this.props.list.map(element => { return <PomodoroListChild {...element}  deletePomodoroState={this.props.deletePomodoroState}/>}) }         
            </section>
        </>);
    }
}

class PomodoroListChild extends React.Component {
    constructor(props){
            super(props);
            this.state =  { type: 'pause'};
        }
    

    render() {
        return (        
            <div className='pomodoro-element'>
                <h3 style={{marginLeft:'8%'}}>{this.props.taskName}</h3>
                <h2 className='center primary-font large-font'><Timer time = {this.props.time} type={this.state.type}/></h2>
                <div className='center black'>
                    <button className='btn btn-danger' onClick={()=> {this.props.deletePomodoroState(this.props.id)}}><AiFillDelete/></button>
                    <button className='btn' onClick={()=>{this.setState({type: this.state.type==='play'? 'pause': 'play'})}}> 
                    {this.state.type==='play'? <FiPause/>: <FaPlay />}
                     </button>
                    <button className='btn btn-success' onClick={()=>{this.setState({type: 'reset'})}}><BiReset/></button>
                </div>
            </div>

        );
}       
}

export default PomodoroList;

