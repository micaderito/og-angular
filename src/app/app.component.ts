import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CitizenComplaintComponent } from './citizen-complaint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CitizenComplaintComponent],
  template: `
    <app-citizen-complaint />
  `,
})
export class AppComponent {}
