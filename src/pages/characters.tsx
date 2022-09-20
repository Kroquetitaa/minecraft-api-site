import PagesLayout from '@components/PagesLayout';
import { Characters } from '@interfaces/Characters.interface';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  TemplateDiv,
  TemplateImage,
  TemplateDivCharacters,
  TemplateH3,
  TemplateDivCara,
  TemplateDivDetras,
  TemplateParagraph,
  TemplateH4,
} from '@styles/StylesCharacters';
import ComponentIndex from '@components/ComponentIndex';

export const getStaticProps: GetStaticProps = async () => {
  const urlCharacters: string = 'http://localhost:8080/api/characters/';
  const response = await fetch(urlCharacters);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
};

const characters = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(results);
  const title: string = 'Characters';

  return (
    <PagesLayout title={title}>
      <TemplateDiv>
        {results.map((results: Characters) => (
          <TemplateDivCharacters key={results.name}>
            <TemplateDivCara>
              <TemplateH4>{results.name}</TemplateH4>
              <TemplateImage
                src={`${results.image}`}
                width={216}
                height={512}
              />
            </TemplateDivCara>
            <TemplateDivDetras>
              <TemplateH3>{results.name}</TemplateH3>
              <TemplateParagraph>
                <strong>healthPoints: </strong>
                {results.healthPoints}
              </TemplateParagraph>
              <TemplateParagraph>
                <strong>attackStrength: </strong>
                {results.attackStrength}
              </TemplateParagraph>
            </TemplateDivDetras>
          </TemplateDivCharacters>
        ))}
      </TemplateDiv>
    </PagesLayout>
  );
};

export default characters;
