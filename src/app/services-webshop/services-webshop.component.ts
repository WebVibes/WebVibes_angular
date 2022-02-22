import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-webshop',
  templateUrl: './services-webshop.component.html',
  styleUrls: ['./services-webshop.component.css']
})
export class ServicesWebshopComponent implements OnInit {
  heroMainText = 'Webshop készítés'
  heroSecondaryText = `
    A közös munka során grafikákkal, bannerekkel tesszük teljesen egyedivé a webáruházad,
    és használatba vétel után is rendelkezésedre állunk karbantartási, 
    üzemeltetési és további grafikai munkákkal.`
  heroImageSrc = './assets/illusztraciok/webshop.svg'

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
  priceText = '150 000 Ft-tól'
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
