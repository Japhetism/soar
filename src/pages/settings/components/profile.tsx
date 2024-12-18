import { useState } from "react";
import EDIT_SVG from "../../../assets/icons/edit";
import UserImage from "../../../assets/images/user.png";
import Input from "../../../components/input";

interface ProfileProps {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

const initialFormData: ProfileProps = {
  name: "James Doe",
  username: "JJD12334",
  email: "jamesdoe@gmail.com",
  password: "dhdhhdhdh",
  dateOfBirth: "01/01/1989",
  presentAddress: "Victoria, Island, Lagos",
  permanentAddress: "Victoria Island, Lagos",
  city: "Eti Osa",
  postalCode: "1101010",
  country: "Nigeria",
};

const Profile: React.FC = () => {
  const [formData, setFormData] = useState<ProfileProps>(initialFormData);

  return (
    <>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-20 items-center lg:items-start">
        <div className="relative flex-shrink-0 mb-6 lg:mb-0 flex justify-center">
          <img src={UserImage} alt="" className="w-[90px] h-[90px] rounded-full" />
          <div className="absolute bottom-0 right-0 flex justify-center items-center bg-[#232323] w-[30px] h-[30px] rounded-full">
            <EDIT_SVG />
          </div>
        </div>

        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Your Name"
                placeholder="Your Name"
                value={formData?.name}
                onChange={(e) => setFormData({ ...formData, name: e })}
              />
            </div>
            <div className="flex-1">
              <Input
                label="User Name"
                placeholder="User Name"
                value={formData?.username}
                onChange={(e) => setFormData({ ...formData, username: e })}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Email"
                placeholder="Email"
                value={formData?.email}
                onChange={(e) => setFormData({ ...formData, email: e })}
              />
            </div>
            <div className="flex-1">
              <Input
                type="password"
                label="Password"
                placeholder="Password"
                value={formData?.password}
                onChange={(e) => setFormData({ ...formData, password: e })}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Date of Birth"
                placeholder="Date of Birth"
                value={formData?.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e })}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Present Address"
                placeholder="Present Address"
                value={formData?.presentAddress}
                onChange={(e) => setFormData({ ...formData, presentAddress: e })}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Permanent Address"
                placeholder="Permanent Address"
                value={formData?.permanentAddress}
                onChange={(e) => setFormData({ ...formData, permanentAddress: e })}
              />
            </div>
            <div className="flex-1">
              <Input
                label="City"
                placeholder="City"
                value={formData?.city}
                onChange={(e) => setFormData({ ...formData, city: e })}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Postal Code"
                placeholder="Postal Code"
                value={formData?.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e })}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Country"
                placeholder="Country"
                value={formData?.country}
                onChange={(e) => setFormData({ ...formData, country: e })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end mt-10">
        <button className="bg-[#232323] w-[190px] h-[50px] text-[#FFFFFF] text-lg rounded-[15px] ml-auto">Save</button>
      </div>
    </>
  );
};

export default Profile;
