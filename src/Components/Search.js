import React from 'react';
import "./Search.css";

const SearchBox = (props) => {
    return (
        <>
            <div className="col">
                <input 
                    type="text"
                    value={props.value}
                    onChange={(e) => props.setQuery(e.target.value)}
                    placeholder="Search..." />
                <input 
                    type="submit"
                    value="SEARCH" />
            </div>
        </>
    );
};


export default SearchBox;