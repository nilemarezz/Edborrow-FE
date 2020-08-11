import { RefactorDateJS, RefactorDateWithTimeJS } from './RefactorDateJS'
describe("RefactorDateJS.js", () => {
  describe("RefactorDateJS()", () => {
    it('should return the pretty date', () => {
      expect(RefactorDateJS(new Date())).toEqual(RefactorDateJS(new Date()))
    })
    it('should return null', () => {
      expect(RefactorDateJS()).toEqual(null)
    })
  })
  describe("RefactorDateWithTimeJS()", () => {
    it('should return the pretty date', () => {
      expect(RefactorDateWithTimeJS(new Date())).toEqual(RefactorDateWithTimeJS(new Date()))
    })
    it('should return the pretty date', () => {
      expect(RefactorDateWithTimeJS()).toEqual(null)
    })
  })

})