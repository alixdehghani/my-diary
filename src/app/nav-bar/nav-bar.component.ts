import { Directionality } from '@angular/cdk/bidi';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private readonly _dirChangeSubscription: Subscription;
  private _direction: 'ltr' | 'rtl'
  constructor(public readonly dir: Directionality) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}
