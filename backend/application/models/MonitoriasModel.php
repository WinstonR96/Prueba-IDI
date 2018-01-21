<?php

class MonitoriasModel extends CI_Model{

    function __construct(){
        $this->load->database();
        parent::__construct();
    }

    public function listar(){
        $this->db->where('estado = 1');
        $query = $this->db->get('monitorias');
        return $query->result_array();
    }

    public function listar_dos(){
        return $this->db->query("SELECT mta.id, mta.nombre_materia, mta.monitor_asignado, mta.fecha, mta.salon, mta.estado, CONCAT(mtr.nombres, ' ',mtr.apellidos) AS nombre_monitor FROM monitorias as mta, monitores as mtr WHERE mta.monitor_asignado = mtr.id AND mta.estado = 1;")->result_array();
        return $query->result_array();
    }

    public function crear($data){
        return $this->db->insert('monitorias',$data);
    }
 
    public function eliminar($data){
        foreach($data as $value){
            $this->db->where('id', $value['id']);
            $this->db->update('monitorias', array('estado'=> -1));
        }
    }
 
    public function actualizar($data){
        $this->db->where('id', $data['id']);
        $this->db->update('monitorias', $data);
    }

}



?>