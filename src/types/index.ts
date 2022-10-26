export type PostTypes = {
  readonly title: string | null,
  readonly description: string | null,
  readonly tag: readonly (string | null)[] | null,
  readonly date: string | null
} | null;
