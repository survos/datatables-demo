let columns = [
    {title: '', defaultContent: ''}, // select checkbox will be created here.
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
            return `<a target="_blank" href=${url} class="btn btn-sm btn-primary" href='#'>Show</a>`;
        }
    }
];


$('#dynamic_table').DataTable( {
    rowId: 'id',
    ordering: false, 
    searching: false, // because it's dynamic
    // deferRender: true,
    displayLength: 50,
    scrollY:        300,
    scrollX:        200,
    scrollCollapse: true,
    // paging:         false,
    fixedColumns:   {
        leftColumns: 2
    },
    columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0
    } ],
    select: {
        style:    'multi',
        selector: 'td:first-child'
    },
    buttons: [
        'copy', 'pdf',
        {text: 'Send (selected)'}
    ],
    // dom: 'Bfrtip',
    dom: 'Bfti',
    scroller: {
        loadingIndicator: true
    },
    stateSave: true,

    serverSide: true,
    ajax: function ( data, callback, settings ) {
        // console.log(data.start, data.length, data, callback, settings);

        var out = [];

        for ( var i=data.start, ien=data.start+data.length ; i<ien ; i++ ) {
            out.push( {id:  i, email: "t" + i+'.gmail.com', name: 'bob jane sam' + (i * i) } );
        }
        setTimeout( function () {
            callback( {
                draw: data.draw,
                data: out,
                recordsTotal: 1000,
                recordsFiltered: 1000
            } );
        }, 10 );
    },
    columns: columns,
});
