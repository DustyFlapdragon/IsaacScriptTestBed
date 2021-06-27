import * as modConfigMenu from "./tests/modConfigMenu";

// Register the mod
const IsaacScriptTestBed = RegisterMod("IsaacScriptTestBed", 1);

// test our ModConfigMenuStuff
modConfigMenu.main();

Isaac.DebugString("IsaacScriptTestBed initialized.");
