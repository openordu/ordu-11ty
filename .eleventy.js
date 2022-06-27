
const eleventyPluginSyntaxHighlighter = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginMermaid                   = require("@kevingimbel/eleventy-plugin-mermaid");
const markdownIt                      = require("markdown-it");
const markdownItEmoji                 = require("markdown-it-emoji");
const markdownItFootnote              = require("markdown-it-footnote");
const markdownItContainer             = require("markdown-it-container");
const markdownItTips                  = require("markdown-it-tips-bulma");
const markdownItAlign                 = require("markdown-it-align");
const markdownItKatex                 = require("markdown-it-texmath");
const markdownItSub                   = require("markdown-it-sub");
const markdownItSup                   = require("markdown-it-sup");
const markdownItTableOfContents       = require("markdown-it-table-of-contents");
const markdownItTaskLists             = require("markdown-it-task-lists");
const markdownItVideo                 = require("markdown-it-video");
const markdownItAnchor                = require("markdown-it-anchor");
const markdownItAttrs                 = require("markdown-it-attrs")

module.exports = function(eleventyConfig) {
    // assets we want to passthrough
    
    eleventyConfig.addPassthroughCopy('./src/main.css');
    eleventyConfig.addPassthroughCopy('./src/lib/main.js');
    eleventyConfig.addPassthroughCopy('./src/assets');

    // for markdown extensions
    let options = {
      html: true
    };
    let markdownLibrary = markdownIt(options).use(markdownItEmoji);
    
    markdownLibrary.use(markdownItFootnote);
    markdownLibrary.use(markdownItKatex);
    markdownLibrary.use(markdownItTips);
    markdownLibrary.use(markdownItAlign);
    markdownLibrary.use(markdownItSub);
    markdownLibrary.use(markdownItSup);
    markdownLibrary.use(markdownItTableOfContents);
    markdownLibrary.use(markdownItTaskLists);
    markdownLibrary.use(markdownItVideo);
    markdownLibrary.use(markdownItAnchor);

    eleventyConfig.setLibrary("md", markdownLibrary);

    // for mermaid
    eleventyConfig.addPlugin(pluginMermaid, {
      // load mermaid from local assets directory
      mermaid_js_src: '/assets/mermaid.min.js',
      html_tag: 'div',
      extra_classes: 'graph'
    });

    // eleventyConfig.addPlugin(eleventyPluginSyntaxHighlighter);
    
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };