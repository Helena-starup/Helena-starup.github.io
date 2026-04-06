module.exports = function (eleventyConfig) {
    // This tells Eleventy to copy styles.css to _site/styles.css
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("works");

    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};