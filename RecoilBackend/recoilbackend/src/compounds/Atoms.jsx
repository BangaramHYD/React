import axios from "axios";
import {atom, selector} from "recoil"

export const notifications = atom(
    {
        key:"Notification",
        default: selector({
            key :"Bangaram",
           get: async()=>{
                const result = await axios.get("https://sum-server.100xdevs.com/notifications")
                return result.data
            }
        }
        )
    }
)

export const totalNotificationSelector = selector(
    {
        key:"Allnotification",
        get: ({get}) => {
            const allNotifications = get(notifications);
            return allNotifications.network + 
            allNotifications.jobs + 
            allNotifications.notifications + 
            allNotifications.messaging
        }
    }
)