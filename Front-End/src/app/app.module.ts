import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './contato/contato.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AdmnavbarComponent } from './admnavbar/admnavbar.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LojaComponent,
    SobreNosComponent,
    CadastroComponent,
    LoginComponent,
    ContatoComponent,
    NavbarComponent,
    RodapeComponent,

    CategoriaComponent,

    AdmnavbarComponent,

    UsernavbarComponent,

    ProdutoComponent,

    CategoriaEditComponent,

    CategoriaDeleteComponent,

    ProdutoEditComponent,

    ProdutoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
