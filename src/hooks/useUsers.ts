import { useEffect, useState } from "react";
import { UserType } from "../repo/users.types";
import { getUsers } from "../repo";

export const useUsers = () => {
  //spazio di memoria in cui dichiarare se l'API sta caricando o meno. inizialmente è true
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //spazio di memoria in cui caricare gli utenti ricevuti tramite API
  //inizialmente array vuoto
  const [users, setUsers] = useState<UserType[]>([]);

  //Il seguente useEffect carica la lista degli utenti all'avvio del componente (nessuna dipendenza specificata nell'array delle dipendenze)
  useEffect(() => {
    //chiamo la funzione di caricamento utenti
    loadUsers();
  }, []);

  const loadUsers = async () => {
    //chiamo l'API per caricare gli utenti
    getUsers().then((users) => {
      //salvo la risposta (users: UserType[])nello stato
      setUsers(users);
      //imposto isLoading a false perchè il caricamento è terminato
      setIsLoading(false);
    });
  };
  //ritorno un oggetto contenente le informazioni che servono alla vista
  return { users, isLoading };
};
