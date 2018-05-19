import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Setting } from './settings/Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
	private settings = new Subject<any>();

  changeSetting(setting: string): void {
  	var newValue = !(localStorage.getItem(setting) == 'true');
  	localStorage.setItem(setting, newValue.toString());
  	this.settings.next(setting);
  }

  getSetting(setting: string): boolean {
  	return localStorage.getItem(setting) == 'true';
  }

  watchStorage(): Observable<any> {
  	return this.settings.asObservable();
  }

}
