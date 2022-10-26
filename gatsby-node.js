exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkDownRemark implements Node {
      frontmatter: Frontmatter
      preview: File @link(from: "fields.localFile")
    }
    
    type Frontmatter {
      title: String!
      date: Date!
      description: String!
      tag: [String]
      preview: String
      slug: String!
    }
  `);
};

exports.onCreateNode = async (
    {
      node,
      actions: { createNode, createNodeField },
      createNodeId,
      getCache,
    }
  ) => {
  if (node.internal.type === 'MarkdownRemark' || 'AllMarkdownRemark') {
  }
};
