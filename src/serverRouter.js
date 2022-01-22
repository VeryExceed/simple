const express = require("express");

import React from "react";
import ReactDOMSever from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Document from "./components/Document";
import App from "./components/App";

const router = express.Router();

router.get("*", (req, res, next) => {
  const appString = ReactDOMSever.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const html = ReactDOMSever.renderToStaticMarkup(
    <Document>{appString}</Document>
  );
  res.send(html);
});
module.exports = router;
