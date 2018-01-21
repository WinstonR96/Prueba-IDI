Ext.define('extjs.model.monitores',
{
    extend : 'Ext.data.Model',
    idProperty:'Id',
    fields: [
        { name: 'id', type: 'int', defaultValue: 0 },
        { name: 'cedula', type: 'int', defaultValue: 0 },
        { name: 'nombre', type: 'string' },
        { name: 'apellidos', type: 'string' },
        { name: 'area', type: 'date' },
        { name: 'semestre', type: 'int', defaultValue: 0 },
        { name: 'descripcion', type: 'string' }
    ],
    validations : [{
        type : 'presence',
        field : 'nombre'
    } ],
    proxy :
    {
        type : 'ajax',
        reader :
        {
        root:'data',
            type : 'json'
        },
        api :
        {
            read : '/ExampleService.svc/students/',
            create : '/ExampleService.svc/createstudent/',
            update : '/ExampleService.svc/updatestudent/',
            destroy : '/ExampleService.svc/deletestudent/'
        },
        actionMethods :
        {
            destroy : 'POST',
            read : 'GET',
            create : 'POST',
            update : 'POST'
        }

    }
})
