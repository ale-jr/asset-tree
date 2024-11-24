import { Route } from "react-router";
import { CompanyIndex } from "./Index";

export const CompanyRoutes: React.FC = () => {
  return (
    <>
      <Route index element={<CompanyIndex />} />
    </>
  );
};
