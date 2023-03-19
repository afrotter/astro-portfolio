import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="QR Code Generator"
        description="Create a QR code in seconds. Simply insert a URL and hit the generate button."
        link="https://github.com/afrotter/qrcode_generator"
        img={{
          src: '/assets/images/QR_color.png',
          alt: 'QR Code',
        }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Loadshedding Checker"
        description="Don't get caught in the dark. Use this simple web app to check the current stage of loadshedding and adjust your schedule accordingly!"
        link="https://github.com/afrotter/react-loadshed"
        img={{
          src: '/assets/images/LS_color.png',
          alt: 'Loadshedding Checker',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
          </>
        }
      />
      <Project
        name="My Portfolio"
        description="It's staring you right in the face."
        link="https://github.com/afrotter/astro-portfolio"
        img={{
          src: '/assets/images/portfolio.png',
          alt: 'My Portfolio',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
