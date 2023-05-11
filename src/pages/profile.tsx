import { useAuthState } from "@hooks/useAuthState";
import PageLayout from "@layouts/PageLayout";
import Image from "next/image";
import React from "react";

const MyProfile = () => {
  const { user } = useAuthState();

  return (
    <PageLayout title="My Profile" className="flex flex-col gap-4">
      <div className="flex flex-col items-center text-center">
        <Image
          width={200}
          height={200}
          className="w-20 h-20 rounded-full"
          src={user?.photoURL!}
          alt={user?.displayName!}
        />

        <h3 className="mt-4">{user?.displayName}</h3>
        <p>{user?.email}</p>
      </div>

      <div className="card flex flex-col">
        <h4>My Resumes</h4>

        <div></div>
      </div>
    </PageLayout>
  );
};

export default MyProfile;
