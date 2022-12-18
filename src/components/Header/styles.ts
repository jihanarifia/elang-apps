import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #004d68;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: 600;
  color: #00384b;
  transition: color 0.2s ease-in;
  margin: 0.5rem 1.5rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  --c: rgb(241, 184, 35); /* the color */
  --s: 0.15em;

  line-height: 1.1em;
  padding-bottom: calc(2.1 * var(--s));
  background: conic-gradient(from 135deg at top, var(--c) 90deg, #0000 0) left 0
      bottom var(--s) / calc(2 * var(--s)) var(--s) repeat-x,
    conic-gradient(from -45deg at bottom, var(--c) 90deg, #0000 0) left var(--s)
      bottom 0 / calc(2 * var(--s)) var(--s) repeat-x;
  -webkit-mask: linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) 50% 100% / var(--_p, 0%) padding-box no-repeat;
  transition: 0.5s;

  &:hover,
  &:active,
  &:focus {
    // color: rgb(241, 184, 35);
    // text-underline-position: under;
    // text-decoration: rgb(241, 184, 35) wavy underline;
    --_p: 100%;
    color: var(--c);
  }
`;

export const SpanContact = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: rgb(241, 184, 35);
    text-underline-position: under;
    text-decoration: rgb(241, 184, 35) wavy underline;
  }
`;
