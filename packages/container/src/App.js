import React, { useRef } from "react";
import { mount } from "marketing/MarketingApp";

console.log(mount);

export default () => {
  const conatiner = useRef(null);

  React.useEffect(() => mount(conatiner.current), []);

  return (
  <div>
    SOme Text
    <div ref={conatiner}></div>
  </div>
)};
