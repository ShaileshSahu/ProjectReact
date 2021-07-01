import React, { Suspense} from 'react';
import {insertJSON, getJSON} from '../../../helpers';
import {primary,extraSmallSize} from '../../../constant';
import {LoaderLinear} from '../../sharedcomponents/loader.component';

import './pomodoro.css';
const PomodoroCreate = React.lazy(()=> import('./pomodoro-children/pomodoro-create.component')); // example of lazy loading!!
const PomodoroList = React.lazy(()=> import('./pomodoro-children/pomodoro-list.component')); // example of lazy loading!!

class Pomodoro extends React.Component {

    constructor(props){
        super(props);
        this.state = { show: true, seconds:3300, pomodoros: getJSON('pomodoros') || []  };
    }

    componentDidMount() {
        setTimeout(()=> { 
            this.setState({show: false })}, 1000);
    }

    componentDidUpdate() {
        
    
    }

    componentWillUnmount() {
    }

    
    createPomodoroState(createTask) {
        createTask.id = new Date().getTime();
        this.setState((data)=> { data.pomodoros.push(createTask);
        insertJSON('pomodoros', data.pomodoros)});
        
    }

    deletePomodoroState(id){
        this.setState( (data)=> { 
            const filterData = data.pomodoros.filter(e => e.id!=id) 
            data.pomodoros = filterData;
            insertJSON('pomodoros', filterData);
        })
    }

    render() {
       if(this.state.show) 
            return (<LoaderLinear color={primary} size={extraSmallSize}/>) ;
        
        return (
        <Suspense fallback={<LoaderLinear color={primary} size={extraSmallSize}/>}>
            <section className='pomodoro-container'>
                <h1 className='primary-font'>Pomodoro Technique </h1>
                <PomodoroCreate createPomodoroState={this.createPomodoroState.bind(this)}/>
                <PomodoroList list={this.state.pomodoros} deletePomodoroState={this.deletePomodoroState.bind(this)}/>
            </section>
        </Suspense>);
    }

}


export default Pomodoro;;

