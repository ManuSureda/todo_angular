import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiURL = 'https://utn-lubnan-api-2.herokuapp.com/api/Incident'
  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }

  add(incident: Incident): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(this.apiURL, incident, httpOptions)
      .toPromise();
  }
}
