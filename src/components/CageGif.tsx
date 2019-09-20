import React from 'react';
import {ICage} from '../react-app-env';

const CageGif: React.FC<ICage> = ({cageGif}) => {

    return (
        <div>
            <img src={cageGif}></img>
        </div>
    )
}

export default CageGif;
