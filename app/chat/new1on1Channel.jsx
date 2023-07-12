import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getUsers } from "../../src/services/userService";
import UserListItem from "../../src/components/UserListItem";

const New1on1Channel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
};

export default New1on1Channel;
