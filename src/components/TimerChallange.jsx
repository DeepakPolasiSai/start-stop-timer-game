import {useState,useRef} from 'react';
import ResultModal from './ResultModal';

export default function TimerChallange({title,timer}) {
    let timecheck=useRef();
    let modalshowing=useRef();
    let [startstoptimer,setstartstoptimer]=useState(timer*1000);
    
    let timeisactive=startstoptimer>0 && startstoptimer< timer*1000;
    if(startstoptimer<=0){
        clearInterval(timecheck.current)
        modalshowing.current.open();
    }

    function clearingtime(){
        setstartstoptimer(timer*1000);
    }
    function challangestart(){
        timecheck.current= setInterval(()=>{
           setstartstoptimer((prev)=>{
            return prev-10
           })
        },10);
    }
    function checktime(){
        clearInterval(timecheck.current);
        modalshowing.current.open();
    }
    return(
        <>
       <ResultModal ref={modalshowing} result={startstoptimer} targettime={timer} setclearingtime={clearingtime}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{timer} second{timer>1?'s':''}</p>
            <button onClick={!timeisactive?challangestart:checktime}>{timeisactive?'stop':'start'} challange</button>
            <p className={timeisactive?'active':undefined}>{timeisactive?'timer is running':'timer inactive'}</p>
            </section>
        </>
    )
}