function createTagSetStore(mdList: Queries.MarkdownRemark[]): string[] {
  const tagStore = new Set<string>();
  const tags = mdList
    .map(({ frontmatter }) => frontmatter?.tag as string | undefined)
    .flat();
  tags.forEach(tag => {
    if (tag) tagStore.add(tag);
  });
  return Array.from(tagStore);
}

export default createTagSetStore;
