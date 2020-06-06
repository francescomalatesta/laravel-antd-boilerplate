import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

import Welcome from './Welcome'

const App = () => {
    return (
        <Welcome />
    );
};

render(<App />, document.getElementById('app'));
