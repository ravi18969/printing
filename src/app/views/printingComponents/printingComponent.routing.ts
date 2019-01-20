import { Routes } from '@angular/router';
import { JobComponent } from './job/job.component';
import { PaperSelectionComponent } from './paper-selection/paper-selection.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { EditJobsComponent } from './edit-jobs/edit-jobs.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from '../../shared/services/auth/auth.guard';


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
    path: '',
    children: [{
      path: 'select-papers',
      canActivateChild:[AuthGuard],
      component: PaperSelectionComponent,
      data: { title: 'Create Job', breadcrumb: 'BLANK' }
    }]
    // path: 'select-papers',    
    // component: PaperSelectionComponent,
    // data: { title: 'Select Papers', breadcrumb: 'BLANK' }
  },
  {
    path: 'fabrication',
    component: FabricationComponent,
    data: { title: 'Fabrication', breadcrumb: 'BLANK' }
  },
  {
    path: 'edit-job',
    component: EditJobsComponent,
    data: { title: 'Edit', breadcrumb: 'BLANK' }
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    data: { title: 'Fabrication', breadcrumb: 'BLANK' }
  },
];