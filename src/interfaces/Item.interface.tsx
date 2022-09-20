export interface Item{
    id: number,
    item: string,
    stack: number,
    minecraftName: string,
    minecraftIDName: string,
    minecraftID: number,
    minecraftDataValue: MinecraftDataValue,
    flamableItem: FlamableItem,
    rarityColor: RarityColor,
    imageItem: string,
    nameItem: NameItem
}

interface RarityColor{
    rarityColorSpanish: string,
    rarityColorEnglish: string,
}

interface NameItem{
    nameItemSpanish: string,
    nameItemEnglish: string
}

type MinecraftDataValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
type FlamableItem = true | false;