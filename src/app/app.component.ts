import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './Users';
import { ParentUser } from './ParentUser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nika_Makharashvili';

  users: Users[]=[{
    fisrtname: "nika",
    lastname: "maxarashvili",
    age: 19,
  },
  {
    fisrtname: "nikoloz",
    lastname: "razmadze",
    age: 18,
  },
  {
    fisrtname: "Gio",
    lastname: "Burduladze",
    age: 22,
  },
  {
    fisrtname: "sali",
    lastname: "maxarashvili",
    age: 25,
  },
  {
    fisrtname: "Nikusha",
    lastname: "saladze",
    age: 17,
  } 
  ];

  parentUsers: ParentUser[] = [];
}
