const OfferCard = () => {
    return (
        <div className="flex items-center flex-row w-4/12  bg-cyan-200 overflow-hidden py-2 px-1 relative">
            <div className="-rotate-90 w-1-12">
                <span style={{fontSize:"10px"}} className="text-sm font-bold -pr-4 text-center text-orange-500">WELCOME</span>
            </div>
        <div className="flex flex-col items-center justify-between w-11/12">
            <div className="flex flex-row items-center gap-2">
                <span className="w-4"><img src="https://media-assets.swiggy.com/offers/generic"></img></span>
                <span style={{letterSpacing: -0.3, wordSpacing: 2}} className="text-sm font-extrabold text-gray-500">60% OFF UPTO RS100</span>
            </div>
            <div className="">
                <span style={{letterSpacing: -0.9, wordSpacing: 1}} className="text-xs font-semibold text-gray-400 ">USE WELCOMBACK | ABOVE RS459</span>
            </div>
        </div>
        </div>
    )
}
 export default OfferCard