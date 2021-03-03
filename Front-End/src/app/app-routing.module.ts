import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LojaComponent } from './loja/loja.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'loja', component: LojaComponent},
  
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},

  {path: 'categoria', component: CategoriaComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
