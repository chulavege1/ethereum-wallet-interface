import React from "react";
import Sun from "~UI/space-ui/Sun";
import Header from "~UX/header";
import Navigation from "../route";
import "./app.sass";

export const App: React.FC = () => {
  return (
    <div>
      {/* Sun main theme app */}
      <Sun />
      <Header />
      {/* App route url navigation with react-lazy */}
      <Navigation />
    </div>
  );
};
