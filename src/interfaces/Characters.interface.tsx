export interface Characters {
  name: string;
  healthPoints: number;
  image: string;
  attackStrength: number;
  hitboxSize: hitBoxSize[];
}

interface hitBoxSize {
  mode: string;
  hitboxHeight: hitBoxSizeLanguage;
  hitboxWidth: hitBoxSizeLanguage;
}

interface hitBoxSizeLanguage {
  hitboxSpanish: string;
  hitboxEnglish: string;
}
