import './timer.css';

const Timer = (props) => {
    let hours = addZero(props.time.hours);
    let minutes = addZero(props.time.minutes);
    let seconds = addZero(props.time.seconds);


    return <div >
        <h3>Time is:</h3>
        <div className="timer">
            <span> {hours} </span>
            <span>:</span>
            <span > {minutes} </span>
            <span>:</span>
            <span > {seconds} </span>
        </div>
    </div>
}

function addZero(date) {
    return date < 10 ? "0" + date : date;
}

export default Timer;