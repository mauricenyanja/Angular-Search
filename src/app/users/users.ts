import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class RequestService {
  apikey = environment.apiKey;
  username: string;
  private repo: string;
  constructor(private http: HttpClient) {

  }


  reposLink(reposearch) {


    return this.http.get<JSON[]>(`https://api.github.com/repos/` + reposearch)




  }