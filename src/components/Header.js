import { AddItemBox } from "./AddItemBox";
import { useState } from 'react';

export const Header = ({ area, onSubmit, onChange, onClick }) => {

    return (
        <>
            <h1>{area}</h1>
            <AddItemBox
                area={area}
                onSubmit={onSubmit}
                onChange={onChange}
                onClick={onClick}
                type="area"
            />
        </>
    )
}