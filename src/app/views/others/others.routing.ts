import { Routes } from '@angular/router';

import { AppBlankComponent } from './app-blank/app-blank.component';
import { CreateRequirementComponent } from './create-requirement/create-requirement.component'


export const OthersRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: AppBlankComponent,
      data: { title: 'Blank', breadcrumb: 'BLANK' }
    }]
  },
  {
    path: 'requirement',
    component: CreateRequirementComponent,
    data: { title: 'create', breadcrumb: 'BLANK' }
  },
];