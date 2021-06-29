import * as evaluateCache from "./callbacks/evaluateCache";
import * as postPlayerInit from "./callbacks/postPlayerInit";
import * as saveData from "./saveData";
import * as modConfigMenu from "./tests/modConfigMenu";

// Register the mod
const IsaacScriptTestBed = RegisterMod("IsaacScriptTestBed", 1);

// Post Player Init: Set Player
IsaacScriptTestBed.AddCallback(
  ModCallbacks.MC_POST_PLAYER_INIT,
  postPlayerInit.main,
);

// Evaluate Cache Call Back
IsaacScriptTestBed.AddCallback(
  ModCallbacks.MC_EVALUATE_CACHE,
  evaluateCache.main,
  CacheFlag.CACHE_RANGE,
);

// test our ModConfigMenuStuff
modConfigMenu.main();

// set our mod and load the save data
saveData.setMod(IsaacScriptTestBed);
saveData.load();

Isaac.DebugString("IsaacScriptTestBed initialized.");
