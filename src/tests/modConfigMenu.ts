/**
 * Here we test the ModConfigMenu interface
 */

// set some usable stuff
const categoryName = "IsaacScript Test Bed";
const subcategoryName = "Info";
let addSettingOption = false;

/**
 * Test the ModConfigMenu functions
 * @returns void
 */
export function main(): void {
  // make sure ModConfigMenu exist
  if (ModConfigMenu === null) {
    return;
  }

  /**
   * @remark addSetting
   * adding a blank setting tab - why you'd want to I have no idea but its allowed so why not
   * turns out you don't want to do this without later adding settings
   * as it breaks esc controls and you get stuck in the menu
   */
  // ModConfigMenu.AddSetting(categoryName);

  /**
   * @remark addSetting
   * for the sake of full information, giving it a subcategory without passing a table breaks
   * it will ignore the subcategory all together and make it "uncategorised"
   */
  // ModConfigMenu.AddSetting(categoryName, "test");

  // now lets add a full boolean setting
  ModConfigMenu.AddSetting(categoryName, subcategoryName, {
    Type: ModConfigMenuOptionType.BOOLEAN,
    CurrentSetting: () => addSettingOption,
    Display: () => `Test Setting:${boolStatus(addSettingOption)}`,
    OnChange: (newValue: boolean | number) => {
      addSettingOption = newValue as boolean;
    },
    Info: ["Some Descriptive text"],
  });

  // Add another random boolean setting but this time give it an attribute, we will remove this
  ModConfigMenu.AddSetting(categoryName, subcategoryName, {
    Type: ModConfigMenuOptionType.BOOLEAN,
    Attribute: "testRemoveAttribute",
    CurrentSetting: () => addSettingOption,
    Display: () => `Test Setting:${boolStatus(addSettingOption)}`,
    OnChange: (newValue: boolean | number) => {
      addSettingOption = newValue as boolean;
    },
    Info: ["Some Descriptive text"],
  });

  // remove the setting with attribute of 'TestRemoveAttribute'
  ModConfigMenu.RemoveSetting(
    categoryName,
    subcategoryName,
    "testRemoveAttribute",
  );

  // add a space
  ModConfigMenu.AddSpace(categoryName, subcategoryName);

  // add some text (title) to the menu
  ModConfigMenu.AddTitle(categoryName, subcategoryName, "I see test Titles");

  // now lets add a boolean setting directly (or indirectly depending on how you look at it)
  ModConfigMenu.AddBooleanSetting(
    categoryName,
    subcategoryName,
    "attribute",
    true,
    "BooleanTest",
    { true: "On", false: "Off" },
  );

  // now a controller setting
  ModConfigMenu.AddControllerSetting(
    categoryName,
    subcategoryName,
    "controller-settings",
    ModConfigMenuController.STICK_RIGHT,
    "Controller Setting",
  );
}
/**
 * Determine english text for on/off status
 * @param value true/false
 * @returns string of on/off
 */
function boolStatus(value: boolean): string {
  return value ? "On" : "Off";
}
