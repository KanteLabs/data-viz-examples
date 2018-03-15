import React from 'react';

const FilterGameTypes = (props) => {

    return(
        <div>
            <label htmlFor="game-type">Season Type: </label>
            <select name="game-type" id="game-type" onChange={(e)=>props.passFilterProp(e)}>
                <option value="regular-season">Regular Season</option>
                <option value="playoffs">Playoffs</option>
            </select>
        </div>
    )
}

export default FilterGameTypes;