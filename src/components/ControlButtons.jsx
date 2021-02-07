import './controlButtons.css';
import { useEffect } from 'react';
import { fromEvent, asyncScheduler } from 'rxjs';
import { buffer, filter, throttleTime, } from 'rxjs/operators';


const ControlButtons = (props) => {

    useEffect(() => {
        const handleResize = (val) => {
            props.onClickWait();
        }

        const clicks$ = fromEvent(document.getElementById("btn_wait"), 'click');

        const subscription = clicks$.pipe(
            buffer(clicks$.pipe(throttleTime(299, asyncScheduler, { trailing: true }))),
            // if array is greater than 1, double click occured
            filter(clickArray => clickArray.length === 2)
        ).subscribe(handleResize);

        return () => subscription.unsubscribe();
    })

    return <div className="controlButtons">
        <h3>Control Panel</h3>

        <button className="btn" onClick={props.onClickActionStart}>Start</button>

        <button className="btn" onClick={props.onClickActionStop}>Stop</button>

        <button className="btn" id="btn_wait" >Wait</button>

        <button className="btn" onClick={props.onClickReset}>Reset</button>
    </div>

}

export default ControlButtons;