import { Routes } from '@angular/router';

import { AppBlankComponent } from './app-blank/app-blank.component';
// import { CreateRequirementComponent } from './create-requirement/create-requirement.component'
// import { MakePapersComponent } from './make-papers/make-papers.component';
// import { FabricationComponent } from './fabrication/fabrication.component';

export const OthersRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: AppBlankComponent,
      data: { title: 'Dashboard', breadcrumb: 'BLANK' }
    }]
  },
  // {
  //   path: 'requirement',
  //   component: CreateRequirementComponent,
  //   data: { title: 'create', breadcrumb: 'BLANK' }
  // },
  // {
  //   path: 'making-papers',
  //   component: MakePapersComponent,
  //   data: { title: 'create', breadcrumb: 'BLANK' }
  // },
  // {
  //   path: 'edit-job',
  //   component: EditJobComponent,
  //   data: { title: 'create', breadcrumb: 'BLANK' }
  // },
  // {
  //   path: 'fabricationProcess',
  //   component: FabricationComponent,
  //   data: { title: 'Fabrication', breadcrumb: 'BLANK' }
  // },
];