import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable,of } from 'rxjs';
import { map,filter,tap, switchMap, delay, debounceTime } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements AfterViewInit {

  @ViewChild('search') search : ElementRef<HTMLInputElement>;
  users : any [];
 
  ngAfterViewInit(){
    const searchObs = fromEvent(this.search.nativeElement, "input")
                      .pipe(
                        debounceTime(1000),
                        filter((e:any)=>e.target.value.length != ""),
                        switchMap((e:any)=>{
                          return ajax(`https://api.github.com/search/users?q=${e.target.value}`)
                        }),
                        map(response => response.response.items)
                      )
    searchObs.subscribe((value:any)=>{
      console.log(value);
      this.users = value;
    })
  }
}
