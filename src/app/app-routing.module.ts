import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import{UsuarioComponent} from './usuario/usuario.component';
import{NavBarComponent} from './nav-bar/nav-bar.component';
/* Para encontrar o nome dos componentes, procure no typescript do component */



const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'usuario', component: UsuarioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
