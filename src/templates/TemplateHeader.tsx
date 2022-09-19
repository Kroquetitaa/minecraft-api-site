import Link from 'next/link';
import Image from 'next/image';

import {
  TemplateUl,
  TemplateLi,
  TemplateParagraph,
  TemplateImageLi,
} from '@styles/StylesHeader';
import MinecraftLogo from '@logos/minecraft-logo.png';

const TemplateHeader = () => {
  return (
    <header>
      <TemplateUl color="#1e2b36">
        <Link href="/home">
          <TemplateImageLi>
            <Image src={MinecraftLogo} width={128} height={128} />
          </TemplateImageLi>
        </Link>
        <Link href="/documentation">
          <TemplateLi color="#E88B05">
            <TemplateParagraph>Documentation</TemplateParagraph>
          </TemplateLi>
        </Link>
        <Link href="/versions">
          <TemplateLi color="#E88B05">
            <TemplateParagraph>Versions display</TemplateParagraph>
          </TemplateLi>
        </Link>
        <Link href="/items">
          <TemplateLi color="#E88B05">
            <TemplateParagraph>Items display</TemplateParagraph>
          </TemplateLi>
        </Link>
        <Link href="/games">
          <TemplateLi color="#E88B05">
            <TemplateParagraph>Games display</TemplateParagraph>
          </TemplateLi>
        </Link>
        <Link href="/characters">
          <TemplateLi color="#E88B05">
            <TemplateParagraph>Characters display</TemplateParagraph>
          </TemplateLi>
        </Link>
        <Link href="/about">
          <TemplateLi color="#E88B05">
            <TemplateParagraph>About me</TemplateParagraph>
          </TemplateLi>
        </Link>
      </TemplateUl>
    </header>
  );
};

export default TemplateHeader;
