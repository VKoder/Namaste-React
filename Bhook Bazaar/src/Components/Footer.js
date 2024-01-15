import logo from "../Images/Logo.png";
 
const Footer = () => {
    const LiCss = "font-normal text-base pt-3 text-zinc-400 tracking-wide cursor-pointer"
    const titleCss = "font-extrabold text-lg text-gray-50 tracking-wide pb-4"

    return (
        <div className="flex justify-center items-start lg:px-12  md:px-12 px-4 lg:flex-row md:flex-row flex-row bg-black lg:gap-10 md:gap-10 gap-4 lg:w-12/12 md:w-12/12 w-12/12 lg:py-16 md:py-16 py-6 flex-wrap">
            <div className=" lg:w-3/12 w-6/12 md:w-3/12 ">
                <div className="flex justify-center items-center flex-col gap-2">
                <img className="lg:w-40 w-20 md:w-40" src={logo}></img><span className="font-extrabold text-lg text-gray-50 tracking-wide">Foody Hub</span>
                <span className={LiCss}>©2024 Technologies Pvt. Ltd</span>
                </div>
            </div>
            <div className="lg:w-2/12 w-4/12 md:w-2/12">
                <span className={titleCss}>Company</span>
                <ul>
                    <li className={LiCss}>About</li>
                    <li className={LiCss}>Careers</li>
                    <li className={LiCss}>Team</li>
                    <li className={LiCss}>Foody Instamart</li>
                    <li className={LiCss}>Foody One</li>
                </ul>
            </div>
            <div className="flex justify-start items-start flex-col lg:gap-10 md:gap-10 gap-5 lg:w-2/12 w-4/12 md:w-2/12 ">
            <div className=" ">
                <span className={titleCss}>Contact Us</span>
                <ul>
                    <li className={LiCss}>Help & Support</li>
                    <li className={LiCss}>Partner with us</li>
                    <li className={LiCss}>Ride with us</li>
                </ul>
            </div>
            <div className="">
                <span className={titleCss}>Legal</span>
                <ul>
                    <li className={LiCss}>Terms & Conditions</li>
                    <li className={LiCss}>Cookies</li>
                </ul>
            </div>
            </div>
            <div className="lg:w-2/12 w-4/12 md:w-2/12 ">
                <span className={titleCss}>We deliver to:</span>
                <ul>
                    <li className={LiCss}>Bangalore</li>
                    <li className={LiCss}>Pune</li>
                    <li className={LiCss}>Gurgaon</li>
                    <li className={LiCss}>Hyderabad</li>
                    <li className={LiCss}>Delhi</li>
                    <li className={LiCss}>Mumbai</li>
                </ul>
            </div>
           
        </div>
    )
}
export default Footer;