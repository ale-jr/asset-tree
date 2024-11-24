import { Header } from "../Header";
import { StyledPageTemplate, StyledPageTemplateContent } from "./styles";

export const PageTemplate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <StyledPageTemplate>
      <Header />
      <StyledPageTemplateContent>{children}</StyledPageTemplateContent>
    </StyledPageTemplate>
  );
};
