Ext.define('CrudExt.view.panel.Grid', {
	extend: 'Ext.form.Panel',
	itemId: 'usuarioGrid',
	xtype: 'usuariogrid',
	alias: 'widget.usuariogrid',
	name: 'panel_creacion',
	width: '100%',
	initComponent: function () {

		var me = this;
		var panel = Ext.create('Ext.grid.Panel', {
			title: 'Monitores',
			alias: 'gridMonitores',
			store: Ext.create('Ext.data.Store', {
				model: Ext.define('Monitor', {
					extend: 'Ext.data.Model',
					fields: [
						{ name: 'id', type: 'string' },
						{ name: 'nombres', type: 'string' },
						{ name: 'apellidos', type: 'string'},
						{ name: 'programa_academico', type: 'string' },
						{ name: 'semestre', type: 'int'},
						{ name: 'cedula', type: 'string' },
						{ name: 'numero_contacto', type: 'int'},
						{ name: 'estado', type: 'int' }
					]
				}),
				proxy: {
					type: 'ajax',
					url: 'http://localhost/prueba_idi/backend/index.php/monitor/listar',
					reader: {
						type: 'json',
						root: 'data'
					}
				},
				autoLoad: true
			}),
			columns: [
				{ text: 'Id', dataIndex: 'id' },
				{ text: 'Nombre', dataIndex: 'nombres' },
				{ text: 'Apellidos', dataIndex: 'apellidos' },
				{ text: 'Programa Academico', dataIndex: 'programa_academico' },
				{ text: 'Semestre', dataIndex: 'semestre' },
				{ text: 'cedula', dataIndex: 'cedula' },
				{ text: 'Informacion de Contacto', dataIndex: 'numero_contacto' },
				//{ text: 'estado', dataIndex: 'estado' }
			],dockedItems:[{
				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						xtype: 'button',
						text: 'Agregar monitor',
						iconCls: 'add',
						action: 'addemonitor'
					},
					{
						text: 'Eliminar monitor',
						iconCls: 'delete',
						action: 'deletemonitor'
					},
					{
						xtype: 'button',
						text: 'Editar monitor',
						iconCls: 'edit',
						action: 'editemonitor',
						name: 'editemonitor',
						disabled: true
					}
				]
			}],
			height: 400,
			width: '100%',
			selType: 'checkboxmodel',

		});


		var panel2 = Ext.create('Ext.grid.Panel', {
			title: 'Monitorias',
			alias: 'gridMonitorias',
			store: Ext.create('Ext.data.Store', {
				model: Ext.define('Monitorias', {
					extend: 'Ext.data.Model',
					fields: [
						{ name: 'id', type: 'string' },
						{ name: 'nombre_materia', type: 'string' },
						{ name: 'monitor_asignado', type: 'int' },
						{ name: 'fecha', type: 'string' },
						{ name: 'salon', type: 'string' },
						{ name: 'estado', type: 'int' },
						{ name: 'nombre_monitor', type: 'string'}
					]
				}),
				proxy: {
					type: 'ajax',
					url: 'http://localhost/prueba_idi/backend/index.php/monitorias/listar_dos',
					reader: {
						type: 'json',
						root: 'data'
					}
				},
				autoLoad: true
			}),
			columns: [
				{ text: 'Id', dataIndex: 'id' },
				{ text: 'Asignatura', dataIndex: 'nombre_materia' },
				//{ text: 'Id Monitor', dataIndex: 'monitor_asignado' },
				{ text: 'Fecha', dataIndex: 'fecha' },
				{ text: 'Salon', dataIndex: 'salon'},
				{ text: 'Nombre Monitor', dataIndex: 'nombre_monitor'}
				//{ text: 'Estado', dataIndex: 'estado' }
			],dockedItems: [{

				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						xtype: 'button',
						text: 'Añadir monitoria',
						iconCls: 'add',
						action: 'addmonitoria'
					},
					{
						text: 'Eliminar monitoria',
						iconCls: 'delete',
						action: 'deletemonitoria'
					},
					{
						xtype: 'button',
						text: 'Editar monitoria',
						iconCls: 'edit',
						action: 'editmonitoria',
						name: 'editmonitoria',
						disabled: true
					}
				]

				}],
			height: 400,
			width: '100%',
			selType: 'checkboxmodel',

		});

		this.items=[panel,panel2];
		me.callParent();
	}

});

