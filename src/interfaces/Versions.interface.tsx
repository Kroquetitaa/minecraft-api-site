export interface Versions {
  version: string;
  items: Items[];
}

export interface Items {
  item: number;
  minecraftIDName: string;
  minecraftID: number;
  minecraftDataValue: MinecraftDataValue;
  flamableItem: FlamableItem;
  rarityColor: RarityColor;
  imageItem: string;
  nameItem: NameItem;
}

interface RarityColor {
  rarityColorSpanish: string;
  rarityColorEnglish: string;
}

interface NameItem {
  nameItemSpanish: string;
  nameItemEnglish: string;
}

type MinecraftDataValue = 0 | 1;
type FlamableItem = true | false;
