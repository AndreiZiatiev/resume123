import './resume.css';
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Resumeimage from '../images/profile1.jpeg';
import { ResumeButton } from '../components/buttons';
import {
  SectionIntro,
  ContainerLayout,
  AboutSection,
  Title,
  Text,
  SubTitle,
  FontLink,
} from './style';

const AboutPage = () => {
  return (
    <>
      <div>
        <FontLink>
          <a
            href="https://github.com/smakosh/gatsby-portfolio-dev/blob/master/gatsby-config.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </a>
          <a
            href="https://github.com/smakosh/gatsby-portfolio-dev/blob/master/gatsby-config.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>Linkedin</span>
          </a>
          <a
            href="https://github.com/smakosh/gatsby-portfolio-dev/blob/master/gatsby-config.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>Github</span>
          </a>
        </FontLink>
      </div>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <img className="resumeimage" src={Resumeimage} alt="A dog smiling in a party hat" />
              <SubTitle> Beginner(Trainee) Front End Developer</SubTitle>
            </div>
            <div>
              <Title> Hello, I’m Andrei </Title>
              <Text>
                {' '}
                I'm a beginner Front End Developer hailing from Ukraine{' '}
                <b className="text-primary lined-link" /> and living in Kyjiv.{' '}
              </Text>
              <Text>
                {' '}
                I give preference to mastering modern development tools and technologies in
                Web-Development. You can read my resume in more detail by clicking on the link
                below.
              </Text>

              <ResumeButton href="../../resume.pdf" target="_blank">
                {' '}
                Download resume{' '}
              </ResumeButton>
            </div>
          </AboutSection>

          <AniLink class="anilink" swipe top="entry" to="/" entryOffset={80}>
            Go to Homepage
          </AniLink>
        </ContainerLayout>
      </SectionIntro>
    </>
  );
};
export default AboutPage;
