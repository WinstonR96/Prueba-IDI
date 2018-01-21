<?php 

class MonitorModel extends CI_Model{

    function __construct(){
        $this->load->database();
        parent::__construct();
    }

    public function listar(){
        $this->db->where('estado = 1');
        $query = $this->db->get('monitores');
        return $query->result_array();
    }

    public function crear($data){
        return $this->db->insert('monitores',$data);
    }
 
    public function eliminar($data){
        foreach($data as $value){
            $this->db->where('id', $value['id']);
            $this->db->update('monitores', array('estado'=> -1));
        }
    }
 
    public function actualizar($data){
        $this->db->where('id', $data['id']);
        $this->db->update('monitores', $data);
    }

    public function monitores_combo(){
        return $this->db->query("SELECT id,CONCAT(nombres,' ', apellidos) AS monitor FROM monitores WHERE estado = 1;")->result_array();
    }
}