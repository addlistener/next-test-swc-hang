import React from "react";

const Entry: React.FC = typeof window === "undefined" ? () => false : require('../Entry').default;

const Index = () => {
  return <Entry />;
};

export default Index;
