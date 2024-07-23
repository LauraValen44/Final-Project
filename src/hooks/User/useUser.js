import { useEffect, useState } from "react";
import { apiServiceUser } from "../../api";
import { useLoading } from "../../hooks";
import { useDispatch } from "react-redux";
import { startData } from "../../Redux/contactsSlice";

const useUser = () => {
  const dispatch = useDispatch();
  const { loading, onEnd, onStart } = useLoading({ defaultLoading: false });
  const [meta, setMeta] = useState({ data: [], error: undefined });
  const { getUsers } = apiServiceUser() || {};

  const handleMeta = (param) =>
    setMeta((_meta) => ({ favorites: false, ..._meta, ...param }));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        onStart();
        const { data } = await getUsers();
        handleMeta({ data: data.data });
        dispatch(
          startData(
            data.data.map((contacts) => ({ ...contacts, favorite: false }))
          )
        );
      } catch (error) {
        handleMeta({ error });
      } finally {
        onEnd();
      }
    };

    fetchUsers();
  }, []);

  return {
    loading,
    meta,
    handleMeta,
  };
};

export default useUser;
