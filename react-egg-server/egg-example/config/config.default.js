/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_gmmobject123";

  // add your middleware config here
  config.middleware = [];
  config.security = {
    xframe: {
      enable: false
    },
    csrf: {
      enable: false
    },
    domainWhiteList: ["http://localhost:3000"]
  };

  config.cors = {
    credentials: true,
    allowmethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
    origin: "*"
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
