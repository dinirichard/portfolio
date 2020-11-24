import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactViewModel } from '../contact/contact.component';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { transition, trigger, useAnimation } from '@angular/animations';
import { progressBar } from '../animations';
import { NgwWowService } from 'ngx-wow';
import { NavigationEnd, Router } from '@angular/router';



@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  animations: [
    trigger('ProgressBarFill', [
      transition(
        '* => *',
        useAnimation(progressBar, {
          params: {
            duration: 1,
            timingFunction: 'ease in'
          },
        })
      )
    ])
  ]
})
export class SecondComponent implements OnInit {

  @ViewChild('skillz') skillzElement: ElementRef;


  skills = [
    {
      skill: 'HTML',
      amount: '90%'
    },
    {
      skill: 'SCSS',
      amount: '70%'
    },
    {
      skill: 'Java',
      amount: '50%'
    },
    {
      skill: 'Angular',
      amount: '80%'
    },
    {
      skill: 'Nest.Js',
      amount: '80%'
    },
    { skill: 'Typescript', amount: '90%' },
    { skill: 'Adobe XD', amount: '35%' },
    { skill: 'Azure/DevOps', amount: '40%' },
  ];

  model: FormGroup;

  constructor(private apiPortService: ApiService, private fb: FormBuilder, private router: Router, private wowService: NgwWowService) {
    this.router.events
      // .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        // Reload WoW animations when done navigating to page,
        // but you are free to call it whenever/wherever you like
        this.wowService.init();
      });
  }

  ngOnInit(): void {
    this.model = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      message: this.fb.control(''),
    });
    // console.log(this.skillzElement.nativeElement);
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
