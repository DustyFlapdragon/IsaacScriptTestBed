import g from "../globals";

// set the global player after initialization to make sure it set
export function main(player: EntityPlayer): void {
  g.p = player;
}
