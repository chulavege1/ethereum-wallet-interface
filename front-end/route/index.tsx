import React, { ReactElement, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Liquidity_market = React.lazy(() => import("~UX/liquidity-market"));
const Dashboard = React.lazy(() => import("~UX/dashboard"));

const Navigation: React.FC = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="market"
        element={
          <div>
            <Suspense fallback={<>Loading...</>}>
              <Liquidity_market />
            </Suspense>
          </div>
        }
      />

      <Route
        path="dashboard"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Dashboard />
          </Suspense>
        }
      />

      <Route path="*" element={<>Not known path</>} />
    </Routes>
  );
};

export default Navigation;
