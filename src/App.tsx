import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./i18n";

import { PageTemplate } from "./components/PageTemplate";
import { CompanyPageTemplate } from "./components/CompanyPageTemplate";
import { CompanyIndex } from "./pages/Company/Index";
import { ComponentIndex } from "./pages/Company/Component/Index";
import { ComponentInfo } from "./pages/Company/Component/Info";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <PageTemplate>
        <Routes>
          <Route index element={<Navigate to="company" />} />
          <Route path="company">
            <Route index element={<CompanyIndex />} />
            <Route path=":companyId">
              <Route index element={<Navigate to="component" />} />
              <Route path="component" element={<CompanyPageTemplate />}>
                <Route index element={<ComponentIndex />} />
                <Route path=":componentId" element={<ComponentInfo />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTemplate>
    </BrowserRouter>
  );
}

export default App;
