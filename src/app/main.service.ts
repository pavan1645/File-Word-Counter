import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MainService {

	constructor(private http: Http) {
	}

	getWords(count){
		var headers = new Headers();
		headers.append('Access-Control-Allow-Origin', '*');
		return this.http.get("https://localhost:3000/api/"+count, {headers: headers})
		.map(res => res.json());
	}

}
