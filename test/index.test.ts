import isometricMap from "../index";

test("An example calculation", () => {
  const iso = isometricMap(2);
  const [x1, y1] = iso([1, 1, 1]);
  expect(x1).toBeCloseTo(0);
  expect(y1).toBeCloseTo(-4);
});

test("x,y,z examples calculation", () => {
  const iso = isometricMap(2);
  const [x1, y1] = iso([0, 4, 0]);
  expect(x1).toBeCloseTo(0);
  expect(y1).toBeCloseTo(-8);

  const [x2, y2] = iso([4, 0, 0]);
  expect(x2).toBeCloseTo(6.928203230275509);
  expect(y2).toBeCloseTo(-4);

  const [x3, y3] = iso([0, 0, 4]);
  expect(x3).toBeCloseTo(-6.928203230275509);
  expect(y3).toBeCloseTo(-4);
});
