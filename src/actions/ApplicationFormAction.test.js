import * as ApplicationForm from "./ApplicationFormAction";

describe("Test Application Form Action Creator", () => {
    describe("setFormID", () => {
        it("should create an action to set form ID", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_ID, 
            payload: []
          };
          expect(ApplicationForm.setFormID([])).toEqual(expectedAction);
        });
      });
      describe("setFormName", () => {
        it("should create an action to set form name", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_NAME, 
            payload: []
          };
          expect(ApplicationForm.setFormName([])).toEqual(expectedAction);
        });
      });
      describe("setFormSurname", () => {
        it("should create an action to set form surname", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_SURNAME, 
            payload: []
          };
          expect(ApplicationForm.setFormSurname([])).toEqual(expectedAction);
        });
      });
      describe("setFormEmail", () => {
        it("should create an action to set form email", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_EMAIL, 
            payload: []
          };
          expect(ApplicationForm.setFormEmail([])).toEqual(expectedAction);
        });
      });
      describe("setFormTelNo", () => {
        it("should create an action to set form telephone number", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_TELNO, 
            payload: []
          };
          expect(ApplicationForm.setFormTelNo([])).toEqual(expectedAction);
        });
      });
      describe("setFormAdvisor", () => {
        it("should create an action to set form advisor", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_ADVISOR, 
            payload: []
          };
          expect(ApplicationForm.setFormAdvisor([])).toEqual(expectedAction);
        });
      });
      describe("setFormBorrowDate", () => {
        it("should create an action to set form borrow date", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_BORROWDATE, 
            payload: []
          };
          expect(ApplicationForm.setFormBorrowDate([])).toEqual(expectedAction);
        });
      });
      describe("setFormReturnDate", () => {
        it("should create an action to set form return date", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_RETURNDATE, 
            payload: []
          };
          expect(ApplicationForm.setFormReturnDate([])).toEqual(expectedAction);
        });
      });
      describe("setFormPurpose", () => {
        it("should create an action to set form purpose", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_PURPOSE, 
            payload: []
          };
          expect(ApplicationForm.setFormPurpose([])).toEqual(expectedAction);
        });
      });
      describe("setFormUsePlace", () => {
        it("should create an action to set form use place", () => {
          const expectedAction = {
            type: ApplicationForm.SET_FORM_USEPLACE, 
            payload: []
          };
          expect(ApplicationForm.setFormUsePlace([])).toEqual(expectedAction);
        });
      });
      describe("resetForm", () => {
        it("should create an action to reset form", () => {
          const expectedAction = {
            type: ApplicationForm.RESET_FORM, 
          };
          expect(ApplicationForm.resetForm([])).toEqual(expectedAction);
        });
      });
      describe("sendForm", () => {
        it("should create an action to send form", () => {
          const expectedAction = {
            type: ApplicationForm.SEND_FORM, 
          };
          expect(ApplicationForm.sendForm([])).toEqual(expectedAction);
        });
      });
      describe("loadingSubmitForm", () => {
        it("should create an action to loading submit form", () => {
          const expectedAction = {
            type: ApplicationForm.LOADING_SUBMIT_FORM, 
            payload: []
          };
          expect(ApplicationForm.loadingSubmitForm([])).toEqual(expectedAction);
        });
      });
})
