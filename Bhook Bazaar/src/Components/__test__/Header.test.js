import { render, screen } from "@testing-library/react"
import Header from "../Header"


test("Should have a logo",()=>{
    render(<Header/>)

    const about = screen.getByText("About")
    expect(about).toBeInTheDocument();
})
