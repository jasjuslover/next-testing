import { delay } from "@/utils/delay";

describe("delay", () => {
  jest.useFakeTimers();

  it("delay", async () => {
    const delayInMs = 3000;
    const delayPromise = delay(delayInMs);

    jest.advanceTimersByTime(delayInMs);

    await expect(delayPromise).resolves.toBeUndefined();
  });
});
