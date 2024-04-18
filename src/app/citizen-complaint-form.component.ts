import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import {
  CitizenComplaintRecord,
  citizenComplaintDefaultValue,
  CitizenComplaintMetadata,
} from './citizen-complaint.model';
import { CommonModule } from '@angular/common';
import ComplaintService from './services/complaint.service';

@Component({
  selector: 'app-citizen-complaint-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DropdownModule
  ],
  template: `
    <form [formGroup]="citizenForm">
      <div *ngFor="let item of citizenComplaintMetadata.fields">
        <p-dropdown
          [formControlName]="item.name"
          [name]="item.name"
          *ngIf="item.type == 'dropdown' && !item.hidden"
          [options]="item.dropdownOptions"
        ></p-dropdown>
        <input
          [formControlName]="item.name"
          *ngIf="item.type == 'string' && !item.hidden"
          type="text"
        />
      </div>
      <button (click)="onSubmit()" [disabled]="citizenForm.invalid" type="submit">Submit</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenComplaintFormComponent {
  readonly model: CitizenComplaintRecord = citizenComplaintDefaultValue;
  readonly citizenComplaintMetadata = CitizenComplaintMetadata;

  citizenForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _complaintService: ComplaintService,
  ) {
    this.citizenForm = this._formBuilder.group({});
    this.citizenComplaintMetadata.fields.forEach((field) => {
      this.citizenForm.addControl(
        field.name,
        new FormControl(this.model[field.name], field.required ? Validators.required : []),
      );
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.citizenForm.value);
    this._complaintService.add(this.citizenForm.value).subscribe((value) => {
      console.log("created!");
    })
  }
}
