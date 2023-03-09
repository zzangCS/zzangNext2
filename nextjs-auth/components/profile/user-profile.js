import { useEffect, useState } from "react";
import classes from "./user-profile.module.css";

import { getSession, useSession } from "next-auth/react";
import ProfileForm from "./profile-form";

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  // const { data: session, status } = useSession();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/auth";
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <p className={classes.profile}>Loading...</p>;
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
