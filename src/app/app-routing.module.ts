import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CrocheronComponent } from './component/ux/crocheron/crocheron.component';
import { UXComponent } from './component/ux/ux.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'ux', component: UXComponent },
	{ path: 'ux/crocheron', component: CrocheronComponent },


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
