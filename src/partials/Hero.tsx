import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>JD</GradientText> 👋
        </>
      }
      description={
        <>
          I am a web developer from Cape Town, South Africa. I'm an IT
          professional of 4 years, currently working on web-based projects and
          messing around with data.{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/afrotterio" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jd-engelbrecht-b96267232/"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/afrotter" target="_blank">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
