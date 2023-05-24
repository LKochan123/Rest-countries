import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: ':country', component: CountryDetailComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}