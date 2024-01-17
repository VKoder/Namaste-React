import Contact from "../Contact"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"


it("Should load Contact Component", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBe
})