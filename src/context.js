import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("salad");
  const [showData, setShowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      const getData = () => {
        setIsLoading(true);
        let req = fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=955cad5d&app_key=38aaa726f3d1ef73ba294a3c278fc483`
        );

        req
          .then((res) => res.json())
          .then((data) => {
            setShowData(data.hits);
            setIsLoading(false);
          })
          .catch((error) => "Error Occured" + error);
      };
      getData();
    }, 600);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  return (
    <MyContext.Provider value={{ isLoading, showData, search, setSearch }}>
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, AppProvider };
