import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildUser } from '../ChildUser';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Output() childUsersEmitter = new EventEmitter<ChildUser[]>();
  @Input() users: any;

  childUsers: ChildUser[] = [
    { id: 1, FirstName: 'Vaja', LastName: 'Bagashvili', DateOfBirth: '2017-01-01', PhoneNumber: 855787312, Email: 'vaja@example.com' },
    { id: 2, FirstName: 'Nino', LastName: 'Kapanadze', DateOfBirth: '2002-02-02', PhoneNumber: 987654321, Email: 'nino@example.com' }
  ];

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      Id: new FormControl(null, Validators.required),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      DateOfBirth: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  emitChildUsers() {
    this.childUsersEmitter.emit(this.childUsers);
  }

  addUser() {
    if (this.userForm.valid) {
      this.childUsers.push(this.userForm.value);
      this.userForm.reset();
    }
  }
  
}
