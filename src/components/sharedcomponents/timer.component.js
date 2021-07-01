// Timer worked component !!
import React from 'react';

class Timer extends React.Component {
    constructor(props) {
      super(props);
        let convertString = this.props.time.split(":");
        let timeSecond =   parseInt(convertString[0])*3600 + parseInt(convertString[1])*60;
        
      this.state = { time: {}, seconds: timeSecond, type: 'pause' };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
      this.stopTimer = this.stopTimer.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (  this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
        
        
      }
    }

    stopTimer() {       
    clearInterval(this.timer);
    this.timer=0;
    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }
  
    countDown() {
      const audio = new Audio('https://soundbible.com/mp3/Busy%20Signal-SoundBible.com-1695161320.mp3');
      
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      if(seconds < 10) audio.play();
      
      // Check if we're at zero.
      if (seconds === 0) { 
        audio.pause();
        clearInterval(this.timer);
      }
    }
  
    render() {

        switch(this.props.type) {

            case 'play': {
                    this.startTimer();
                    break;
            }
            case 'pause': {
                this.stopTimer();
                break;
            }
            case 'reset': {
                let convertString = this.props.time.split(":");
                let timeSecond =   parseInt(convertString[0])*3600 + parseInt(convertString[1])*60;        
                if(this.timer !==0) this.setState({seconds: timeSecond, time: this.secondsToTime(timeSecond)});
                this.stopTimer();
                break;
            }
            default:{
                break;
            }
        }
      return(
        <>{this.state.time.h}: {this.state.time.m} : {this.state.time.s}</>       
      );
    }
  }

export default Timer