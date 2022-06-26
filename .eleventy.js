
const eleventyPluginSyntaxHighlighter = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");
const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItContainer = require("markdown-it-container");
const markdownItKatex = require("markdown-it-katex");
const markdownItSub = require("markdown-it-sub");
const markdownItSup = require("markdown-it-sup");
const markdownItTableOfContents = require("markdown-it-table-of-contents");
const markdownItTaskLists = require("markdown-it-task-lists");
const markdownItVideo = require("markdown-it-video");
const markdownItAnchor = require("markdown-it-anchor");


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
    markdownLibrary.use(markdownItContainer, 'warning', {
      
      validate: function(params) {
        return params.trim().match(/^warning\s+(.*)$/);
      },
      
      render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^warning\s+(.*)$/);

        console.log(m);
  
        if (tokens[idx].nesting === 1) {
          // opening tag
          return '<article class="message is-' + markdownLibrary.utils.escapeHtml(m[1]) + '"><div>' + markdownLibrary.utils.escapeHtml(m[1]) + '</div>\n';
  
        } else {
          // closing tag
          return '</article>\n';
        }
      }
    });
    markdownLibrary.use(markdownItKatex);
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