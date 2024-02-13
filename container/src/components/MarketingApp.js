import React, { useEffect, useRef } from "react";
//importing from marketing app from remote
import { mount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}
