import getWord from "../data";

test("should retun random word", () => {
  const word = getWord();
  expect(word).not.toBeUndefined;
  expect(word.length).toBe(1);
});
