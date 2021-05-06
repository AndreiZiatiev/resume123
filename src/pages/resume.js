import './resume.css';
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Resumeimage from '../images/profile1.jpeg';
import { ResumeButton } from '../components/buttons';

const AboutPage = () => {
  return (
    <div id="about1">
      <div className="content">
        <div className="about-wrapper__image">
          <img className="resumeimage" src={Resumeimage} alt="A dog smiling in a party hat" />
        </div>
        <div className="txt">
          <h2>My Name is John Doe, and I am a Designer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam risus, d ignissim
            pharetra sagittis sed, adipiscing nec felis. Maecenas non nulla eget ligula semper
            aliquet. Pellentesque adipiscing pulvinar tortor, a adipiscing felis commodo in.
            Vestibulum dui magna, mattis in bibendum a, congue vitae lectus. In eu odio tortor, vel
            congue lacus. Donec viverra viverra eros, in egestas ligula adipiscing non. Morbi et
            ultricies sapien. Duis metus odio, commodo in tempor quis, euismod et ligula. Vivamus
            tristique condimentum ipsum sit amet posuere.
          </p>
          <p>
            - adipiscing non. Morbi et ultricies sapien. Duis metus odio, commodo in tempor quis,
          </p>
          <p>
            - adipiscing non. Morbi et ultricies sapien. Duis metus odio, commodo in tempor quis,
          </p>
          <p>
            - adipiscing non. Morbi et ultricies sapien. Duis metus odio, commodo in tempor quis,
          </p>
          <p>
            - adipiscing non. Morbi et ultricies sapien. Duis metus odio, commodo in tempor quis,
          </p>
        </div>
      </div>

      <div className="buttons">
        <ResumeButton href="../../resume.pdf" target="_blank">
          {' '}
          Download resume{' '}
        </ResumeButton>
        <AniLink swipe top="entry" to="/" entryOffset={80}>
          Go to Homepage123
        </AniLink>
      </div>
    </div>
  );
};
export default AboutPage;
