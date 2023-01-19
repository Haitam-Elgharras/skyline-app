import { userState } from "../store/atoms";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { buildings as Building } from "@prisma/client";
const Buildings = (props) => {
  const [user, setUser] = useRecoilState(userState);
  const [buildings, setBuildings] = useState<Building[]>();
  console.log(user);
  const getBuildings = useQuery(["getBuildings"], async () => {
    return await axios.get("/api/getBuildings").then((res) => {
      setBuildings(JSON.parse(res.data.buildings));
      return res;
    });
  });
  if (getBuildings.status == "loading") return <main />;
  return (
    <main className="min-w-0 flex-1 border-t border-gray-200">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Buildings</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            {buildings?.map((building: Building) => (
              <div
                key={building.id}
                className="border-4 border-dashed border-gray-200 rounded-lg h-96"
              >
                {building.name}{" "}
              </div>
            ))}

            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </div>
    </main>
  );
};
Buildings.auth = true;
export default Buildings;