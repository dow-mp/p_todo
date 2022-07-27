import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
    position: relative;
    border-radius: 3px;
    background: #dddddd;
    height: 15px;
`;

const StyledThumb = styled.div`
    width: 10px;
    height: 25px;
    border-radius: 3px;
    position: relative;
    top: -5px;
    opacity: 0.5;
    background: #823eb7;
    cursor: pointer;
`;

const SliderHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`;

// calculate how fat to move the thumb away from the left, taking into account the width of the thumb itself and removing half the width so as not to overflow to the right or left
const getPercentage = (current, max) => (100 * current) / max;
const getValue = (percentage, max) => (max / 100) * percentage;
const getLeft = percentage => `calc(${percentage}% - 5px)`;

// slider below is horizontal so all values will be calculated using only the x-axis

export const Slider = ({initial, max, onChange, formatFn}) => {
    const initialPercentage = getPercentage(initial, max);
    // establish ref objects for the slider, thumb, difference between values, and current position of the slider
    const sliderRef = useRef();
    const thumbRef = useRef();
    const diff = useRef();
    const currentRef = useRef();

    const handleMouseMove = e => {
        // caluclate new thumb position while moving by using the saved horizontal start position
        console.log(e.clientX, diff.current, sliderRef.current, sliderRef.current.getBoundingClientRect().left);
        let newX = e.clientX - diff.current - sliderRef.current.getBoundingClientRect().left;

        // setting the start and end positions of the slider
        const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
        const start = 0;

        // check to determine if the new position is outside of the slider's range and if so use the boundaries of the range instead of the new x position
        if (newX < start) {
            newX = 0;
        }

        if (newX > end) {
            newX = end;
        }

        const newPercentage = getPercentage(newX, end);
        const newValue = getValue(newPercentage, max);
        thumbRef.current.style.left = getLeft(newPercentage);
        // replace the initial range displayed on the page with the current position of the slider
        currentRef.current.textContent = formatFn(newValue);
        onChange(newValue);
    };

    const handleMouseUp = () => {
        // deregister the user's interaction with the page
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
    };

    const handleMouseDown = e => {
        // set the current ref of the diff to the position of the event on the x axis minus the thumb's bounding box left position?
        diff.current = e.clientX - thumbRef.current.getBoundingClientRect().left;
        // add event listeners for mouse interactions here
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <>
            <SliderHeader>
                <strong ref={currentRef}>{formatFn(initial)}</strong>
                &nbsp;/&nbsp;
                {formatFn(max)}
            </SliderHeader>
            <StyledSlider ref={sliderRef}>
                <StyledThumb 
                    style={{ left: getLeft(initialPercentage) }}
                    ref={thumbRef} 
                    onMouseDown={handleMouseDown} 
                /> 
                {/* onMouseDown handler registers two more handlers for the thumb after the mouse down event is triggered AND stores the difference of the thumb position and the actual click on the x-axis, store it only once in order to reuse it later for EVERY mouse move event by using useRef in order to ensure the position isn't lost between re-renders of the component (we are NOT using state because we do NOT want to trigger a re-render of the component like state would) */}
            </StyledSlider>
        </>
    );
};