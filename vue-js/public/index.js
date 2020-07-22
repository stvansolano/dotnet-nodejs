
module.exports = function () {
    let html = `@page
@model IndexModel
<!DOCTYPE html><html><head>
<title>@ViewData["Title"]</title>
<meta charset=utf-8><meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1">
<link rel="icon" href="favicon.ico"></head>
<body><div id="app"></div></body></html>`;

    return html;
};