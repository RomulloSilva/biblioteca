import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*PASSO 01 DAS ROTAS  */
import {HomeComponent} from './home/home.component';
import{UsuarioComponent} from './usuario/usuario.component';
import{BuscaComponent} from './busca/busca.component';
/* Para encontrar o nome dos componentes, procure no typescript do component */

/*PASSO 02 DAS ROTAS  */

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},/*a rota tem formato json, ou seja atributo e valor */
{path: 'home', component: HomeComponent},
{path: 'usuario', component: UsuarioComponent},
{path: 'busca', component: BuscaComponent}
/*Template = {path: 'valor', component: 'valor'} 'valor' = nome do componente que a rota leva*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
