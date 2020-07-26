//import model
const model = require('../models/producers.model');
const { async } = require('@angular/core/testing');

class ProducersController
{
    //http methods

    GetProducers = async (req,res)=>
    {
        let db_res = await model.GetProducers();
        res.json(db_res.rows);
    }

    ProveedoresEvIni = async (req,res)=>
    {
        let id_productor = req.params.id;
        let db_res = await model.FiltrarProveedoresEvIni(id_productor);
        res.json(db_res.rows);
    }

    ObtenerCriteriosEvaluacionInicial= async (req,res)=>
    {
        let id_proveedor = req.params.id;
        let db_res = await model.ObtenerCriteriosEvaluacionInicial(id_proveedor);
        res.json(db_res.rows);
    }

    ObtenerEscalaInicialVigente= async (req,res)=>
    {
        let id_productor = req.params.id;
        let db_res = await model.ObtenerEscalaInicialVigente(id_productor);
        res.json(db_res.rows);
    }

    ObtenerEscalaAnualVigente = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.ObtenerEscalaAnualVigente(id_productor);
      res.json(db_res.rows);
    }

    ObtenerUbicacionGeoVigente = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.ObtenerUbicacionGeoVigente(id_productor);
      res.json(db_res.rows);
    }

    ObtenerAltEnvioVigente = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.ObtenerAltEnvioVigente(id_productor);
      res.json(db_res.rows);
    }

    ObtenerPagoGeoVigente = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.ObtenerPagoGeoVigente(id_productor);
      res.json(db_res.rows);
    }

    //Metodos Post

    PostEscalaInicial = async (req,res)=>
    {
      const {id,rango_min,rango_max,rango_aprob} = req.body;
      let db_res = await model.PostEscalaInicial(id,rango_min,rango_max,rango_aprob);
      res.json(db_res.rows);
    }


    PostEscalaAnual = async (req,res)=>
    {
      const {id,rango_min,rango_max,rango_aprob} = req.body;
      let db_res = await model.PostEscalaAnual(id,rango_min,rango_max,rango_aprob);
      res.json(db_res.rows);
    }

    PostUbicacion = async (req,res)=>
    {
      const {id,id_criterio,peso} = req.body;
      let db_res = await model.PostUbicacion(id,id_criterio,peso);
      res.json(db_res.rows);
    }

    PostEnvio = async (req,res)=>
    {
      const {id,id_criterio,peso} = req.body;
      let db_res = await model.PostEnvio(id,id_criterio,peso);
      res.json(db_res.rows);
    }
    PostPago = async (req,res)=>
    {
      const {id,id_criterio,peso} = req.body;
      let db_res = await model.PostPago(id,id_criterio,peso);
      res.json(db_res.rows);
    }

    PostCriterioAnual = async (req,res)=>
    {
      const {id,id_criterio,peso} = req.body;
      let db_res = await model.PostCriterioAnual(id,id_criterio,peso);
      res.json(db_res.rows);
    }
    //Metodos Put para cerrar historicos
    PutEscalaInicialVigente = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.PutEscalaInicialVigencia(id_productor);
      res.json(db_res.rows);
    }

    PutEscalaAnualVigente = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.PutEscalaAnualVigencia(id_productor);
      res.json(db_res.rows);
    }

    CerrarInicial = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.CerrarInicial(id_productor);
      res.json(db_res.rows);
    }
    PutCriteriosAnual = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.PutCriteriosAnual(id_productor);
      res.json(db_res.rows);
    }

    CerrarCriterioAnual= async (req,res)=>
    {
      let id = req.params.id;
      let db_res = await model.CerrarCriterioAnual(id);
      res.json(db_res.rows);
    }

    CerrarAnual= async (req,res)=>
    {
      let id= req.params.id;
      let db_res = await model.CerrarAnual(id);
      res.json(db_res.rows);
    }

    ObtenerCriterioSucces=async (req,res)=>
    {
      let contrato=req.params.contrato;
      let db_res = await model.ObtenerCriterioSucces(contrato);
      res.json(db_res.rows);
    }

    GetContratosPorVencer = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.GetContratosPorVencer(id_productor);
      return res.json(db_res.rows);
    }

<<<<<<< HEAD
    CancelarContrato = async (req,res)=>
    {
      let numero_contrato = req.params.numero_contrato;
      const {descripcion} = req.body;
      let db_res = await model.CancelarContrato(numero_contrato,descripcion);
      return res.json(db_res.rows);
=======
    RenovarContrato = async (req,res)=>
    {
      let id_prod = req.params.id;
      let id_prov = req.body.id_prov;
      let fecha = req.body.fecha;
      console.log(req.body);
      let numero_contrato = req.body.numero_contrato;
      let db_res = await model.RenovarContrato(id_prod,id_prov,numero_contrato,fecha);
      res.json(db_res.rows);
>>>>>>> ae3c4836c400af4392ca4b88dfa5c0539fba6472
    }

    //Métodos modulo de compras
    GetContratosVigentes = async (req,res)=>
    {
      let id_productor = req.params.id;
      let db_res = await model.GetContratosVigentes(id_productor);
      res.json(db_res.rows)
    }

    GetEsenciasContratadas = async (req,res)=>
    {
      let id_proveedor = req.params.id;
      let numero_contrato = req.params.contrato;
      let db_res = await model.GetEsenciasContratadas(id_proveedor,numero_contrato);
      res.json(db_res.rows);
    }


    GetIngredientesContratados = async (req,res)=>
    {
      let id_proveedor = req.params.id;
      let numero_contrato = req.params.contrato;
      let db_res = await model.GetIngredientesContratados(id_proveedor,numero_contrato);
      res.json(db_res.rows);
    }

    metodoPagoContratados = async (req,res)=>
    {
      let id_proveedor = req.params.id;
      let numero_contrato = req.params.contrato;
      let db_res = await model.metodoPagoContratados(id_proveedor,numero_contrato);
      res.json(db_res.rows);
    }

    metodoEnvioContratados = async (req,res)=>
    {
      let id_proveedor = req.params.id;
      let numero_contrato = req.params.contrato;
      let db_res = await model.metodoEnvioContratados(id_proveedor,numero_contrato);
      res.json(db_res.rows);
    }
    ObtenerPedidos = async (req,res)=>
    {
      let id_proveedor = req.params.id;
      let id_productor = req.params.id2;
      let db_res = await model.ObtenerPedidos(id_proveedor,id_productor);
      res.json(db_res.rows);
    }

    generarPedido = async (req,res)=>
    {
      const {id_proveedor,id_productor,numero_contrato,metodo_pago,id_pais,metodo_envio} = req.body;
      let db_res = await model.generarPedido(id_proveedor,id_productor,numero_contrato,metodo_pago,id_pais,metodo_envio);
      res.json(db_res);
    }

    PresentacionesEsenciaPedido = async (req,res)=>
    {
      let numero_contrato = req.params.numero_contrato;
      let db_res = await model.PresentacionesEsenciaPedido(numero_contrato);
      res.json(db_res);
    }

    PresentacionesIgredientesPedido = async (req,res)=>
    {
      let numero_contrato = req.params.numero_contrato;
      let db_res = await model.PresentacionesIgredientesPedido(numero_contrato);
      res.json(db_res);
    }

    PostDetPedido = async (req,res)=>
    {
      const {sku,cantidad} = req.body;
      let db_res = await model.PostDetPedido(sku,cantidad);
      res.json(db_res);
    }

    DescuentoContrato = async (req,res)=>
    {
      let numero_contrato = req.params.contrato;
      let db_res = await model.DescuentoContrato(numero_contrato);
      res.json(db_res.rows);
    }

    GuardarResultado = async (req,res)=>
    {
      console.log(req.body);
        let id_prod = req.params.id_prod;
        let id_prov = req.body.id_prov;
        let resultado = req.body.resultado;
        let tipo= req.body.tipo_eval;
        let db_res = await model.GuardarResultado(id_prod,id_prov,resultado,tipo);
        res.json(db_res.rows);
    }

    GuardarResultadoAnual = async (req,res)=>
    {

        let id_prod = req.params.id_prod;
        let id_prov = req.body.id_prov;
        let resultado = req.body.resultado;
        let db_res = await model.GuardarResultadoAnual(id_prod,id_prov,resultado);
        res.json(db_res.rows);
    }

<<<<<<< HEAD
    DetEnvioPedido = async (req,res)=>
    {
      let id_pedido = req.params.id_pedido;
      let db_res = await model.DetEnvioPedido(id_pedido);
      res.json(db_res.rows);
    }

    PresentacionesIngredientesAdquiridasPedido = async (req,res)=>
    {
      let id_pedido = req.params.id_pedido;
      let db_res = await model.PresentacionesIngredientesAdquiridasPedido(id_pedido);
      res.json(db_res.rows);

    }

    PresentacionesEsenciasAdquiridasPedido = async (req,res)=>
    {
      let id_pedido = req.params.id_pedido;
      let db_res = await model.PresentacionesEsenciasAdquiridasPedido(id_pedido);
      res.json(db_res.rows);

    }


=======
    ObtenerFechaParaRenovacion= async (req,res)=>
    {
      let numero_contrato = req.params.numero_contrato;
      let db_res = await model.ObtenerFechaParaRenovar(numero_contrato);
      res.json(db_res.rows);
    }

>>>>>>> ae3c4836c400af4392ca4b88dfa5c0539fba6472
  }


const controller = new ProducersController(); //create instance
module.exports = controller; //export instance
