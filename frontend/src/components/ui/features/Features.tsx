import Feature from "./Feature";
import { IoIosRocket } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";

export default function Features() {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Feature
          name="Fast"
          description="Our service provides a fast data saving where it auto saves every 15 seconds you edited the note"
          icon={
            <div className="bg-rose-300 rounded-full px-3 py-3">
              <IoIosRocket className="text-rose-500" size={42} />
            </div>
          }
        />
        <Feature
          name="Safe"
          description="Our data isn't easy to be breached and is safe. Don't worry about your notes being leaked."
          icon={
            <div className="bg-rose-300 rounded-full px-3 py-3">
              <FaThumbsUp className="text-rose-500" size={40} />
            </div>
          }
        />
      </div>
    </>
  );
}
