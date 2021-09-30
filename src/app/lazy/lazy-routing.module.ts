import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazycompComponent } from './lazycomp/lazycomp.component';

const routes: Routes = [
  {path: 'lazycomp',component: LazycompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
