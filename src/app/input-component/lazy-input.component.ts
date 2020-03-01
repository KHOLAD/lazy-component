import {Component, Input, NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-lazy-input',
  template: `
    <mat-form-field class="input-container">
      <mat-label>{{ placeholder ? placeholder : 'Placeholder' }}</mat-label>
      <input [formControl]="control" matInput placeholder="Ex. Pizza">
    </mat-form-field>
  `,
  styleUrls: ['./lazy-input.component.styl']
})
export class LazyInputComponent {
  @Input() placeholder: string;
  control = new FormControl();
}

@NgModule({
  declarations: [LazyInputComponent],
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
class InputComponentModule {}
