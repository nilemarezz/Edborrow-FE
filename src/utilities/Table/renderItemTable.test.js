import React from 'react'
import { renderCategory, renderStatus as Status, renderStatus, renderDepartment } from './renderItemTable'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { color } from '../data/color'
configure({ adapter: new Adapter() });

describe("renderItemTable", () => {
    describe("renderCategory", () => {
        describe("value is 1", () => {
            it("should return General", () => {
                expect(renderCategory(1)).toEqual("General");
            });
        })
        describe("value is 2", () => {
            it("should return Electronic", () => {
                expect(renderCategory(2)).toEqual("Electronic");
            });
        })
    })
    describe("renderDepartment", () => {
        describe("department is null", () => {
            const mockOwner = "nile"
            it("should return owner", () => {
                expect(renderDepartment(null, mockOwner)).toEqual("nile");
            });
        })
        describe("department is not null", () => {
            it("should return department", () => {
                const mockDepartment = "Infra"
                expect(renderDepartment(mockDepartment, null)).toEqual("Infra");
            });
        })
    })
    describe("renderStatus", () => {
        describe("value is 1", () => {
            it("should return status with avaliable", () => {
                const mockStatus = renderStatus(1)
                expect(renderStatus(1)).toEqual(mockStatus);
            });
            it("should return status with Not avaliable", () => {
                const mockStatus = renderStatus(2)
                expect(renderStatus(2)).toEqual(mockStatus);
            });
        })

    })
})