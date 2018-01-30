import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HttpModule } from "@angular/http";
import { MainService } from "./main.service";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
	  ],
	  imports: [HttpModule],
	  providers: [MainService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
