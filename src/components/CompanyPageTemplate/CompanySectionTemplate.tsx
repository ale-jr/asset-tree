import { CompanyPageHeader } from "../CompanyPageHeader";
import { MainContent } from "../MainContent";
import { Sidebar } from "../Sidebar";
import {
  StyledCompanyPageTemplate,
  StyledCompanyPageTemplateContent,
} from "./styles";

export const CompanyPageTemplate: React.FC = () => {
  return (
    <StyledCompanyPageTemplate>
      <CompanyPageHeader />
      <StyledCompanyPageTemplateContent>
        <Sidebar />
        <MainContent />
      </StyledCompanyPageTemplateContent>
    </StyledCompanyPageTemplate>
  );
};
