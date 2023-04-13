import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { transformSecondsToMinutes } from "../../shared/helpers/helpers";

@Component({
  selector: 'app-call-button',
  templateUrl: './call-button.component.html',
  styleUrls: ['./call-button.component.scss']
})
export class CallButtonComponent implements OnDestroy {
  public active = false;
  public time: string = '';

  private timerSubscription: Subscription | undefined;
  private timer$: Observable<number> = timer(0, 1000);

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

  public buttonHandler(): void {
    this.active = !this.active;
    if (!this.active) {
        this.timerSubscription?.unsubscribe();
    } else {
      this.timerSubscription = this.timer$.subscribe(response => {
        this.time = transformSecondsToMinutes(response);
      })
    }
  }

}
