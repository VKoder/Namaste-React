import { sum } from "../sum"

test("Sum of two elements", ()=>{
    const result = sum(3,4)

    // Assertion
    expect(result).toBe(7)
})