
## Introducción

This is a library that provides [Mythic GM Emulator] (http://www.wordmillgames.com/mythic.html) results.

Currently, there is only support for Fate and Event check, but I am planing to add all five check types.

## Use

It is quite easy to use:

```typescript
// Set chaos level (from 3 to 6)
const chaos = 5;
// Set the odds level
const odds = EOdds.VeryLikely;

// Initialize language module
languageModule({locale: 'en'}).init().then((t) => {
  const mythic = mythicModule({t});
  // Fate Check
  console.log(mythic.fate(chaos, odds)); // For example: No - Ambigous Event (Imprison/Environment)
  // Event Check
  console.log(mythic.event()); // For example: Agree/Opulence
});
```

The allowed odds level are:

```typescript
enum EOdds {
  Impossible = -8,
  NoWay = -6,
  VeryUnlikely = -4,
  Unlikely = -2,
  Unsure = 0, // 50/50
  Likely = 2,
  VeryLikely = 4,
  SureThing = 6,
  HasToBe = 8,
}
```
