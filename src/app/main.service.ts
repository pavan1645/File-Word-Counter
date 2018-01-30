import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MainService {
	private apiUrl = '/api/';

	constructor(private http: Http) {
	}

	getWords(count){
		return this.http.get(this.apiUrl+count)
		.map(res => res.json());
	}

}
