import React, { useEffect, useRef } from "react";
//importing from marketing app from remote
import { mount } from "dashboard/DashboardApp";

export default function DashboardApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}
