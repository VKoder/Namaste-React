const OfferCard = ({offdata}) => {

    const {header, couponCode, description, offerTag} = offdata.info

    return (
      
        <div className="flex flex-col items-center justify-between border border-gray-300 rounded-md px-1 py-2 w-3/12 flex-shrink-0">
            <div className="flex flex-row items-center gap-2">
                <span className="w-4"><img src="https://media-assets.swiggy.com/offers/generic"></img></span>
                <span style={{letterSpacing: -0.3, wordSpacing: 2}} className="text-sm font-extrabold text-gray-500">{header}</span>
            </div>
            <div className="flex flex-row items-center">
                <span style={{letterSpacing: -0.3, wordSpacing: 1}} className="text-xs font-semibold text-gray-400 ">{couponCode}|{description}</span>
            </div>
        </div>
    
    )
}
 export default OfferCard