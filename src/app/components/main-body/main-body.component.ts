import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Option } from '../interface/option';
import { TEXT_OPTIONS } from '../constants/text-options';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
  animations: [
    trigger('textAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' },),
        animate('0.7s', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition('0 => 1', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('1 => 2', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('2 => 3', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('3 => 4', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('4 => 5', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('5 => 6', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('5 => 6', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateY(100px)', offset: 0 }),style({ opacity: 1, transform: 'translateY(0)', offset: 1 })]))),

      transition('5 => 4', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('4 => 3', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('3 => 2', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('2 => 1', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),
      transition('1 => 0', animate('700ms', keyframes([style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),style({ opacity: 1, transform: 'translateX(0)', offset: 1 })]))),

    ]),
  ],
})

export class MainBodyComponent implements OnInit {

  @ViewChild('optionItem') optionItem: any;
  public favoriteSeason: string | undefined;
  public options: string[] = ['CONVERSATIONS', 'ZERO DAY', 'SECURE', 'REAL TIME', 'TRUST', 'PRIVACY', 'SHAMBYTE'];

  public mobileTextOptions = [
    {
      label1: 'EMPOWERING', label2: 'SECURE', label3: 'CONVERSATIONS', para1: 'AI-powered communication app ensuring',
      para2: 'secure and private channels.', para3: '', para4: 'CONVERSATIONS', image1: 'assets/images/Ellipse 5.svg', image2: 'assets/images/Vector 5.svg', image3: 'assets/images/Ellipse 5.svg'
    },
    {
      label1: 'Stay One Step', label2: 'Ahead', label3: '', para1: 'Zero-day fraud detection and real-time',
      para2: 'alerts for ultimate protection against', para3: 'fraudulent activities.', para4: 'ZERO DAY', image1: 'assets/images/Ellipse 5.svg', image2: 'assets/images/Vector 5.svg', image3: 'assets/images/Ellipse 5.svg'
    },
    {
      label1: 'Secure Chats,', label2: 'Uncompromised', label3: 'Privacy', para1: 'Safeguard your conversations with end-',
      para2: 'to-end encryption.', para3: '', para4: 'SECURE', image1: 'assets/images/Ellipse 5.svg', image2: 'assets/images/Vector 5.svg', image3: 'assets/images/Ellipse 5.svg'
    },
    {
      label1: 'Real-Time Alerts,', label2: 'Instant Action', label3: '', para1: 'Immediate notifications empower you to',
      para2: 'take swift action against potential threats.', para3: '', para4: 'REAL TIME', image1: 'assets/images/Ellipse 5.svg', image2: 'assets/images/Vector 5.svg', image3: 'assets/images/Ellipse 5.svg'
    },
    {
      label1: 'Decentralized', label2: 'Trust', label3: '', para1: 'Enjoy the benefits of decentralized',
      para2: 'communication without compromising on', para3: 'security.', para4: 'TRUST', image1: 'assets/images/Ellipse 5.svg', image2: 'assets/images/Vector 5.svg', image3: 'assets/images/Ellipse 5.svg'
    },
    {
      label1: 'Your Privacy, Our', label2: 'Priority', label3: '', para1: 'Ensure your conversations remain private',
      para2: 'with our AI-driven, secure communication', para3: 'app.', para4: 'PRIVACY', image1: 'assets/images/Ellipse 5.svg', image2: 'assets/images/Vector 5.svg', image3: 'assets/images/Ellipse 5.svg'
    }
  ]
  public selectedOptionIndex: number = 0;

  public textOptions: Option[] = TEXT_OPTIONS;
  public rocketPosition: string = '98%';

  gradientStartColor = '#5D3AB7';
  gradientEndColor = '#DC7AFF';

  public form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email],),
  });
  successMessage: boolean = false;
  public showRocket: boolean = true;

  constructor() {
    this.preloadImages();
  }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.selectNextOption();
    } else if (event.key === 'ArrowLeft') {
      this.selectPreviousOption();
    }
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    const scrollAmount = event.deltaY;

    if (scrollAmount > 0) {
      this.selectNextOption();
      this.updateGradientOnScroll();
    } else if (scrollAmount < 0) {
      this.selectPreviousOption();
      this.updateGradientOnScroll();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.updateGradientOnScroll();
  }

  //Not required

  // onMouseWheelUp() {
  //   this.selectPreviousOption();
  // }

  // onMouseWheelDown() {
  //   this.selectNextOption();
  // }

   updateGradientOnScroll() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    const initialStartColor = '#5D3AB7';
    const initialEndColor = '#DC7AFF';

    this.gradientStartColor = this.interpolateColor(initialStartColor, initialEndColor, scrollPercentage);
    this.gradientEndColor = this.interpolateColor(initialEndColor, initialStartColor, scrollPercentage);
  }

  interpolateColor(startColor: string, endColor: string, progress: number): string {
    const r = Math.floor(parseInt(startColor.substr(1, 2), 16) * (1 - progress / 100) + parseInt(endColor.substr(1, 2), 16) * (progress / 100));
    const g = Math.floor(parseInt(startColor.substr(3, 2), 16) * (1 - progress / 100) + parseInt(endColor.substr(3, 2), 16) * (progress / 100));
    const b = Math.floor(parseInt(startColor.substr(5, 2), 16) * (1 - progress / 100) + parseInt(endColor.substr(5, 2), 16) * (progress / 100));
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }

  selectNextOption() {
    if (this.selectedOptionIndex < this.options.length - 1) {
      this.selectedOptionIndex++;
      this.updateRocketPosition();
      this.updateBackground();

    }
  }

  selectPreviousOption() {
    if (this.selectedOptionIndex > 0) {
      this.selectedOptionIndex--;
      this.updateRocketPosition();
      this.updateBackground();
    }
  }

  updateRocketPosition(): void {
    this.rocketPosition = (98 - this.selectedOptionIndex * 16) + '%';
  }

  updateBackground() {
    const imageNames = [
      'BG1.svg',
      'BG2.svg',
      'BG3.svg',
      'BG4.svg',
      'BG5.svg',
      'BG6.svg',
      'BG7.svg'
    ];

    const selectedImageName = imageNames[this.selectedOptionIndex];

    if (selectedImageName) {
     const img = new Image();

     img.onload = () => {
      document.body.style.backgroundImage = `url(assets/images/${selectedImageName})`;
      document.body.style.transition = 'all 1s ease-out;'
    };
    img.src = `assets/images/${selectedImageName}`;
    }
  }


  onOptionClick(index: number): void {
    this.selectedOptionIndex = index;
    this.rocketPosition = (98 - index * 16) + '%';
    this.setBackgroundImage(index);
  }

  preloadImages(): void {
    const images = ['BG1.svg', 'BG2.svg', 'BG3.svg', 'BG4.svg', 'BG5.svg', 'BG6.svg', 'BG7.svg'];
    images.forEach(imageName => {
      const img = new Image();
      img.src = `assets/images/${imageName}`;
    });
  }

  setBackgroundImage(index: number): void {
    const imageName = `BG${index + 1}.svg`;
    const img = new Image();

    img.onload = () => {
      document.body.style.backgroundImage = `url(assets/images/${imageName})`;
      document.body.style.transition = 'all 1s ease-out;'
    };

    img.src = `assets/images/${imageName}`;
  }

  public submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log("Invalid form");
      this.successMessage = false
      return;
    }
    console.log(this.form.controls['email'].value)
    this.form.reset();
    this.successMessage = true;
  }

}
