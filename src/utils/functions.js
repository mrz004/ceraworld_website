export function titleCase(str) {
  return str
    .split()
    .map((wrd) => wrd[0].toUpperCase() + wrd.slice(1).toLowerCase())
    .join(" ");
}
