import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {SelectCompanyTypeComponent} from './components/login/select-company-type/select-company-type.component';
import {SelectProducerCompanyComponent} from './components/login/select-producer-company/select-producer-company.component';
import {SelectProviderCompanyComponent} from './components/login/select-provider-company/select-provider-company.component';
import {InitialTestComponent} from './components/productores/initial-test/initial-test.component';
import {DetalleProvedorComponent} from './components/proveedores/detalle-provedor/detalle-provedor.component';
import { FormulaInicialComponent } from './components/productores/formula-inicial/formula-inicial.component';
import { ContratosProvComponent } from './components/proveedores/contratos-prov/contratos-prov.component';
import { EvAnualProvComponent } from './components/proveedores/ev-anual-prov/ev-anual-prov.component';
import { EvaluacionAnualComponent } from './components/proveedores/evaluacion-anual/evaluacion-anual.component';


import {ContratoComponent} from './components/productores/Compras/contrato/contrato.component';
import {DetalleContratoComponent} from './components/productores/Compras/DetalleContrato/DetalleContrato.component';
import { CrearPedidoComponent } from './components/productores/Compras/crear-pedido/crear-pedido.component';
<<<<<<< HEAD
import { DetallePedidoComponent } from './components/productores/Compras/detalle-pedido/detalle-pedido.component';
=======
import { ContratoProduComponent } from './components/productores/contrato-produ/contrato-produ.component';
import {CrearContratoComponent} from './components/productores/crear-contrato/crear-contrato.component';

>>>>>>> a225690d034467bd88417226afe8bd64c97804b3
const routes: Routes =
[
  {path:'',component:HomeComponent},
  {path:'select_type',component:SelectCompanyTypeComponent},
  {path:'select_type/producer', component:SelectProducerCompanyComponent},
  {path:'select_type/provider',component:SelectProviderCompanyComponent},
  {path:'i_test_provider/detalle/:id',component:DetalleProvedorComponent},
  {path:'i_test_provider',component:InitialTestComponent},
  {path:'formula_inicial', component:FormulaInicialComponent},
  {path: 'contrato/provider',component:ContratosProvComponent},
  {path: 'e_anual_prov',component:EvAnualProvComponent},
  {path: 'evaluar_Anual/:id', component:EvaluacionAnualComponent},
  {path:'compras',component:ContratoComponent},
  {path:'compras/contratos/:id_proveedor/detalle/:contrato', component:DetalleContratoComponent},
  {path:'compras/contratos/detalle/:contrato/generar_pedido/:id_proveedor', component: CrearPedidoComponent},
  {path:'compras/generar_pedido/:id/contrato/:contrato', component:CrearPedidoComponent},
  {path:'compras/contratos/:id/detalle/:contrato', component:DetalleContratoComponent},
  {path:'compras/contratos/:id/detalle/:contrato/generar_pedido', component: CrearPedidoComponent},
<<<<<<< HEAD
  {path:'compras/contratos/:id/detalle/:contrato/generar_pedido/id_pedido',component:DetallePedidoComponent}
=======
  {path: 'contrato/producer', component:ContratoProduComponent},
  {path:'crear/contrato/con_proveedor/:id', component:CrearContratoComponent}
>>>>>>> a225690d034467bd88417226afe8bd64c97804b3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
