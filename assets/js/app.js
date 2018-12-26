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

// require('popper');
// require('bootstrap-scss');
require('bootstrap');

import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';

$('#example').DataTable({

});


let columns = [
    {title: 'ID', data: "id"},
    {title: "Email", data: "email"},
    {title: "Name", data: "name"},
    {
        title: 'Send',
//            data: "name",
        render: function( data, type, row, meta ) {
            // console.log(data, type, row, meta);
            return `<i class="fa fa-envelope">Send</i>`;
        }
    },
    {
        title: 'showBtn',
        render: function( data, type, row, meta ) {
            // console.log(data, type, row, meta);
            let url = '#';
            return `<a target="_blank" href=${url} class="btn btn-sm btn-danger" href='#'>Show</a>`;
        }
    }
];


$('#user_table').DataTable( {
    rowId: 'id',
    ordering: true,
    searching: true,
    deferRender: true,
    displayLength: 10,
    scrollY: 400,
    select: true,
    buttons: [
        'copy', 'pdf', {text: 'test button'}
    ],
    dom: 'Bfrtip',
    // dom: 'iBft',
    scroller: {
        loadingIndicator: true
    },
    stateSave: true,

    serverSide: true,
    ajax: function ( data, callback, settings ) {
        console.log(data.start, data.length, data, callback, settings);

        var out = [];

        for ( var i=data.start, ien=data.start+data.length ; i<ien ; i++ ) {
            out.push( {id:  i, email: "t" + i+'.gmail.com', name: 'bob jane sam' + (i * i) } );
        }
        setTimeout( function () {
            callback( {
                draw: data.draw,
                data: out,
                recordsTotal: 5000000,
                recordsFiltered: 5000000
            } );
        }, 50 );
    },
    columns: columns,
});


