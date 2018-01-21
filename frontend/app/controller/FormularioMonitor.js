Ext.define('CrudExt.controller.FormularioMonitor', {
    extend: 'Ext.app.Controller',
    views: ['panel.FormularioMonitor'],
    init: function () {
        var me = this;
        var id = "";
        this.control({
            'monitorcrud': {
                beforerender: function (ventana) {
                    if (ventana.initialConfig.Monitor) {
                        var panel = ventana.down();
                        var Monitor = ventana.initialConfig.Monitor;
                        console.log("Monitor: " + Monitor);
                        panel.down("[name=nombre]").setValue(Monitor.nombres);
                        panel.down("[name=apellidos]").setValue(Monitor.apellidos);
                        panel.down("[name=programa_academico]").setValue(Monitor.programa_academico);
                        panel.down("[name=semestre]").setValue(Monitor.semestre);
                        panel.down("[name=cedula]").setValue(Monitor.cedula);
                        panel.down("[name=numero_contacto]").setValue(Monitor.numero_contacto);
                        id = Monitor.id;
                    }
                }
            },



            'monitorcrud button[action=save]': {
                click: function (btn, e, eOpts) {
                    var panel = btn.up().up(),
                        nombre = panel.down("[name=nombre]").getValue(),
                        apellidos = panel.down("[name=apellidos]").getValue(),
                        programa_academico = panel.down("[name=programa_academico]").getValue(),
                        semestre = panel.down("[name=semestre]").getValue(),
                        cedula = panel.down("[name=cedula]").getValue(),
                        numero_contacto = panel.down("[name=numero_contacto]").getValue();
                    console.log(panel)
                    if (nombre == "" || apellidos == "" || programa_academico == "" || semestre == "" || cedula == "" || numero_contacto == "") {
                        Ext.Msg.alert("Advertencia", "Rellene campos vacios");
                    } else {
                        var uri = 'http://localhost/prueba_idi/backend/index.php/monitor/crear';
                        var data = {
                            nombres: nombre,
                            apellidos: apellidos,
                            programa_academico: programa_academico,
                            semestre: semestre,
                            cedula: cedula,
                            numero_contacto: numero_contacto
                        }

                        if (id) {
                            data["id"] = id;
                            uri = 'http://localhost/prueba_idi/backend/index.php/monitor/actualizar';
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
