import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([10, 30, 17, 18, 25, 11])).toBe(83);
  });
});

describe("isValidDNA", () => {
  test("return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {
    expect(isValidDNA("GCTATAB")).toBe(true);
    expect(isValidDNA("SSOPP")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of ACTG would have a complementary DNA string of TGAC", () => {
    expect(getComplementaryDNA("GCTATA")).toBe("TATAGC");
    expect(getComplementaryDNA("CTTAACCAGCGGACACGGGCTTGGC")).toBe("GCCAAGCCCGTGTCCGCTGGTTAAG");
  });
});

describe("isItPrime", () => {
  test("return true/false depending on whether it is a prime number or not", () => {
    expect(isItPrime(23)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(24)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays, each filled with n items", () => {
    expect(createMatrix(3, "foo")).toStrictEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(5, "wow")).toStrictEqual([
      ["wow", "wow", "wow", "wow", "wow"],
      ["wow", "wow", "wow", "wow", "wow"],
      ["wow", "wow", "wow", "wow", "wow"],
      ["wow", "wow", "wow", "wow", "wow"],
      ["wow", "wow", "wow", "wow", "wow"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("return true/false depending on whether there are enough staff scheduled for the given day", () => {
    const staffArr = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },{ name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },{ name: "Kary", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday", "Thursday"] }];
    expect(areWeCovered(staffArr, "Tuesday")).toBe(true);
    expect(areWeCovered(staffArr, "Monday")).toBe(false);
  });
});