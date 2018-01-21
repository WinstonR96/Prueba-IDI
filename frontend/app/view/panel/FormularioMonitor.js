Ext.define('CrudExt.view.panel.FormularioMonitor', {
    extend: 'Ext.window.Window',
    alias: 'widget.monitorcrud',
    title: 'Crear Usuario',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'nombre',
                        fieldLabel: 'Nombres'
                    },
                    {
                        xtype: 'textfield',
                        name : 'apellidos',
                        fieldLabel: 'Apellidos'
                    },
                    {
                        xtype: 'textfield',
                        name : 'programa_academico',
                        fieldLabel: 'Programa Academico'
                    },
                    {
                        xtype: 'textfield',
                        name : 'semestre',
                        fieldLabel: 'Semestre'
                    },
                    {
                        xtype: 'textfield',
                        name : 'cedula',
                        fieldLabel: 'Cedula'
                    },
                    {
                        xtype: 'textfield',
                        name : 'numero_contacto',
                        fieldLabel: 'Numero Contacto'
                    },
                    
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