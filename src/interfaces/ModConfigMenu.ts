/**
 * A typescript interface for ModConfigMenu {@link https://gitlab.com/Chifilly/bindingofisaac-modconfigmenu }
 * to be used with IsaacScript {@link https://isaacscript.github.io }
 * This interface is based on the one created by {@link https://github.com/Zamiell }
 *
 */
declare const ModConfigMenu: ModConfigMenuInterface;

/**
 * Define the various functions from ModConfig Menu
 */
declare interface ModConfigMenuInterface {
  /**
   * Add a new setting to the supplied category and subcategory with the provided data.
   * If the category/subcategory does not exist, create it
   * This is the default way to create settings, all other setting options utilise it
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param settingTable {@link ModConfigMenuSetting} A table of data for the setting.
   * @noSelf There is no contextual parameter
   */
  AddSetting(
    categoryName: string,
    subcategoryName?: string,
    settingTable?: ModConfigMenuSetting,
  ): void;

  /**
   * Add a space to the mod config menu under the provided category and subcategory.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @noSelf There is no contextual parameter
   */
  AddSpace(categoryName: string, subcategoryName: string): void;

  /**
   * Add text into the mod config menu under the provided category and subcategory.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param textFunction A function that returns a string
   * @noSelf There is no contextual parameter
   */
  AddText(
    categoryName: string,
    subcategoryName: string,
    textFunction: () => string,
  ): void;

  /**
   *
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param text A string of text to be added
   * @param color optional colour apparently? @todo how the hell does this work, passing KColor doesn't work
   * @noSelf There is no contextual parameter
   */
  AddTitle(
    categoryName: string,
    subcategoryName: string,
    text: string,
    color?: string,
  ): void;

  /**
   * Remove the setting at the provided category, subcategory and attribute
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param settingAttribute
   * @noSelf There is no contextual parameter
   */
  RemoveSetting(
    categoryName: string,
    subcategoryName: string,
    settingAttribute: string,
  ): void;

  /**
   * Retrieves the ID of a category
   * @param categoryName Name of category on the left of ModConfigMenu
   * @returns The ID of the categoryName provided or null if it does not exist
   */
  GetCategoryIDByName(categoryName: string): int | null;
}

/**
 * an Interface for the settings table
 * @noSelf There is no contextual parameter
 */
declare interface ModConfigMenuSetting {
  CurrentSetting: () => number | boolean;
  Attribute?: string | null;
  Display: () => string;
  Info: string[];
  OnChange: (newValue: number | boolean) => void;
  Type: ModConfigMenuOptionType;
}

/**
 * declare the option types
 * https://gitlab.com/Chifilly/bindingofisaac-modconfigmenu#optiontype
 */
declare const enum ModConfigMenuOptionType {
  TEXT = 1,
  SPACE = 2,
  SCROLL = 3,
  BOOLEAN = 4,
  NUMBER = 5,
  KEYBIND_KEYBOARD = 6,
  KEYBIND_CONTROLLER = 7,
  TITLE = 8,
}
