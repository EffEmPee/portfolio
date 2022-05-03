import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw - 2rem;
  height: 100vh;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  margin-left: 2rem;
  padding-left: 0.5rem;

  border-left: 1.5px solid ${props => props.theme.colors.primary};

  .profile {
    width: 18%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-weight: lighter;
      font-size: 3rem;
      color: ${props => props.theme.colors.primary};
      margin-top: 40px;
    }

    span {
      font-weight: bold;
      color: ${props => props.theme.colors.primary};
    }

    .profile-footer {
      margin: auto 0 6% 30%;
      text-align: right;

      p {
        margin-bottom: 0.5rem;
      }

      svg {
        transition: margin-left 0.3s ease-in-out;
      }

      a:hover {
        svg {
          margin-left: 0.5rem;
        }
      }
    }
  }

  .dev {
    font-size: 12rem;
    color: ${props => props.theme.colors.primary};

    position: absolute;
    right: 30px;
    height: 100%;
    text-align: center;

    writing-mode: vertical-rl;
    text-orientation: upright;
    user-select: none;
  }
`;
