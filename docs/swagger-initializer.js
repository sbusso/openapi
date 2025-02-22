window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
        name: "OpenWebUI API",
        url: "https://sbusso.github.io/openapi/openwebui/openapi.json",
      },
      // Add more API definitions here like:
      // {
      //   name: "Another API",
      //   url: "path/to/another/openapi.json"
      // }
    ],
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });

  //</editor-fold>
};
