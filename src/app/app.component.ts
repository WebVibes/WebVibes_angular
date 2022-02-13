import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebVibes';

  mobileQuery: MediaQueryList;

  fillerNav = [
    'Szolgáltatásaink',
    'Munkáink',
    'Rólunk',
    'Ajánlatkérés',
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private matIconRegistry:MatIconRegistry,
    private domSanitzer:DomSanitizer,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.matIconRegistry.addSvgIcon('white-logo',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/whitelogografika.svg'));
    // this.matIconRegistry.addSvgIcon('logo-arculattervezes-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/logo-arculattervezes-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('webdesign-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/webdesign-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('webfejlesztes-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/webfejlesztes-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('webshop-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/webshop-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('igenyfelmeres-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/igenyfelmeres-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('tervek-elkeszitese-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/tervek-elkeszitese-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('megvalositas-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/megvalositas-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('celunk-sarga-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/celunk-sarga-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('celunk-lila-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/celunk-lila-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('celunk-zold-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/celunk-zold-ikon.svg'));
    // this.matIconRegistry.addSvgIcon('celunk-kek-ikon',this.domSanitzer.bypassSecurityTrustResourceUrl('assets/ikonok/celunk-kek-ikon.svg'));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
