import React, { useState, useEffect } from "react";
import localData from "@/app/data/db_player.json";

const TypeWriter = () => {
  const [listPlayerBirthday, setListPlayerBirthday] = useState([]);

  useEffect(()=> {
    playerBirth();
  }, [])

 const playerBirth = () => {
    const donneesTrie = [...localData];
    const arrayPlayer = [];
    const now = new Date();
    const monthDay = `${(now.getMonth() + 1).toString().padStart(2, "0")}-${now
      .getDate()
      .toString()
      .padStart(2, "0")}`;
    const listPlayerBirthday = donneesTrie.filter(
      (player) => player.birthDate.substring(5) === monthDay
    );
    listPlayerBirthday.forEach(function (player) {
        arrayPlayer.push(`Happy birthday ${player.name}`);
      });
    setListPlayerBirthday(arrayPlayer);
    console.log(arrayPlayer)
  };

  return (
    <>
        <p className="text-sm">{...listPlayerBirthday}</p>
    </>
  );
};

export default TypeWriter;
