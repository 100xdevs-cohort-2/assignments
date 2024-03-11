import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import {
  networkAtom,
  jobsAtom,
  notificationsAtom,
  messagingAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  const [networkCount, setNetworkCount] = useRecoilState(networkAtom);
  const [jobsCount, setJobsCount] = useRecoilState(jobsAtom);
  const [notificationsCount, setNotificationsCount] = useRecoilState(notificationsAtom);
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
  const [totalNotification, setTotalNotification] = useRecoilState(totalNotificationSelector);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(response => {
        const { network, jobs, notifications, messaging } = response.data;

        setNetworkCount(network);
        setJobsCount(jobs);
        setNotificationsCount(notifications); 
        setMessagingCount(messaging);

        setTotalNotification(network + jobs + notifications + messaging);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <>
      <button> Home </button>
      <button> My Network ({networkCount}) </button>
      <button> Jobs ({jobsCount}) </button>
      <button> Messaging ({messagingCount}) </button>
      <button> Notifications ({notificationsCount}) </button>
      <button> Me </button>
      <p>Total Notifications: {totalNotification}</p>
    </>
  );
}

export default App;
