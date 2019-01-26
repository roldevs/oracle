
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

interface ICheckFateResult {
  result: boolean;
  exceptional: boolean;
  randomEvent: boolean;
}

interface IChaosModule {
  bonusFate(): number;
  isInRange(value: number): boolean;
}

type TChaosModule = (oddModule: IOddsModule, chaos: number) => IChaosModule;

interface IOddsModule {
  bonus(): number;
  positive(): boolean;
  negative(): boolean;
}

interface IDiceFateValue {
  fate1: number;
  fate2: number;
  chaos: number;
}

interface IDiceEventValue {
  dice1: number;
  dice2: number;
}

interface IDiceFateModule {
  fateAreBothOdd(): boolean;
  fateAreBothEven(): boolean;
  fateAreBothEqual(): boolean;
  fateTotal(): number;
  chaos(): number;
}

type TDiceFateModule = (dice: IDiceFateValue) => IDiceFateModule;

type TOddsModule = (odd: EOdds) => IOddsModule;

type TCheckFateResultModule = (oddModule: IOddsModule, chaosModule: IChaosModule) => {
  result(diceModule: IDiceFateModule): boolean;
};

type TCheckFateExceptionalModule = (oddModule: IOddsModule, chaosModule: IChaosModule) => {
  result(diceModule: IDiceFateModule): boolean;
};

type TCheckFateRandomEventModule = (oddModule: IOddsModule, chaosModule: IChaosModule) => {
  result(diceModule: IDiceFateModule): boolean;
};

type TCheckEventFocusModule = (focusTable: ITableModule) => {
  result(): string | null;
};

interface ICheckEventMeaningResult {
  action1: string | null;
  action2: string | null;
}

type TCheckEventMeaningModule = (
  meaningTable1: ITableModule,
  meaningTable2: ITableModule,
) => {
  result(): ICheckEventMeaningResult;
};

interface ITableItem {
  text: string;
  weight?: number;
}

interface ITableModule {
  random(): ITableItem | null;
  randomText(): string | null;
  distribution(): ITableItem[];
}

type TTableModule = (items: ITableItem[]) => ITableModule;

export {
  EOdds,
  ICheckFateResult,
  TChaosModule,
  IChaosModule,
  IDiceFateValue,
  TDiceFateModule,
  IDiceFateModule,
  IDiceEventValue,
  TCheckFateExceptionalModule,
  TCheckFateRandomEventModule,
  TCheckFateResultModule,
  IOddsModule,
  TOddsModule,
  ITableItem,
  ITableModule,
  TTableModule,
  TCheckEventFocusModule,
  TCheckEventMeaningModule,
  ICheckEventMeaningResult,
};

// https://dieheart.net/solo-rpg-resources/
// http://chrispwolf.com/knave/
// http://www.playeveryrole.com/

// Rules Summary

// 1. Create your Hero.

// 2. Declare your setting.
// The world you are playing in.
// 3. Get a quest.

// 4. Set your first Scene.
//     A short description of where the Hero is and what's happening.

// 5. Come up with a Scene Goal.
//     This will determine when the scene is over, be it complete or fail the goal.

// 6. Begin asking questions!
//     A question can be either an Inquiry or an Action outcome. Questions must be in a yes/no answerable format.

//     "And" means even more than you expected, "But" means there is a limited effect or a drawback.
//     Exactly what the two-word Twist sentence means is up to you.

// 7. Once the scene endsget the next scene.

// A dramatic scene means the action doesn't let up! A quiet scene means there is no immediate danger, a good chance to
// gather intel or discover more about the characters or situation. A Meanwhile scene is a remote location, and does not
// involve the Hero!
// Helpful Notes

// � If you get stuck...try the Story Dice for inspiration.
