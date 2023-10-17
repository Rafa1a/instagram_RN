import React from 'react'
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native';
// import App from './src/App';
import Indice from './src/routes/index'
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig';

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Indice />
    </Provider>
)
AppRegistry.registerComponent(appName, () => Redux);
