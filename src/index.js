window.onload = function() {
  // Build a system
  const ui = SwaggerUIBundle({
    urls: [
  {
    "name": "Open Banking Directory API",
    "url": "directory-api-swagger.yaml"
  },
  {
    "name": "Directory Notifications API",
    "url": "directory-notifications-openapi.yaml"
  }
],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui
}
