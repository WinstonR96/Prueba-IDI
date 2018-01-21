<?php 

class Monitorias extends CI_Controller{

    public function listar(){
        $this->load->model('monitoriasmodel');
        $data = $this->monitoriasmodel->listar();
        echo json_encode(
            array("status" => true,
            "data" => $data
            )
        );
    }

    public function listar_dos(){
        $this->load->model('monitoriasmodel');
        $data = $this->monitoriasmodel->listar_dos();
        echo json_encode(
            array("status" => true,
            "data" => $data
            )
        );
    }

    public function crear(){
       $data = $this->input->post();
       $this->load->model('monitoriasmodel');
       $datos = $this->monitoriasmodel->crear($data);
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
       $this->load->model('monitoriasmodel');
       $datos = $this->monitoriasmodel->actualizar($data);
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
        $this->load->model('monitoriasmodel');
        $datos = $this->monitoriasmodel->eliminar($parse);
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