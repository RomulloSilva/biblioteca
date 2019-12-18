/*Importações do framework Angula */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';/*PARTE 01 DO WEBSERVICE importa a biblioteca http */
import {FormsModule} from '@angular/forms' /* Aqui fazemos a importação do forms para podermos usar o ngModule para ifomar que no iput de busca vale um Id do objeto*/


/*Aqui fica as importações dos componentes, ou seja, são importações diretas do nosso projeto*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BuscaComponent } from './busca/busca.component';



/*Aqui ficam declarados os componentes */
@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavBarComponent,
    HomeComponent,
    UsuarioComponent,
    RodapeComponent,
    BuscaComponent
  ],
  /*Aqui ficam as importações das bibliotecas */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, /*PARTE 01.1 DO WEBSERVICE serve para concluir importação */
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*Para remover um componente
1° Remover a pasta onde o componente esta.
2° Remover a sua importação no app.module.ts
3° Remover a declaração do componente */