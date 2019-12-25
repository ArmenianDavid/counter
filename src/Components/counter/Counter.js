import React from "react";
import "./Counter.css";

const Counter = props => {
    return (
    <div className="page-container">
        <div className="counter-container">
            <div className="header-div">
                <h2>Counter</h2>
            </div>
            <div className="counter">
                <div className="count-div">
                    {props.count > 0 ? <span>{props.count}</span> : null}
                </div>
                <div className="incriment-decrioment-butttons">
                    <div className="leftBtn">
                        <button
                            onClick={props.decriment}
                            disabled={props.count <= 0}
                        >
                            <span role="img" aria-label="plus">
                                &#10134;
                            </span>
                        </button>
                    </div>
                    <div className="rightBtn">
                        <button onClick={props.incriment}>
                            <span role="img" aria-label="plus">
                                &#10133;
                            </span>
                        </button>
                    </div>
                </div>
                <div className="reset-div">
                    <div>
                        <button onClick={props.startCounterFromZero}>reset</button>
                    </div>
                </div>
                <div className='start-value-container'>
                    <div className='start-value' style={{display : props.display ? 'none' : 'flex' }}>
                        <button onClick={props.changeDisplay}>Start value</button>
                    </div>
                    <div className='start-value-hidden' style={{display : props.display ? 'flex' : 'none' }}>
                        <input type='number' id='set-value' onChange={props.changeStartValue} />
                        <button id='set-button' onClick={props.setStartingCount}>Set</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Counter;
