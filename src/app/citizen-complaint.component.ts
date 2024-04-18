import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CitizenComplaintFormComponent } from './citizen-complaint-form.component';

@Component({
  selector: 'app-citizen-complaint',
  standalone: true,
  imports: [CitizenComplaintFormComponent],
  template: `
    <app-citizen-complaint-form />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenComplaintComponent {}
