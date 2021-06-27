import Config from "./Config";

/**
 * Set some global variables so we do not have to keep calling them directions
 * Note that player will be null when this initializes so we ensure we set it in POST_PLAY_INIT
 */
export default class Globals {
  p = Isaac.GetPlayer();
  g = Game();
  l = Game().GetLevel();
  r = Game().GetRoom();
  itemPool = Game().GetItemPool();
  itemConfig = Isaac.GetItemConfig();
  config = new Config();
}
