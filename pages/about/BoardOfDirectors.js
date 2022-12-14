import LeaderShipBanner from "../../components/Layouts/about/leadership/LeaderShipBanner"
import LeaderShip from "../../components/Layouts/about/leadership/LeaderShip"
import LeaderShipData from "../../components/Layouts/about/leadership/LeaderData"
import { useState } from "react"

const BoardOfDirectors = () => {
  const [leaderData, setleaderData] = useState(LeaderShipData);
  console.log(leaderData);
  return (
    <div>
        <LeaderShipBanner/>
        <LeaderShip sendLeaderData={leaderData}/>
    </div>
  )
}

export default BoardOfDirectors