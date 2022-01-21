const express = require("express");

import React from "react";
import ReactDOMSever from "react-dom/server";
import Document from "./components/Document";
import App from "./components/App";

const router = express.Router();
const appString = ReactDOMSever.renderToString(<App />);
const html = ReactDOMSever.renderToStaticMarkup(
  <Document>{appString}</Document>
);
router.get("/", (req, res, next) => {
  res.status(200);
  res.send(html);
});
module.exports = router;
