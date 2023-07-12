import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getUsers } from "../../src/services/userService";
import UserListItem from "../../src/components/UserListItem";
const NewChannel = () => {
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

export default NewChannel;
