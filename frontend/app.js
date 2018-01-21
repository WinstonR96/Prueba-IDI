Ext.Loader.setConfig(
    {
        enabled: true
    }
);

Ext.application({

    name: 'CrudExt',
    appFolder: 'app',
    controllers: ['Main', 'FormularioMonitorias', 'FormularioMonitor'],
    launch: function() {
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            items: [
                Ext.create('CrudExt.view.panel.Grid')
            ]
        });
    }
});
