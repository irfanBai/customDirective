import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './customDirective/setbackground.directive';
import { HighlightDirective } from './customDirective/highlight.directive';
import { HoverDirective } from './customDirective/hover.directive';
import { BetterhighlightDirective } from './customDirective/betterhighlight.directive';
import { ClassDirective } from './customDirective/class.directive';
import { StyleDirective } from './customDirective/style.directive';
import { IfDirective } from './customDirective/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    StyleDirective,
    IfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
