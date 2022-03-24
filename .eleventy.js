const now = String(Date.now());
const { version } = require("./package.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/tailwind.config.js");
  eleventyConfig.addWatchTarget("./src/styles.css");

  eleventyConfig.addShortcode("version", () => version);
  eleventyConfig.addShortcode("start_time", () => now);

  eleventyConfig.addShortcode(
    "default_title",
    () => "Eleventy (11ty) Tailwind CSS Starter"
  );

  return {
    // Control which files Eleventy will process
    templateFormats: ["njk"],

    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  };
};
