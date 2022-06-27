export const ToDoBox = (props) => {
    return (
        <div className="list">
            <ul>
                {props.list.map((item) => {
                    return (
                        <li key={item.item_id}>
                            <p>To Do: {item.name}</p>
                            <p>Priority: {item.priority}</p>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
