Ext.define('CrudExt.view.panel.FormularioMonitorias', {
    extend: 'Ext.window.Window',
    alias: 'widget.monitoriacrud',
    title: 'Asignar Monitoria',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'nombre_materia',
                        fieldLabel: 'Asignatura'
                    },
                    {
                        xtype: 'textfield',
                        name: 'salon',
                        fieldLabel: 'Asignar Salon'
                    },

                    {
                        xtype: 'combo',
                        fieldLabel: 'Monitores',
                        allowBlank: false,
                        displayField: 'monitor',
                        valueField: 'id',
                        name: 'monitor_asignado',
                        editable :false,
                        store: new Ext.data.JsonStore({
                            proxy: {
                                type: 'ajax',
                                url: 'http://localhost/prueba_idi/backend/index.php/monitor/monitores_combo',
                                reader: {
                                    type: 'json',
                                    root: 'data',
                                    idProperty: 'id'
                                }
                            },
                            fields: ['id', 'monitor'],
                            autoLoad: false
                        })
                    }

                ]
            }
        ];

        this.buttons = [
            {
                text: 'Guardar',
                action: 'save'
            },

            {
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});