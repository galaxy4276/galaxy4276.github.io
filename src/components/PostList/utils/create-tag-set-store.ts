function createTagSetStore(allMdx: Queries.Mdx[]): string[] {
  const tagStore = new Set<string>();
  const tags = allMdx
    .map(({ frontmatter }) => frontmatter?.tag as string | undefined)
    .flat();
  tags.forEach(tag => {
    if (tag) tagStore.add(tag);
  });
  return Array.from(tagStore);
}

export default createTagSetStore;
