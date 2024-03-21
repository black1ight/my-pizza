import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="sc-hABBmJ frJthX"
    speed={2}
    width={280}
    height={580}
    viewBox="0 0 280 580"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="189" r="129" />
    <rect x="10" y="330" rx="20" ry="20" width="258" height="65" />
    <rect x="10" y="410" rx="20" ry="20" width="258" height="30" />
    <rect x="10" y="497" rx="20" ry="20" width="258" height="30" />
    <rect x="10" y="540" rx="20" ry="20" width="120" height="30" />
    <rect x="150" y="540" rx="20" ry="20" width="120" height="30" />
    <rect x="10" y="454" rx="20" ry="20" width="258" height="30" />
  </ContentLoader>
);

export default Skeleton;
