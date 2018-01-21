Ext.define('CrudExt.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['panel.Grid', 'panel.FormularioMonitor', 'panel.FormularioMonitorias'],
    init: function () {
        var me = this;
		var SelectionRow = [];
		var RowSelection = [];
        this.control({
            'usuariogrid [alias=gridMonitorias]': {
                render: function (grilla) {
                    console.log(grilla)
                    //me.GrillaMonitores = grilla.view.up().up().down("[alias=gridMonitores]");
                },itemdblclick: function (grid, record) {
                    console.log(record.data);
                    Ext.create('CrudExt.view.panel.FormularioMonitorias', {
                        grilla: grid,
                        title: 'Actualizar Monitorias',
                        Monitorias: record.data
                    })
				},
				selectionchange: function(grid, seleccionado){
					var grilla = grid.view.up().up();
					console.log(grilla);
					botoneditar = grilla.down("[name=editmonitoria]");
					botoneliminar = grilla.down("[name=deletemonitoria]");
					for(var key in seleccionado){
						RowSelection[key] = seleccionado[key].data;
					}

					if(seleccionado.length != 0){
						botoneditar.setDisabled(false);
						botoneliminar.setDisabled(false);
					}else{
						botoneditar.setDisabled(true);
						botoneliminar.setDisabled(true);
					}
				}
            },
            'usuariogrid [alias=gridMonitores]': {
                render: function (grilla) {
                    console.log(grilla)
                    //me.GrillaMonitores = grilla.view.up().up().down("[alias=gridMonitores]");
                },
                itemdblclick: function(grid, record){
					console.log(record.data);
					Ext.create('CrudExt.view.panel.FormularioMonitor',{
						grilla: grid,
						title: 'Actualizar monitor',
						Monitor: record.data
					})				
				},
				selectionchange: function (grid, seleccionados) {
					var grilla = grid.view.up().up();
					var monitorias = grid.view.up().up().down("[alias=gridMonitorias]");
					console.log(monitorias.store)
				
					bottoneditar = grilla.down("[name=editemonitor]");
					bottoneliminar = grilla.down("[name=deletemonitor]");
					for(var key in seleccionados){
						SelectionRow[key] = seleccionados[key].data;
					}
					if(seleccionados.length != 0){
						bottoneditar.setDisabled(false);
						bottoneliminar.setDisabled(false);
						monitorias.getStore().filterBy(function(rec){
							return rec.get("monitor_asignado") == seleccionados[0].data.id;
						});
					}else{
						bottoneditar.setDisabled(true);
						bottoneliminar.setDisabled(true);
						monitorias.getStore().reload()
					}
				}
			},
			'usuariogrid button[action=addemonitor]': {
                click: function(btn){
					var grilla = btn.up().up();
					var obj = [];
					obj['id'] = "";
					Ext.create('CrudExt.view.panel.FormularioMonitor',{
						grilla: grilla,
						Monitor: obj 
					})
				}
			},
			'usuariogrid button[action=deletemonitor]': {
                click: function(btn){
					var grilla = btn.up().up();
					var data = {
						seleccionados: JSON.stringify(SelectionRow)
					}
					Ext.Ajax.request({
                        url: 'http://localhost/prueba_idi/backend/index.php/monitor/eliminar',
                        params: data,
                        method: 'POST',
                        success: function (response, request) {
                            console.log(response)
                            if (response.status) {
								grilla.getStore().reload();
                            } else {
                                
                            } 
                        },
                        failure: function (response, request) {
                           
                        }
                    });
				}
			},

			'usuariogrid button[action=addmonitoria]':{
				click: function(btn){
                    var grilla = btn.up().up();
                    console.log("Creando");
					var obj = [];
					obj['id'] = "";
					Ext.create('CrudExt.view.panel.FormularioMonitorias',{
						grilla: grilla,
						Monitor: obj 
					})
				}
			},

			'usuariogrid button[action=deletemonitoria]':{
                click: function(btn){
					var grilla = btn.up().up();
					var data = {
						seleccionados: JSON.stringify(RowSelection)
					}
					Ext.Ajax.request({
                        url: 'http://localhost/prueba_idi/backend/index.php/monitorias/eliminar',
                        params: data,
                        method: 'POST',
                        success: function (response, request) {
                            console.log(response)
                            if (response.status) {
								//Extidi.Msj.info(respuesta.Mensaje);
								grilla.getStore().reload();
                            } else {
                                //Extidi.Msj.error(respuesta.Mensaje);
                            } 
                        },
                        failure: function (response, request) {
                           // Extidi.Msj.error("Error al solicitar datos.");
                        }
                    });
				}
			},

			'usuariogrid button[action=editmonitoria]':{
				click: function(btn){
					var grilla = btn.up().up();
					if(RowSelection.length == 1){
						Ext.create("CrudExt.view.panel.FormularioMonitorias" , {
							grilla: grilla,
							title: 'Modificar monitoria',
							Monitorias: RowSelection[0]
						})
					}else{
						Ext.Msg.alert("Error", "No se pueden editar dos items al mismo tiempo");
					}
				}
			},

			
			'usuariogrid button[action=editemonitor]': {
				click: function(btn){
					var grilla = btn.up().up();
					console.log(SelectionRow.length);
					if(SelectionRow.length == 1){
						Ext.create('CrudExt.view.panel.FormularioMonitor',{
							grilla: grilla,
							title: 'Modificar monitor',
							Monitor: SelectionRow[0]
						})
					}else{
						Ext.Msg.alert("Error", "No se pueden editar dos items al tiempo");
						
					}
						
				}
			},

			
			
		},
	);
	}
});
