import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserDTO } from '../models/UserDTO';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private apiService: ApiService) { }

  login(userDTO: UserDTO): Observable<any> {
    return this.apiService.post(environment.backend_url + '/users', userDTO);
}
}
