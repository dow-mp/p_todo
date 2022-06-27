import { AddItemBox } from "./AddItemBox";
import { ToDoBox } from './ToDoBox'
import {toDoList} from '../data';

export function Boxes() {
    return (
        <div className="boxes">
            <ToDoBox list={toDoList}/>
            <AddItemBox />
        </div>
    )
}