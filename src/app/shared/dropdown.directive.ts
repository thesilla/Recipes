import {Directive, HostListener, OnInit, Renderer2, ElementRef, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'

})

export class DropdownDirective implements OnInit {

    @HostBinding('class.open') isOpen: boolean = false;



    @HostListener('click') toggleOpen() {

        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
       this.isOpen = !this.isOpen;
    
      }

    constructor(private elRef: ElementRef, private renderer: Renderer2){




    }

    ngOnInit(){



    }


}


