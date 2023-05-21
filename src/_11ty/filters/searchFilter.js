const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
  // what fields we'd like our index to consist of
  var index = elasticlunr(function () {
    this.addField("title");
    this.addField("entities");
    this.addField("tags");
    this.addField("attributes");
    this.addField("sources");
    this.setRef("id");
  });

  // loop through each page and add it to the index
  collection.forEach((page) => {
    index.addDoc({
      id: page.url,
      title: page.template.frontMatter.data.title,
      entities: page.template.frontMatter.data.entities,
      attributes: page.template.frontMatter.data.attributes,
      sources: page.template.frontMatter.data.sources,
      tags: page.template.frontMatter.data.tags,
    });
  });

  return index.toJSON();
};