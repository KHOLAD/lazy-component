import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {LazyInputComponent} from './input-component/lazy-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  inputComponentRef: ComponentRef<LazyInputComponent>;

  constructor(private resolver: ComponentFactoryResolver) {}

  async loadInputComponent() {
    if (!this.inputComponentRef) {
      // tslint:disable-next-line:no-shadowed-variable
      const { LazyInputComponent } = await import(/* webpackChunkName: 'lazy-input-component' */`./input-component/lazy-input.component`);
      const factory = this.resolver.resolveComponentFactory(LazyInputComponent);
      // Sets main component ref
      this.inputComponentRef = this.vcr.createComponent(factory);
      const { instance } = this.inputComponentRef;
      // Main inputs
      instance.placeholder = 'Favourite food';
      instance.control.valueChanges.subscribe(console.log);
    }
  }

  clearRef() {
    this.inputComponentRef = null;
    this.vcr.clear();
  }
}
