import { AddItemBox } from "./AddToDoItem";
import { ContentBox } from './ToDoList'
// import { toDoList } from '../data';

export function Boxes() {
    return (
        <div className="boxes">
            {/* <ContentBox list={toDoList}/> */}
            <AddItemBox />
        </div>
    )
}