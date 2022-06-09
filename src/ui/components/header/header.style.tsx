import { styled } from "@mui/material";

export const HeaderContainer = styled("header")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding: ${({theme}) => theme.spacing(6)};

  a {
    font-size: 12px;
    color: #bdb3b3;
  }
`;

export const Logo = styled("img")`
  width: 230px;
`;
