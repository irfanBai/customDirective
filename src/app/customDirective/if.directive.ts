import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template: TemplateRef<any>, private viewconatiner: ViewContainerRef) {

   }

   @Input('appIf') set displayView(condition: boolean){
    if(condition){
      this.viewconatiner.createEmbeddedView(this.template)

    }else {
      this.viewconatiner.clear();
    }

   }

}
