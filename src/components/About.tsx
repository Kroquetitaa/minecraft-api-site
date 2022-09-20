import React from 'react';
import kroquetita from '@logos/Kroquetita.png';
import Image from 'next/image';
import styles from '@styles/About.module.css';

import {
  TemplateDivGrid,
  TemplateDivGridOne,
  TemplateDivGridTwo,
  TemplateTitleh2,
  TemplateTitleH3,
  TemplateTitleH4,
  TemplateParagraph,
  TemplateA,
} from '@styles/StylesAbout';

const About = () => {
  return (
    <TemplateDivGrid>
      <TemplateDivGridOne>
        <TemplateTitleh2>Sobre mí</TemplateTitleh2>
        <TemplateTitleH4>¿Que es esto?</TemplateTitleH4>
        <TemplateParagraph>
          La API de Minecraft es una API REST basada en el popular juego
          minecraft. Tendrás acceso a cientos de items, a los personajes
          actualmente metidos dentro del juego, y los juegos actualmente
          lanzados por Mojang eso incluyendo el juego "Minecraft" como sus
          variantes de los modos historia.
        </TemplateParagraph>
        <TemplateA href="/documentation">Consulta toda la información aquí</TemplateA>
        <TemplateTitleH4>¿Quién soy?</TemplateTitleH4>
        <TemplateParagraph>
          Me llamo 
          <TemplateA href="https://github.com/Kroquetitaa" target="_blank">
            Sergio
          </TemplateA>
          y soy una persona a la que le gusta desarrollar, al igual que aprender
          nuevas tecnologias y herramientas.
        </TemplateParagraph>
        <TemplateTitleH4>¿Por qué construí esto?</TemplateTitleH4>
        <TemplateParagraph>
          Digamos que fue una idea de mi profesor de Bootcamp desarrollar una
          idea de API y se me ocurrio la idea de crear una API de minecraft para
          que la gente pueda consumirla, ya que es muy común que la gente que
          empieza a aprender utilice otro tipo de apis para crear webs
          divertidas y entretenidas, asique decidí crear una API de Minecraft
          para que la gente pueda tener una API mas con la que poder hacer sus
          diseños libres
        </TemplateParagraph>
        <TemplateTitleH4>
          ¿Que lenguajes y herramientas se han utilizado?
        </TemplateTitleH4>
        <TemplateParagraph>
          He usado Node y MongoDB para desarrollar todo el backend junto a la
          base de datos donde se almacenarán los datos. Todos los datos estan
          formateados a json.
        </TemplateParagraph>
        <TemplateTitleH4>¿Derechos de autor?</TemplateTitleH4>
        <TemplateParagraph>
          Minecraft es una creacción de Markus Persson, la cual fue comprada
          por Microsoft. Los datos e imagenes se utilizan sin derecho de
          propiedad y pertenecen a sus respectivos propietarios.
        </TemplateParagraph>
        <TemplateParagraph>
          Esta API es de codigo abierto y utiliza una licencia BSD.
        </TemplateParagraph>
      </TemplateDivGridOne>
      <TemplateDivGridTwo>
        <TemplateTitleH3>Desarrollador</TemplateTitleH3>
        <TemplateTitleH4>Sergio Fuentes</TemplateTitleH4>
        <TemplateParagraph>Alias: Kroquetita</TemplateParagraph>
       <Image src={kroquetita} className={styles['Image-logo']}></Image>
        <cite className={styles['Cite']}>"Si puedes imaginarlo, puedes programarlo"</cite>
        <TemplateParagraph>
          Mi Github: <TemplateA href="https://github.com/Kroquetitaa">Kroquetitaa</TemplateA>
        </TemplateParagraph>
      </TemplateDivGridTwo>
    </TemplateDivGrid>
  );
};

export default About;
