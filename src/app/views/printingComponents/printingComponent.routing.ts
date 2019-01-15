import { Routes } from '@angular/router';
import { JobComponent } from './job/job.component';
import { PaperSelectionComponent } from './paper-selection/paper-selection.component';
import { FabricationComponent } from './fabrication/fabrication.component';


export const PrintingRoutes: Routes = [
  {
    path: 'create-job',
    children: [{
      path: '',
      component: JobComponent,
      data: { title: 'Create Job', breadcrumb: 'BLANK' }
    }]
  },
  {
    path: 'select-papers',
    component: PaperSelectionComponent,
    data: { title: 'Select Papers', breadcrumb: 'BLANK' }
  },
  {
    path: 'fabrication',
    component: FabricationComponent,
    data: { title: 'create', breadcrumb: 'BLANK' }
  },
//   {
//     path: 'edit-job',
//     component: ,
//     data: { title: 'create', breadcrumb: 'BLANK' }
//   },
//   {
//     path: 'fabricationProcess',
//     component: ,
//     data: { title: 'Fabrication', breadcrumb: 'BLANK' }
//   },
];