import useOnlineStatus from "../Utils/useOnlineStatus";

const About = ()=>  {
  const OnlineStatus = useOnlineStatus();

  if (!OnlineStatus) {
    return <h1>Your Offline</h1>
  }  
    return (
      <h1>Hiee</h1>
      
            
      
    )
}

export default About;
