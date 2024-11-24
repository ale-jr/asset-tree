import { Outlet } from "react-router";
import { StyledMainContent } from "./styles";

export const MainContent: React.FC = () => {
  return (
    <StyledMainContent>
      <Outlet />
    </StyledMainContent>
  );
};
