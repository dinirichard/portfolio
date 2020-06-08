import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactViewModel } from '../contact/contact.component';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) { }

  postContact(feedback: ContactViewModel): Observable<any> {
    return this.http.post(this.BASE_URL, feedback);
  }
}
