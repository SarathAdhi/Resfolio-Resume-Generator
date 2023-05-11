import withAuth from "@hoc/withAuth";
import { useAuthState } from "@hooks/useAuthState";
import PageLayout from "@layouts/PageLayout";
import { useAuthStore } from "@utils/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Tag } from "rsuite";

const MyProfile = () => {
  const { user } = useAuthState();
  const { logout, resumes } = useAuthStore();

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

        <Button
          className="mt-4"
          appearance="primary"
          color="red"
          onClick={logout}
        >
          Logout
        </Button>
      </div>

      <div className="card flex flex-col gap-4">
        <h4>My Resumes</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {resumes.map(({ uuid, resumeName, template }) => (
            <Link
              key={uuid}
              className="flex flex-col items-center justify-center"
              href={`/resume/${uuid}`}
            >
              <div className="relative">
                <Image
                  width={500}
                  height={500}
                  className="rounded-md"
                  src={`/templates/${template}.png`}
                  alt={resumeName}
                />

                <Tag
                  className="z-40 !text-base capitalize absolute top-2 right-2"
                  color="blue"
                >
                  {template}
                </Tag>

                <div className="rounded-md top-0 left-0 w-full h-full absolute bg-black/30" />
              </div>

              <p>{resumeName}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default withAuth(MyProfile);
