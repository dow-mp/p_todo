export const AddItemBox = ({ value, onSubmit, onChange, type, onClick }) => {

    return (
        <form className="addItemBox" onSubmit={onSubmit}>
            <label htmlFor="addItem"></label>
            <input 
                id="addItem"
                name="addItem"
                // this needs to take in a value for the input box to display on the page
                value={value}
                onChange={onChange}
                />
            <button type="submit" >Add { type }</button>
        </form>
    )
}