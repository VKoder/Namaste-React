import { useEffect } from "react";
import { CORS_API } from "../../Utils/constants";


const Grocery = () => {

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch( CORS_API + "https://api.consultant.list.astrotalk.com/AstroTalk/freeAPI/consultant/get-list/filter?appId=4&businessId=1&consultantTypeId=1&timezone=Asia/Kolkata&pageNo=0&pageSize=18&version=1.19.09.23&serviceId=4&languageId=1&hardwareId=&countryCode=&sortByRating=false&sortByExperience=false&sortByPrice=false&sortByOrder=false&isDesc=false&isPoAstrologer=true")
        const json = await data.json()
        console.log(json)
    }

    return (
        <div>
       fd
        </div>
    )
}
export default Grocery;