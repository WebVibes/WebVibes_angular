import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-logo',
  templateUrl: './services-logo.component.html',
  styleUrls: ['./services-logo.component.css']
})
export class ServicesLogoComponent implements OnInit {
  heroMainText = 'Logó- és arculat tervezés'
  heroSecondaryText = `
    A branding és a pontosan megtervezett vizuális megjelenés a siker egyik alapköve. 
    Egy jól megtervezett arculat növeli a láthatóságot, bizalmat kelt, segíti az értékesítést.
    Pontos árajánlatot a logó- és arculattervezésről ai igényeid felmérése után tudunk csak adni.`
  heroImageSrc = './assets/illusztraciok/logoesarculat.svg'

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
  priceText = '50 000 Ft-tól'
  descriptionText = `
      Miután tisztáztuk, hogy mire van szükséged és hogyan fog zajlani a közös munka,
      kiállítjuk a számlát a projekt teljes díjának 30%-áról. 
      A fennmaradó 70%-ot a munka átadását megelőzően kell majd kifizetned.
      `
  yourJobImageSrc= 'assets/illusztraciok/telefon.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
