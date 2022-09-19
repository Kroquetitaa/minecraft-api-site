import { TemplateDiv, TemplateImage, TemplateTitle } from '@styles/StylesIndex';
import banner from '@logos/principal-logo.png';
import ParticlesBackground from '@particles/ParticlesBackground';
import Link from 'next/link';

const ComponentIndex = () => {
  return (
    <TemplateDiv>
      <ParticlesBackground />
      <TemplateImage src={banner}></TemplateImage>
      <Link href="/home">
        <TemplateTitle>MINECRAFT-API</TemplateTitle>
      </Link>
    </TemplateDiv>
  );
};

export default ComponentIndex;
