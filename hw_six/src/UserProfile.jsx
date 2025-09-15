import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api/");
      const data = response.data.results[0];
      setUser({
        name: `${data.name.first} ${data.name.last}`,
        email: data.email,
        phone: data.phone,
        picture: data.picture.large,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.card}>
      <img src={user.picture} alt={user.name} className={styles.avatar} />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.email}>Email: {user.email}</p>
      <p className={styles.phone}>Phone: {user.phone}</p>
      <button className={styles.button} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  );
};

export default UserProfile;
