import React from "react";

export function Profile(props) {
  const {profile} = props;
  return profile.length ? <h1>User {profile[0].name} profile</h1> : <h1>Нет профайла</h1>;
}
