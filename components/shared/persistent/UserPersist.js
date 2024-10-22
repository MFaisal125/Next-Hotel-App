import { usePersistUserQuery } from "@/services/auth/authApi";
import React from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import Screen from "../loading/Screen";
import { useEffect } from "react";
import { addUser } from "@/features/auth/authSlice";

const UserPersist = ({ children }) => {
  const { data, isLoading, error } = usePersistUserQuery();
  const user = useMemo(() => data?.data || {}, [data]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object?.keys(user).length > 0) {
      dispatch(addUser(user));
    }
    if (error) {
      console.log(error?.data?.message);
    }
  }, [error, user, dispatch]);

  if (isLoading) {
    return <Screen />;
  }

  return <>{children}</>;
};

export default UserPersist;
