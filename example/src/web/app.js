import {render} from 'react-dom';
import root from './root.jsx';

document.addEventListener('DOMContentLoaded', () => {
    render(root(), document.getElementById('root'));
});