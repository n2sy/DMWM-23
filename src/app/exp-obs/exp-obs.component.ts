import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrls: ['./exp-obs.component.css'],
})
export class ExpObsComponent {
  myObservable;
  inscription: Subscription;

  ngOnInit() {
    // this.myObservable = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('First package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('Second package');
    //   }, 4000);
    //   // setTimeout(() => {
    //   //   observer.error('An error...');
    //   // }, 6000);
    //   setTimeout(() => {
    //     observer.next('Third package');
    //   }, 6000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 8000);
    //   setTimeout(() => {
    //     observer.next('Fourth package');
    //   }, 10000);
    //   setTimeout(() => {
    //     observer.error('second error');
    //   }, 12000);
    // });

    this.myObservable = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    });

    this.inscription = this.myObservable.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Flux fermé');
      },
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
