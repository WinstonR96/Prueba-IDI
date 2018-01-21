<?php 

class Monitor extends CI_Controller{

    public function listar(){
        $this->load->model('monitormodel');
        $data = $this->monitormodel->listar();
        echo json_encode(
            array("status" => true,
            "data" => $data
            )
        );
    }

    public function monitores_combo(){
        $this->load->model('monitormodel');
        $data = $this->monitormodel->monitores_combo();
        echo json_encode(
            array("status" => true,
            "data" => $data
            )
        );
    }

    public function crear(){
       $data = $this->input->post();
       $this->load->model('monitormodel');
       $datos = $this->monitormodel->crear($data);
       if($datos){
           echo json_encode(
               array(
                   "status" => true,
                   "Insertado" => $data,
                   "Mensaje" => "Correcto"
               )
            );
       }else{
           echo json_encode(
               array(
                   "status" => false,
                   "Insertado" => $data,
                   "Mensaje" => "Error"
               )
            );
       }
    }

    public function actualizar(){
       $data = $this->input->post();
       $this->load->model('monitormodel');
       $datos = $this->monitormodel->actualizar($data);
       if($datos){
           echo json_encode(
                array(
                    "status" => true,
                    "Insertado" => $data,
                    "Mensaje" => "Correcto"
                )
            );
        }else{
            echo json_encode(
                array(
                    "status" => false,
                    "Insertado" => $data,
                    "Mensaje" => "Error"
                )
            );
        }
    }

    public function eliminar(){
        $data = $this->input->post();
        $parse = json_decode($data["seleccionados"], true);
        $this->load->model('monitormodel');
        $datos = $this->monitormodel->eliminar($parse);
        if($datos){
            echo json_encode(
                array(
                    "status" => true,
                    "Insertado" => $data,
                    "Mensaje" => "Correcto"
                )
            );
        }else{
            echo json_encode(
                array(
                    "status" => false,
                    "Insertado" => $data,
                    "Mensaje" => "Error"
                )
            );
        }
    }
}