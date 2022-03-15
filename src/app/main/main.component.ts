import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  heroMainText = `
    Legyen kreatív, működő weboldalad neked is!
    `
  heroSecondaryText = `
    A közös munka során egyedi és célirányos megoldásokkal megmutatjuk ügyfeleidnek miért Te vagy a legjobb!
    ` // NOTE span TE
  heroImageSrc = './assets/illusztraciok/fooldalbanner.svg'

  servicesCardsContent = [
    {
      'title': 'Logó- és arculat tervezés',
      'content': `A branding és a pontosan megtervezett vizuális megjelenés a
                  siker egyik alapköve. Egy jól megtervezett arculat növeli a
                  láthatóságot, bizalmat kelt, segíti az értékesítést.`,
      'imageSrc': 'assets/ikonok/logo-arculattervezes-ikon.svg'
    },
    {
      'title': 'Webdesign',
      'content': `A közös munka során egyedi grafikákkal, bannerekkel tesszük
                  teljesen egyedivé a webáruházad, és használatba vétel után is
                  rendelkezésedre állunk karbantartási, üzemeltetési és további
                  grafikai munkára.`,
      'imageSrc': 'assets/ikonok/webdesign-ikon.svg'
    },
    {
      'title': 'Webfejlesztés',
      'content': `A digitális arculat legfontosabb eszköze a weboldal. Segítünk,
                  hogy kitűnj a tömegből és weboldalad egyszerre felelen meg
                  marketing és kommunikációs céloknak is.`,
      'imageSrc': 'assets/ikonok/webfejlesztes-ikon.svg'
    },
    {
      'title': 'Webshop készítés',
      'content': `A digitális arculat legfontosabb eszköze a weboldal. Segítünk,
                  hogy kitűnj a tömegből és weboldalad egyszerre felelen meg
                  marketing és kommunikációs céloknak is.`,
      'imageSrc': 'assets/ikonok/webshop-ikon.svg'
    },
  ]


  progressCardsContent = [
    {
      'title': 'Igény felmérés',
      'content': `Online meeting során felmérjük a vállalkozásod múltját, jelenét és
                  vízióját, felderítjük az értékeidet, célközönségedet,
                  versenytársaidat. Ez lesz a tervezési folyamat alapja.`,
      'imageSrc': 'assets/ikonok/igenyfelmeres-ikon.svg'
    },
    {
      'title': 'Tervek elkészítése',
      'content': `Látványtervek segítségével bemutatjuk a fő grafikai irányt, amit
                  az igényeid szerint módosítunk, hogy a végeredménnyel teljesen
                  azonosulni tudj.`,
      'imageSrc': 'assets/ikonok/tervek-elkeszitese-ikon.svg'
    },
    {
      'title': 'Megvalósítás',
      'content': `Az átbeszélt módosítások után kidolgozzuk a végleges terveket,
                amik alapján fejlesztünk majd tesztelünk.`,
      'imageSrc': 'assets/ikonok/megvalositas-ikon.svg'
    },
  ]

  constructor(
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef, 
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);


  }

  ngOnInit(): void {

    
  }

}
