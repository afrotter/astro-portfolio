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
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
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
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
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
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
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
