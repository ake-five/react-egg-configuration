import React, { useEffect } from "react";
import requests from "../../utils/request";
export default function Home() {
  useEffect(() => {
    requests.get("/home");
  });
  return <div>首页1</div>;
}
