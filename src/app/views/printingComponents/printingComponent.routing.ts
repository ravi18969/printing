import { Routes } from '@angular/router';
import { JobComponent } from './job/job.component';
import { PaperSelectionComponent } from './paper-selection/paper-selection.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { EditJobsComponent } from './edit-jobs/edit-jobs.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from '../../shared/services/auth/auth.guard';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { UsersComponent } from './users/users.component';


export const PrintingRoutes: Routes = [
  {
    path: 'create-job',
    children: [{
      path: '',
      component: JobComponent,
      data: { title: 'New Job', breadcrumb: 'BLANK' }
    }]
  },
  {
    path: 'list-users',
    component: UsersComponent,
    data: { title: 'List Users', breadcrumb: 'BLANK' }
  },
  // {
  //   path: 'UsersComponent',
  //   children: [{
  //     path: 'select-papers',
  //     canActivateChild:[AuthGuard],
  //     component: PaperSelectionComponent,
  //     data: { title: 'Create Job', breadcrumb: 'BLANK' }
  //   }]
  //   // path: 'select-papers',    
  //   // component: PaperSelectionComponent,
  //   // data: { title: 'Select Papers', breadcrumb: 'BLANK' }
  // },
  {
    path: 'fabrication',
    component: FabricationComponent,
    data: { title: 'Fabrication', breadcrumb: 'BLANK' }
  },
  {
    path: 'edit-job',
    component: EditJobsComponent,
    data: { title: 'Edit Job', breadcrumb: 'BLANK' }
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    data: { title: 'Inventory', breadcrumb: 'BLANK' }
  },
  {
    path: 'list-jobs',
    component: ListJobsComponent,
    data: { title: 'List Jobs', breadcrumb: 'BLANK' }
  },
];