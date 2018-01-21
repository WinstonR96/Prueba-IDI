Ext.define('CrudExt.controller.FormularioMonitorias', {
    extend: 'Ext.app.Controller',
    views: ['panel.FormularioMonitorias'],
    init: function () {
        var me = this;
        var id = "";
        this.control({
            'monitoriacrud': {
                beforerender: function (ventana) {
                    if (ventana.initialConfig.Monitorias) {
                        var panel = ventana.down();
                        var Monitorias = ventana.initialConfig.Monitorias;
                        panel.down("[name=nombre_materia]").setValue(Monitorias.nombre_materia);
                        panel.down("[name=monitor_asignado]").setValue(Monitorias.nombre_monitor);
                        panel.down("[name=salon]").setValue(Monitorias.salon);
                        id = Monitorias.id;
                    }
                    console.log("renderizando");
                }
            },



            'monitoriacrud button[action=save]': {
                click: function (btn, e, eOpts) {
                    var panel = btn.up().up(),
                        asignatura = panel.down("[name=nombre_materia]").getValue(),
                        monitor = panel.down("[name=monitor_asignado]").getValue(),
                        salon = panel.down("[name=salon]").getValue();
                    if (asignatura == "" || salon == "") {
                        Ext.Msg.alert("Advertencia", "Rellene campo vacios");
                    } else {



                        var uri = 'http://localhost/prueba_idi/backend/index.php/monitorias/crear';
                        var data = {
                            nombre_materia: asignatura,
                            monitor_asignado: monitor,
                            salon: salon
                        }

                        if (id) {
                            data["id"] = id;
                            uri = 'http://localhost/prueba_idi/backend/index.php/monitorias/actualizar';
                        }


                        Ext.Ajax.request({
                            url: uri,
                            params: data,
                            method: 'POST',
                            success: function (response, request) {
                                console.log(response)
                                if (response.status) {
                                    panel.close();
                                    panel.grilla.getStore().reload()
                                } else {

                                }
                            },
                            failure: function (response, request) {

                            }
                        });
                        id = "";
                        panel.close();
                        panel.grilla.getStore().reload()
                    }
                }
            }
        },
        );
    }
});
