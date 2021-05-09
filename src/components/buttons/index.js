import styled from 'styled-components';

export const ResumeButton = styled.a`
  font-size: 1rem;
  letter-spacing: 2px;
  font-family: 'GT-Walsheim-Pro-Medium';
  border: 5px solid #e8e7e7;
  display: block;
  margin: 6rem 0 2rem 0;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0.5rem;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;

  &:hover {
    transform: translateX(6px);
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  }
`;
export default ResumeButton;
