import { Component, EnvironmentInjector, inject, Inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { AppConfig, APP_CONFIG } from './app.config';
import { factoryServiceProvider } from './factory.service.provider';
import { FactoryService } from './factory.service';
import { CoinFlipService } from './coin-flip.service';

const MY_APP_CONFIG_VARIABLE: AppConfig = {
  title: 'Angular Dependency Injection Demo',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_CONFIG, useValue: MY_APP_CONFIG_VARIABLE },
    factoryServiceProvider
  ],
})
export class AppComponent implements OnInit {
  private elementInjector = inject(Injector);
  title = 'angular-dependency-injection';
  manufacturedGood = "nothing";
  manufacturedGood2 = "nothing";
  manufacturedGood3 = "nothing";
  constructor(@Inject(APP_CONFIG) config: AppConfig,
              factoryService : FactoryService) {
    this.title = config.title;
    this.manufacturedGood = factoryService.produceWidget();
  }

  ngOnInit(){

    setInterval(() => {
      runInInjectionContext(this.elementInjector, ()=> {
        this.manufacturedGood2= inject(FactoryService).produceWidget()
      });
      const newInjector = Injector.create({
        providers : [CoinFlipService, factoryServiceProvider], //[factoryServiceProvider,CoinFlipService] produces an error
      });
      runInInjectionContext(newInjector, ()=> {
        this.manufacturedGood3 = inject(FactoryService).produceWidget();
      })
    }, 1000)
  }
}
