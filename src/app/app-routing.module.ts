import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Ng7fireComponent } from './ng7fire/ng7fire.component';
import { CoursetroComponent } from './coursetro/coursetro.component';
import { JiaComponent } from './jia/jia.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'coursetro', component: CoursetroComponent },
  { path: 'jia', component: JiaComponent },
  { path: 'shirts', component: ShirtsComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'fire', component: Ng7fireComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
