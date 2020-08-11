import { checkToken, clearToken, getToken, setToken } from './checkToken'

describe("checkToken.js", () => {
  describe("checkToken()", () => {
    it("should return false", () => {
      expect(checkToken()).toBeFalsy()
    })
  })
  describe("checkToken()", () => {
    it("should return undefined", () => {
      expect(clearToken()).toBeFalsy()
    })
  })
  describe("getToken()", () => {
    it("should return undefined", () => {
      expect(getToken()).toBeFalsy()
    })
  })
  describe("setToken()", () => {
    it("should return undefined", () => {
      expect(setToken()).toBeFalsy()
    })
  })
})