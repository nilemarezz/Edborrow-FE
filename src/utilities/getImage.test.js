import { renderImage } from './getImage'

describe("renderImage", () => {
    describe(" value is null", () => {
        it("should return no image", () => {
            const render = renderImage(null)
            expect(render).toEqual("/noimage.png")
        })
    })
    describe(" value is picture", () => {
        it("should return image", () => {
            const render = renderImage("image")
            expect(render).toEqual("image")
        })
    })
})