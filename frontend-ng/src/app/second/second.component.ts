import { Component, OnInit } from '@angular/core';
import { ContactViewModel } from '../contact/contact.component';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {


  skills = [
    {
      skill: 'HTML',
      amount: '50%'
    },
    {
      skill: 'CSS',
      amount: '50%'
    },
    {
      skill: 'Java',
      amount: '50%'
    },
    {
      skill: 'Angular',
      amount: '50%'
    },
    { skill: 'Typescript', amount: '90%' },
    { skill: 'Adobe XD', amount: '50%' },
  ];

  model: FormGroup;

  constructor(private apiPortService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.model = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      message: this.fb.control(''),
    });
  }

  sendFeedback(): void {
    console.log('clicked');
    console.log(this.model.getRawValue());
    this.apiPortService.postContact(this.model.getRawValue() as ContactViewModel).subscribe(
      response => {
        // location.reload();
        console.log(this.model.getRawValue);
      },
      error => {
        alert('An error has occured while sending feedback');
      }
    );
  }

  toNoteIt() {
    window.open('https://notebookpwa.z16.web.core.windows.net/', '_blank');
  }

}
