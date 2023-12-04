"use client";
import { useState } from "react";
import localData from "@/app/data/db_player.json";
import CardPlayer from "./components/cards/CardPlayer";
import SearchPlayerForm from "./components/layout/SearchPlayerForm";
import getAge from "./utils/functions";

export default function Home() {
  const [filteredData, setFilteredData] = useState([]);
  // Fonction de filtrage
  const filtrerDonnees = (ev, data) => {
    ev.preventDefault();
    const { filtres } = data;
    const donneesTrie = [...localData];
    const donneesFiltrees = donneesTrie.filter((element) => {
      const agePlayer = getAge(element.birthDate);
      const filtreMajor = () => {
        if (filtres.major === 0) {
          return true;
        }

        switch (filtres.majorFiltre) {
          case "superior":
            return element.majorsAttended > filtres.major;
          case "lower":
            return element.majorsAttended < filtres.major;
          default:
            return element.majorsAttended === filtres.major;
        }
      };

      const filtreAge = () => {
        if (filtres.age === "") {
          return true;
        }
        switch (filtres.ageFiltre) {
          case "superior":
            return agePlayer > parseInt(filtres.age);
          case "lower":
            return agePlayer < parseInt(filtres.age);
          default:
            return agePlayer === parseInt(filtres.age);
        }
      };

      const filtreCountryCode =
        filtres.countryCode === "" ||
        element.countryCode === filtres.countryCode;

      const filtreTeam =
        filtres.team === "none" ||
        (filtres.team !== null && element.team !== null) ||
        (filtres.team === null && element.team === null);

      const filtreRole =
        (filtres.role === "awp" && element.mostUsedWeapon === "awp") ||
        (filtres.role === "ak47" && element.mostUsedWeapon === "ak47") ||
        (filtres.role !== "awp" &&
          filtres.role !== "ak47" &&
          (element.mostUsedWeapon === "ak47" ||
            element.mostUsedWeapon === "awp"));

      return (
        filtreRole &&
        filtreTeam &&
        filtreCountryCode &&
        filtreAge() &&
        filtreMajor()
      );
    });

    donneesFiltrees.sort((a, b) => {
      return getAge(b.birthDate) - getAge(a.birthDate);
    });
    setFilteredData(donneesFiltrees);
  };

  return (
    <>
      <div className="container mx-auto ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          Liste des joueurs ({filteredData?.length})
        </h1>
        <SearchPlayerForm onSave={filtrerDonnees} />
      </div>

      <div className="container pb-10 px-4 pt-10">
        <div className="grid sm:grid-cols-5 gap-4">
          {filteredData?.length !== 0 ? (
            filteredData?.map((player) => (
              <CardPlayer key={player.id} {...player} />
            ))
          ) : (
            <p>Aucun résultat</p>
          )}
        </div>
      </div>
    </>
  );
}
