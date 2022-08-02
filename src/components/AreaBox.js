import {AddItemBox} from './AddItemBox';
import { useState } from 'react';

export const AreaBox = (props) => {
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        // need to track changes to the input field and then onclick store the value as the title for the area box
    }

    return (
        <>
            <h2>I am an AreaBox</h2>
            <AddItemBox 
                value={inputValue}
                type="to do item"
            />
        </>
    )
}
