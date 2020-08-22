import { checkEmail, checkName, checkTelNo } from "./itemIsDepartment"

describe("itemIsDepartment.js", () => {
  describe("check name", () => {
    describe("if value = department id", () => {
      it("should return department name", () => {
        expect(checkName(1234, "Infra", "0001", "Nile")).toEqual("Infra")
      })
    })
    describe("if value = user id", () => {
      it("should return user name", () => {
        expect(checkName(null, null, "0001", "Nile")).toEqual("Nile")
      })
    })
    describe("if value = null", () => {
      it("should return -", () => {
        expect(checkName()).toEqual("-")
      })
    })
  })

  describe("check email", () => {
    describe("if value = department id", () => {
      it("should return department email", () => {
        expect(checkEmail(1234, "Infra@infra.com", null, null)).toEqual("Infra@infra.com")
      })
    })
    describe("if value = userid", () => {
      describe("if email = string", () => {
        it("should return -", () => {
          expect(checkEmail(null, null, "0001", "")).toEqual("-")
        })
      })
      describe("if email != string", () => {
        it("should return email", () => {
          expect(checkEmail(null, null, "0001", "nile@gmail.com")).toEqual("nile@gmail.com")
        })
      })
    })
    describe("if department id = null", () => {
      it("should return -", () => {
        expect(checkEmail(null, "infra@infra.com", null, null)).toEqual("-")
      })
    })
  })

  describe("check tel no", () => {
    describe("if value = department id", () => {
      it("should return department tel no", () => {
        expect(checkTelNo(1234, "0800000000", null, null)).toEqual("0800000000")
      })
    })
    describe("if value = user id", () => {
      describe("if tel no = string", () => {
        it("should return -", () => {
          expect(checkTelNo(null, "0800000000", "0001", "")).toEqual("-")
        })
      })
      describe("if user id != string", () => {
        it("should return user tel no", () => {
          expect(checkTelNo(null, "0800000000", "0001", "0810000000")).toEqual("0810000000")
        })
      })
    })
    describe("if department id = null", () => {
      it("should return -", () => {
        expect(checkTelNo(null, "0800000000", null, "0810000000")).toEqual("-")
      })
    })
  })
})
