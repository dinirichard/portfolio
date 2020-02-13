import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: ContactViewModel = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private apiPortService: ApiService) { }

  ngOnInit() {
  }

  sendFeedback(): void {
    console.log('clicked');
    this.apiPortService.postContact(this.model).subscribe(
      response => {
        location.reload();
      },
      error => {
        alert('An error has occured while sending feedback');
      }
    );
  }

}

export interface ContactViewModel {
  name: string;
  email: string;
  message: string;
}
