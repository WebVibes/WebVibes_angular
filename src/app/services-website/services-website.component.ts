import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-website',
  templateUrl: './services-website.component.html',
  styleUrls: ['./services-website.component.css']
})
export class ServicesWebsiteComponent implements OnInit {

  heroMainText = 'Webdesign, webfejlesztés'
  heroSecondaryText = `
    A digitális arculat legfontosabb eszköze a weboldal. Segítünk, hogy kitűnj a tömegből
    és weboldalad egyszerre feleljen meg marketing és kommunikációs céloknak is. 
    Pontos árajánlatot a weboldal készítéséről az igényeid felmérése után tudunk adni.`
  heroImageSrc = './assets/illusztraciok/webdesign_webfejlesztes.svg'

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

  yourJobText = 'Információt szolgáltatni, egyeztetni, jóváhagyni'
  priceText = '120 000 Ft-tól'
  descriptionText = `
      Miután tisztáztuk, hogy mire van szükséged és hogyan fog zajlani a közös munka,
      kiállítjuk a számlát a projekt teljes díjának 30%-áról. 
      A fennmaradó 70%-ot a munka átadását megelőzően kell majd kifizetned.
      `
  yourJobImageSrc= 'assets/illusztraciok/telefon.svg'

  offers = [[
    'modern megjelenés',
    'gyors és reszponzív megjelenés',
    'átadás után 4 hetes támogatás',
    'kapcsolati űrlap, hírlevél felíratkozás',
    'számtalan funkció',
    'integrációs lehetőség',
  ],
  [
    'modern megjelenés',
    'gyors és reszponzív megjelenés',
    'átadás után 4 hetes támogatás',
    'kapcsolati űrlap, hírlevél felíratkozás',
    'számtalan funkció',
    'integrációs lehetőség',
  ],
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
