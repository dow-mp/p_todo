import { AreaBox } from './AreaBox'

export function Areas({display}) {
    return (
        <div className="boxes">
            {display ? <AreaBox /> : <p>Add an area to track to dos</p>}
        </div>
    )
}