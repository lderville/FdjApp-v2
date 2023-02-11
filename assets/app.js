/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// or, specify which plugins you need:

// start the Stimulus application
import { Alert, Button, Toast, Collapse, Tooltip, Popover } from 'bootstrap'

window.bootstrap = {
    Alert, Button, Collapse, Tooltip, Popover
}

import './react/controllers/items'

import './js/navbar'


// ###--FONT AWESOME--###
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
// ### ------------ ###

// require jQuery normally
const $ = require('jquery');

// create global $ and jQuery variables
global.$ = global.jQuery = $;