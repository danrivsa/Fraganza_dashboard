import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {SelectCompanyTypeComponent} from './components/login/select-company-type/select-company-type.component';
import {SelectProducerCompanyComponent} from './components/login/select-producer-company/select-producer-company.component';
import {SelectProviderCompanyComponent} from './components/login/select-provider-company/select-provider-company.component';
import {InitialTestComponent} from './components/productores/initial-test/initial-test.component';
import {DetalleProvedorComponent} from './components/proveedores/detalle-provedor/detalle-provedor.component';
import { FormulaInicialComponent } from './components/productores/formula-inicial/formula-inicial.component';
import {ContratoComponent} from './components/productores/Compras/contrato/contrato.component';
import {PedidoComponent} from './components/productores/Compras/pedido/pedido.component'
const routes: Routes =
[
  {path:'',component:HomeComponent},
  {path:'select_type',component:SelectCompanyTypeComponent},
  {path:'select_type/producer', component:SelectProducerCompanyComponent},
  {path:'select_type/provider',component:SelectProviderCompanyComponent},
  {path:'i_test_provider/detalle/:id',component:DetalleProvedorComponent},
  {path:'i_test_provider',component:InitialTestComponent},
  {path:'formula_inicial', component:FormulaInicialComponent},
  {path:'compras',component:ContratoComponent},
  {path:'compras/generar_pedido/:id/contrato/:contrato', component:PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
