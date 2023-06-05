const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
  // what fields we'd like our index to consist of
  var index = elasticlunr(function () {
    this.setRef('id');
    this.addField('title');
    this.addField('entities');
    this.addField('attributes');
    this.addField('sources');
    this.addField('tags');
    this.addField('categories');
    this.addField('summary');
    this.pipeline.remove(elasticlunr.stopWordFilter);
    this.pipeline.remove(elasticlunr.stemmer);
    // this.pipeline.addConditionally(elasticlunr.trimmer, elasticlunr.stopWordFilter, elasticlunr.stemmer);
    // this.saveDocument(false);
  }, {
    fields: {
      title: {boost: 2, bool: "AND", expand: true},
      entities: {boost: 2},
      attributes: {boost: 1},
      sources: {boost: 1},
      tags: {boost: 1},
      categories: {boost: 1},
      summary: {boost: 1}
    },
    bool: "OR",
    expand: true,
    min_token_length: 1 // Set this value as required
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
      categories: page.template.frontMatter.data.categories,
      summary: page.template.frontMatter.data.summary,
    });
  });

  return index.toJSON();
};