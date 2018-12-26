/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

require('datatables.net-bs4');

require( 'datatables.net-scroller-bs4' );
require( 'datatables.net-buttons-bs4' );
require( 'datatables.net-select-bs4' );
require( 'datatables.net-fixedcolumns-bs4' );

require('@fortawesome/fontawesome-free/css/all.min.css');
// @todo: use js version of fontawesome
// require('@fortawesome/fontawesome-free/js/all.js');

// require('@fortawesome/fontawesome-free');
// require('@symfony/webpack-encore');

// require('popper');
// require('bootstrap-scss');
require('bootstrap');

import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import 'datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.min.css';
import 'datatables.net-select-bs4/css/select.bootstrap4.min.css';
import 'datatables.net-scroller-bs4/css/scroller.bootstrap4.min.css';

$('#example').DataTable({

});





