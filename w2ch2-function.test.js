function strictEquals(a, b) {
  let result = Object.is(a, b);
  if (Number.isNaN(a)) {
    result = false;
  }
  if (Number.isNaN(b)) {
    result = false;
  }
  if (Object.is(a, 0)) {
    if (Object.is(b, -0)) {
      result = true;
    }
  }
  if (Object.is(a, -0)) {
    if (Object.is(b, 0)) {
      result = true;
    }
  }
  return result;
}

describe("Given the strictEquals function", () => {
  describe("When it receives 1, 1", () => {
    test("Then it should return true", () => {
      const a = 1;
      const b = 1;
      const expectedResult = true;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives NaN,NaN", () => {
    test("Then it should return false as rule exception", () => {
      const a = NaN;
      const b = NaN;
      const expectedResult = false;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 0, -0", () => {
    test("Then it should return true as rule exception", () => {
      const a = 0;
      const b = -0;
      const expectedResult = true;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives -0, 0", () => {
    test("Then it should return true as rule exception", () => {
      const a = -0;
      const b = 0;
      const expectedResult = true;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 1,'1'", () => {
    test("Then it should return false", () => {
      const a = 1;
      const b = "1";
      const expectedResult = false;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives true,false", () => {
    test("Then it should return false", () => {
      const a = true;
      const b = false;
      const expectedResult = false;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives false,false", () => {
    test("Then it should return true", () => {
      const a = false;
      const b = false;
      const expectedResult = true;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 'Water','Oil'", () => {
    test("Then it should return true", () => {
      const a = "Water";
      const b = "Oil";
      const expectedResult = false;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives {}, {}", () => {
    test("Then it should return true", () => {
      const a = {};
      const b = {};
      const expectedResult = false;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });
});
