export function createOrdinal({ domain, range }) {
  const indexMap = new Map(domain.map((d, i) => [d, i]));
  return (x) => {
    const index = indexMap.get(x);
    return range[index % range.length];
  };
}
