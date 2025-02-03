import { CoinFlipService } from "./coin-flip.service";
import { FactoryService } from "./factory.service";

const factoryServiceFactory = (coinFlipService : CoinFlipService) => new FactoryService(coinFlipService.isHeads());

export const factoryServiceProvider = {
    provide : FactoryService,
    useFactory: factoryServiceFactory,
    deps: [CoinFlipService],
}