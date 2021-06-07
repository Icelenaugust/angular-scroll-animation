import { 
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('imageOne', { static: true })
  imageOne!: ElementRef<
    HTMLImageElement
  >;

  @ViewChild('imageTwo', { static: true })
  imageTwo!: ElementRef<
    HTMLImageElement
  >;

  @ViewChild('imageThree', { static: true })
  imageThree!: ElementRef<
    HTMLImageElement
  >;

  @ViewChild('imageFour', { static: true })
  imageFour!: ElementRef<
    HTMLImageElement
  >;

  @ViewChild('imageFive', { static: true })
  imageFive!: ElementRef<
    HTMLImageElement
  >;

  @ViewChild('imageSix', { static: true })
  imageSix!: ElementRef<
    HTMLDivElement
  >;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.initScroll();
    this.initAnimation();
  }

  initScroll(): void {
    const defaultScrollConfig = {
      trigger: ".main",
      start: "30px top",
      scroller: this.document.querySelector('.main') as Element,
      end: "+=100%",
      scrub: 1,
    };

    const endPosition = {
      top: "78%",
      rotate: 0,
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    const verticalScrollbar = Scrollbar.init((this.document.querySelector('.main')) as HTMLElement, {
      damping: 0.1,
      delegateTo: document,
    });

    verticalScrollbar.setPosition(0, 0);
    verticalScrollbar.track.xAxis.element.remove();
    verticalScrollbar.track.yAxis.element.remove();
    ScrollTrigger.scrollerProxy('.main', {
      scrollTop(value) {
        if (arguments.length) {
          verticalScrollbar.scrollTop = value as number;
        }
        return verticalScrollbar.scrollTop;
      }
    })

    gsap.to(document.querySelector(".text-container > h1"), { x: -1000, scrollTrigger: { ...defaultScrollConfig } });
    gsap
      .timeline({ scrollTrigger: { ...defaultScrollConfig } })
      .to("body", { background: "#ffffff" })
      .to("body", { background: "#e3dce8" });
    
    gsap.timeline({ scrollTrigger: { ...defaultScrollConfig } })
        .to(this.imageOne.nativeElement, {
          top: "65%",
          rotate: 20,
          left: "60%",
          transform: "translate(-50%, -50%)",
        })
        .to(this.imageOne.nativeElement, { ...endPosition});
    gsap.timeline({ scrollTrigger: { ...defaultScrollConfig } })
        .to(this.imageTwo.nativeElement, {
          top: "65%",
          rotate: -20,
          left: "60%",
          transform: "translate(-50%, -50%)",
        })
        .to(this.imageTwo.nativeElement, { ...endPosition });

    gsap.timeline({ scrollTrigger: { ...defaultScrollConfig } })
        .to(this.imageThree.nativeElement, {
          top: "65%",
          rotate: 17,
          left: "60%",
          transform: "translate(-50%, -50%)",
        })
        .to(this.imageThree.nativeElement, { ...endPosition });

    gsap.timeline({ scrollTrigger: { ...defaultScrollConfig } })
        .to(this.imageFour.nativeElement, {
          top: "65%",
          rotate: -30,
          left: "60%",
          transform: "translate(-50%, -50%)",
        })
        .to(this.imageFour.nativeElement, { ...endPosition });

    gsap.timeline({ scrollTrigger: { ...defaultScrollConfig } })
        .to(this.imageFive.nativeElement, {
          top: "65%",
          rotate: 30,
          left: "60%",
          transform: "translate(-50%, -50%)",
        })
        .to(this.imageFive.nativeElement, { ...endPosition });

    gsap.timeline({ scrollTrigger: { ...defaultScrollConfig } })
        .to(this.imageSix.nativeElement, {
          top: "65%",
          rotate: 45,
          left: "60%",
          transform: "translate(-50%, -50%)",
        })
        .to(this.imageSix.nativeElement, { ...endPosition });
  }

  initAnimation(): void {
    gsap.to(this.imageOne.nativeElement, {
      duration: 0, right: "5%", top: "1%", zIndex: 0
    });
    gsap.to(this.imageTwo.nativeElement, {
      duration: 0, right: 0, top: "11%", zIndex: 2
    });
    gsap.to(this.imageThree.nativeElement, {
      duration: 0, right: "2%", top: "25%", zIndex: 1
    });
    gsap.to(this.imageFour.nativeElement, {
      duration: 0, right: "12%", top: "17%", zIndex: 3
    });
    gsap.to(this.imageFive.nativeElement, {
      duration: 0, right: "19%", top: "10%", zIndex: 1
    });
    gsap.to(this.imageSix.nativeElement, {
      duration: 0, right: "18%", top: "33%", zIndex: 0
    });
  }

  

}
