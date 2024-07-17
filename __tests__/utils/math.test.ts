import { add } from "@/utils/math";

describe("math", () => {
  it("add", () => {
    expect(add(2, 3)).toBe(5);
  });
});
