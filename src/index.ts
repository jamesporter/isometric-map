/**
 * @param height The height of the (vertical parts of) isometric grid cells
 * @returns A function mapping from [x,y,z] to [x,y].
 */
export default (height: number) => {
  const w = (height * Math.sqrt(3)) / 2;
  return ([x, y, z]: [number, number, number]): [number, number] => [
    -w * (z - x),
    -height * (x / 2 + y + z / 2)
  ];
};
