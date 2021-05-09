import styled from 'styled-components';
import variables from '../data/variables';

export const ContainerLayout = styled.div`
  width: ${variables.width};
  margin-left: auto;
  margin-right: auto;
  &.wrapper {
    max-width: ${variables.wrapperWidth};
    margin: auto;
  }
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    max-width: 75rem;
  }
`;

export const SectionIntro = styled.div`
  padding: 8rem 0 4rem 0;
  @media (max-width: ${variables.breakpointPhone}) {
    padding: 4rem 0 4rem 0;
  }
`;

export const AboutSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 10rem;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-family: 'GT-Walsheim-Pro-Bold';
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`;
export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2;
  color: #232323;
  text-transform: capitalize;
  a {
    color: #3f51b5;
    text-decoration: underline;
  }
`;
export const SubTitle = styled.h2`
  font-family: 'GT-Walsheim-Pro-Medium';
  margin-top: 10px;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  @media (min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
  }
`;

export const FontLink = styled.div`

display:flex;
flex-direction: row;


a span{
  display:block;
  vertical-align: middle;
  font-size:14px;
}
a {
  font-size: 40px;
  padding: 10px;
  font-family: 'GT-Walsheim-Pro-Medium';
  transition: all 200ms ease-in-out;

  
  

  &:hover {
    box-shadow: 0px 0px 36px 25px rgb(0 0 0 / 3%);

    &::after {
      z-index: 1;
      position: absolute;
      bottom: -1px;
      left: 0px;
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      background-color: rgb(255, 45, 45);
      transform: scale(0, 1);
      transform-origin: 100% 50%;
      will-change: transform;
      transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0s, -webkit-transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0s
    }
}
> svg {
  width: 40px;
  height: 40px;
  path{
    fill: #fbc02d;
    stroke: green;
  }

}
`;
