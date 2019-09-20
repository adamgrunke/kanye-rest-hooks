import React from 'react';
import {IQuote} from '../react-app-env'

const Quote: React.FC<IQuote> = ({quote}) => {

    return(
        <div>
            <p>{quote}</p>
        </div>
    )

}

export default Quote;