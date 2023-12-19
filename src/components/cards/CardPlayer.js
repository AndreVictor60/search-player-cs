import React from "react";
import ReactCountryFlag from "react-country-flag";

const CardPlayer = (player) => {
  const {
    countryCode,
    countryName,
    nickname,
    name,
    birthDate,
    mostUsedWeapon,
    majorsAttended,
    team,
  } = player;
  return (
    <>
      <div
        className="bg-gray-200 p-4 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            aria-label={countryName}
            className="emojiFlag mr-2"
            title={countryName}
          />
          {nickname}
        </h5>
        <p className="font-normal text-gray-800">{name}</p>
        <hr />

        <ul className="dark:text-gray-700">
          <li>
            <span className=" font-extrabold">Age </span> :{" "}
            {new Date().getFullYear() - new Date(birthDate).getFullYear()}
          </li>
          <li>
            <span className="font-extrabold">Weapon </span> : {mostUsedWeapon}
          </li>
          <li>
            <span className="font-extrabold">Major apparition </span> :{" "}
            {majorsAttended}
          </li>
          <li>
            <span className="font-extrabold">Team </span> : {team}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CardPlayer;
