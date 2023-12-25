import { styled } from "styled-components";

export const TodoStyle = styled.section`
  position: relative;
  width: 600px;
  form {
    margin-block-end: 1rem;
    & > div:first-child {
      input {
        width: 100%;
        height: 55px;
        background: ${(p) => p.theme.todoBg};
        border: none;
        outline: none;
        border-radius: 5px;
        padding-inline: 3rem;
        color: ${(p) => p.theme.color};
        position: relative;
      }
      &::before {
        content: "";
        z-index: 100;
        color: white;
        width: 20px;
        height: 20px;
        border: 1px solid ${(p) => p.theme.dkGrayishBlue_2};
        border-radius: 50%;
        position: absolute;
        left: 0;
        margin: 1rem 1rem;
        cursor: pointer;
      }
    }
  }
  .tasks {
    border-radius: 5px;
    background-color: ${(p) => p.theme.todoBg};
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.5);
    /* .todos { */
    .filtered--task,
    .empty--task {
      text-align: center;
      font-weight: bold;
      color: #fff;
      padding-block: 1rem;
      border-bottom: 1px solid ${(p) => p.theme.borderColor};
      &.light--mode {
        color: ${(p) => p.theme.brightBlue};
      }
    }
    /* } */
    .filter {
      display: flex;
      justify-content: space-between;
      padding: 1.3rem 2rem;
      gap: 2rem;
      font-size: 0.9rem;
      color: ${(p) => p.theme.dkGrayishBlue_2};
      font-weight: 700;
      .active--filter {
        color: ${(p) => p.theme.brightBlue};
      }
      .filter--filter {
        display: flex;
        justify-content: space-around;
        flex-grow: 1;
        span {
          &:hover {
            color: #fff;
            cursor: pointer;
          }
          &.light--mode:hover {
            color: ${(p) => p.theme.vDkGrayishBlue_2};
          }
        }
      }
    }
  }
  .clear--finished {
    &:hover {
      cursor: pointer;
      color: #fff;
    }
    &.light--mode:hover {
      color: ${(p) => p.theme.vDkGrayishBlue_2};
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    .filter--filter {
      position: absolute;
      bottom: -4rem;
      width: 100%;
      left: 0;
      padding: 1rem 1rem;
      background-color: ${(p) => p.theme.todoBg};
      border-radius: 8px;
      box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const TodoDiv = styled.div`
  padding: 1rem 0.5rem;
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-weight: 400;

  & > span {
    margin-left: 1rem;
    border: ${(p) =>
      p.isactive
        ? `1px solid ${p.theme.brightBlue}`
        : p.iscomplete
        ? ""
        : `1px solid ${
            p.isdark ? p.theme.vDkGrayishBlue_3 : p.theme.lthGrayishBlue_2
          }`};

    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background: ${(p) =>
      p.iscomplete
        ? `linear-gradient(${p.theme.bgGradient1}, ${p.theme.bgGradient2})`
        : ``};
  }

  p {
    /* font-weight: bold; */
    flex-grow: 1;
    padding-block: 0.3rem;
    text-decoration: ${(p) =>
      p.isactive ? "underline" : p.iscomplete ? "line-through" : ""};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    color: ${(p) => (p.iscomplete ? p.theme.dkGrayishBlue_2 : p.theme.color)};
    span {
      display: none;
    }
    &:hover {
      span {
        display: block;
        img {
          width: 100%;
        }
      }
    }
  }
`;
