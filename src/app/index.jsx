import React from 'react';

import {AppContext, AppContextProvider} from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import {UI} from './UI';


// assets
import '../../src/global.scss';

const App = () => {
    return (
        //value={initialState}
        <AppContextProvider>  
            <UI/>
        </AppContextProvider>
    );
}

export default App;

