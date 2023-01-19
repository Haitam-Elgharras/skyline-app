import { userState } from "../store/atoms";
import { useRecoilState } from "recoil";
import { useEffect, useState, useRef } from "react";

const Buildings = (props) => {
  const [user, setUser] = useRecoilState(userState);
  console.log(user);
  return (
    <main className="md:ml-28 min-w-0 flex-1 border-t border-gray-200">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Invitations</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
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