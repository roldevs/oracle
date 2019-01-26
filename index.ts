// tslint:disable:no-console
import R from 'ramda';
import { languageModule } from './src/checks/language';
import { mythicModule } from './src/mythic';
import { EOdds } from './src/typings';

// Set chaos level (from 3 to 6)
const chaos = 7;
// Set the odds level
const odds = EOdds.VeryLikely;

languageModule({locale: 'es'}).init().then((t) => {
  const mythic = mythicModule({t});
  // Fate Check
  console.log(mythic.fate(chaos, odds));
  // Event Check
  console.log(mythic.event());
});
