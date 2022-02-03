import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#004D68"};
  color: ${(p) => (p.color ? "#004D68" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(30 58 88 / 15%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(241, 184, 35);
    background-color: rgb(241, 184, 35);
  }
`;
