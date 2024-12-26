"use strict";
const fsCt = require("fs").promises;
const pathCt = "./typegen/types.gen.ts";

module.exports = {
  getContentTypes: async () => {
    try {
      let data = await fsCt.readFile(pathCt, "utf8");
      return data;
    } catch (err) {
      return err;
    }
  },
};
