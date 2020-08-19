import reducer from "./ApplicationForm";
import * as types from "../actions/ApplicationFormAction";

describe("reducers/ApplicationForm", () => {
  describe("initial state", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    });
  });

  describe("LOADING_SUBMIT_FORM", () => {
    it("should return the loading with true", () => {
      expect(reducer(undefined, { type: types.LOADING_SUBMIT_FORM, payload: true })).toEqual({
        loading: true,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_ID", () => {
    it("should return state with id", () => {
      expect(reducer(undefined, { type: types.SET_FORM_ID, payload: "00000" })).toEqual({
        loading: false,
        id: "00000",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_NAME", () => {
    it("should return state with name", () => {
      expect(reducer(undefined, { type: types.SET_FORM_NAME, payload: "John" })).toEqual({
        loading: false,
        id: "",
        name: "John",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_SURNAME", () => {
    it("should return state with surname", () => {
      expect(reducer(undefined, { type: types.SET_FORM_SURNAME, payload: "Swift" })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "Swift",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_EMAIL", () => {
    it("should return state with email", () => {
      expect(reducer(undefined, { type: types.SET_FORM_EMAIL, payload: "John.s@gmail.com" })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "John.s@gmail.com",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_TELNO", () => {
    it("should return state with tel no", () => {
      expect(reducer(undefined, { type: types.SET_FORM_TELNO, payload: "080-000-0000" })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "080-000-0000",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_ADVISOR", () => {
    it("should return state with advisor", () => {
      expect(reducer(undefined, { type: types.SET_FORM_ADVISOR, payload: "Dumbledore" })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "Dumbledore",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_BORROWDATE", () => {
    it("should return state with borrow date", () => {
      expect(reducer(undefined, { type: types.SET_FORM_BORROWDATE, payload: "08-13-2020" })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "08-13-2020",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_RETURNDATE", () => {
    it("should return state with return date", () => {
      expect(reducer(undefined, { type: types.SET_FORM_RETURNDATE, payload: "08-14-2020" })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "08-14-2020",
        purpose: "",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_PURPOSE", () => {
    it("should return state with purpose", () => {
      expect(reducer(undefined, { type: types.SET_FORM_PURPOSE, payload: "I want to." })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "I want to.",
        usePlace: "",
      });
    })
  })

  describe("SET_FORM_USEPLACE", () => {
    it("should return state with use form", () => {
      expect(reducer(undefined, { type: types.SET_FORM_USEPLACE, payload: "CB2" })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "CB2",
      });
    })
  })

  describe("RESET_FORM", () => {
    it("should return state with use form", () => {
      expect(reducer(undefined, { type: types.RESET_FORM })).toEqual({
        loading: false,
        id: "",
        name: "",
        surname: "",
        email: "",
        telNo: "",
        advisor: "",
        borrowDate: "",
        returnDate: "",
        purpose: "",
        usePlace: "",
      });
    })
  })
});
