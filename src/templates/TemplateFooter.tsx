import {
  TemplateUl,
  TemplateLi,
  TemplateParagraph,
} from '@styles/StylesFooter';
import ReactAudioPlayer from 'react-audio-player';

const TemplateFooter = () => {
  return (
    <TemplateUl color="#1e2b36">
      <TemplateLi>
        <TemplateParagraph>Minecraft-API</TemplateParagraph>
      </TemplateLi>
      <TemplateLi>
        <TemplateParagraph>
          Items: {38} Characters: {2} Games: {3}
        </TemplateParagraph>
      </TemplateLi>
      <TemplateLi>
        <TemplateParagraph>Kroquetita-2022</TemplateParagraph>
        {/* <ReactAudioPlayer src="../music/song.mp3" autoPlay controls={true}/> */}
      </TemplateLi>
    </TemplateUl>
  );
};

export default TemplateFooter;
