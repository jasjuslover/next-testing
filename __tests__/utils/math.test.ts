import { add, times } from "@/utils/math";

describe("math", () => {
  it("add", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("times", () => {
    expect(times(2, 3)).toBe(6);
  });

  test("times negative case", () => {
    expect(times(2, 3)).not.toBe(7);
  });
});
