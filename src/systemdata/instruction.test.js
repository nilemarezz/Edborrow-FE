import { instruction } from './instruction'
describe("get instruction correct", () => {
    it("should return the set of instruction", () => {
        const expectedInstruction = {
            head: "ขั้นตอนการยืม",
            no1: "1. เลือกอุปกรณ์และยืนยันการยืม",
            no2: "2. รอการอนุมัติจากอาจารย์ที่ปรึกษา สามารถเข้าไปดูสถานะการยืมได้ใน History",
            no3: "3. หลังจากอาจารย์ หรือผู้บังคับบัญชาอนุมัติ ให้รอเจ้าของอุปกรณ์ยืนยัน",
            no4: "4. หลังจากเจ้าของอุปกรณ์ยืนยัน หัวข้อ Borrowing Status จะเปลี่ยนเป็น Not Pickup และสามารถเข้าไปเอาอุปกรณ์ได้",
        }
        expect(instruction).toEqual(expectedInstruction);
    });
});