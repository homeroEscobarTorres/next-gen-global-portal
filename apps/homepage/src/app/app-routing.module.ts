import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageModule } from './modules/homepage/homepage.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomepageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
