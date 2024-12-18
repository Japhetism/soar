import TabSelector from "../../components/tab";
import Profile from "./components/profile";

const tabs = [
  {
    title: "Edit Profile",
    route: "profile",
    content: <Profile />
  },
  {
    title: "Preferences",
    route: "preferences",
    content: <div>Hello Preferences</div>
  },
  {
    title: "Security",
    route: "security",
    content: <div>Hello Security</div>
  }
]

const Settings: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[25px] px-10 py-5">
      <TabSelector
        tabs={tabs}
        initialRoute="profile"
      />
    </div>
  )
}
  
export default Settings;