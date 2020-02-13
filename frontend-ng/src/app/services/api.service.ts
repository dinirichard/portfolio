import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactViewModel } from '../contact/contact.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) { }

  postContact(feedback: ContactViewModel): Observable<any> {
    return this.http.post(this.BASE_URL, feedback);
  }
}
