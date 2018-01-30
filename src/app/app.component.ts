import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	words = [];
	constructor(private mainService: MainService) { }
	
	ngOnInit() {
		this.words = []
	}
	
	getWords(count){
		document.getElementById("op-table").style.visibility = "visible";
		this.mainService.getWords(count)
		.subscribe(res => {
			this.words = res.body;
		});
	}
}
