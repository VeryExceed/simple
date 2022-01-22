const express = require("express");

import React from "react";
import ReactDOMSever from "react-dom/server";
import { StaticRouter,matchPath } from "react-router-dom";
import Document from "../components/Document";
import App from "../components/App";
import { fetchHome } from "../core/api";
import routes from '../core/routes'

const router = express.Router();

router.get("*", async (req, res, next) => {
  let data = {};
  let getData = null
  routes.some(route => {
    const match = matchPath(req.path,route)
    if (match) {
      getData = (route.component || {}).getData
    }
    return match
  })
  if (typeof getData === 'function') {
    try {
      data = await getData();
    } catch (error) {}
  }
 
  // 组件渲染
  const appString = ReactDOMSever.renderToString(
    <StaticRouter location={req.url} context={data}>
      <App />
    </StaticRouter>
  );
  const html = ReactDOMSever.renderToStaticMarkup(
    <Document>{appString}</Document>
  );
  res.send(html);
});
module.exports = router;
