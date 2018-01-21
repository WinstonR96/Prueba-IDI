Ext.define('extjs.controller.monitor',
{
    extend: 'Ext.app.Controller',
    models: ['extjs.model.monitores'],
    stores: ['extjs.store.monitores'],
    views: ['extjs.view.monitoresGrid'],
    refs: [{
        ref: 'monitoresGrid',
        selector: 'viewport monitoresGrid'
    }],

    init: function () {

        this.control({

            'viewport > monitoresGrid button[itemId=btnCreate]':
            {
                click: this.onCreateClick
            },
            'viewport > monitoresGrid button[itemId=btnLoad]':
            {
                click: this.onLoadClick
            },
            'viewport > monitoresGrid button[itemId=btnSave]':
            {
                click: this.onSaveClick
            },
            'viewport > monitoresGrid button[itemId=btnDelete]':
            {
                click: this.onDeleteClick
            }
        });
    },

    onCreateClick: function () {

        var monitoresGrid = this.getmonitoresGrid();
        var monitoresStore = monitoresGrid.getStore();

        var monitoresModel = Ext.create('extjs.model.monitores');
        monitoresModel.set("cedula", " nueva");
        monitoresModel.set("nombre", " nuevo");
        monitoresModel.set("apellido", "nuevo");
        monitoresModel.set("area", "nueva");
        monitoresModel.set("semestre", " numero");
        monitoresModel.set("descripcion", "comentarios");

        monitoresStore.add(monitoresModel);

        monitoresGrid.editingPlugin.startEdit(monitoresModel, 3);

    },

    onSaveClick: function () {
        var monitoresGrid = this.getmonitoresGrid();
        var monitoresStore = monitoresGrid.getStore();

        //fires create, update and delete request when calling sync and commit changes in the store when autoSync=false
        monitoresStore.sync({
            success: function (batch, eOpts) {
                Ext.Msg.alert('Status', ' cambios guardados.');
            },
            failure: function (batch, eOpts) {
                Ext.Msg.alert('Status', 'hubo un fallo.');
            }
        });
    },
    onLoadClick: function () {
        var monitoresStore = Ext.getStore('extjs.store.monitores');
        studentStore.load();
    },

    onDeleteClick: function () {

        var monitoresGrid = this.getmonitoresGrid();
        var monitoresStore = monitoresGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = monitoresGrid.getSelectionModel().getSelection();

        if (selectedRows.length)
            monitoresStore.remove(selectedRows);
        else
            Ext.Msg.alert('Status', 'Please select at least one record to delete!');
    }
});
