"use client";
import { useEffect, useState } from "react";
import localData from "../../data/db_player.json";
import countriesJSON from "../../data/countries.json";
import SearchPlayerForm from "../../components/layout/SearchPlayerForm";
import getAge from "../../utils/functions";
import CardPlayer from "../../components/cards/CardPlayer";
import { ContinentForm } from "../../components/layout/ContinentForm";

const findPlayerPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState('All');
  useEffect(() => {
    setCountries(getListPlayerByRegion(countriesJSON, "All"));
  }, [setCountries]);

  const getListPlayerByRegion = (jsonData, continentName) => {
    try {
      const continent = jsonData.regions.find(
        (continent) => continent.name === continentName
      );
      if (continent) {
        return continent.countries.map((country) => country.code);
      } else {
        console.error(`Continent '${continentName}' not found in the data.`);
        return [];
      }
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      return [];
    }
  };

  const handleRegion = (region, data) => {
    setCountries(getListPlayerByRegion(countriesJSON, region));
    setSelectedContinent(region);
  };

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
          case "equal":
              return element.majorsAttended === filtres.major;
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
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center font-bayon">
          Liste des joueurs ({filteredData?.length})
        </h1>
        <div className="flex justify-center">
          <ContinentForm setSelectedContinent={handleRegion} selectedContinent={selectedContinent} />
        </div>
        <SearchPlayerForm onSave={filtrerDonnees} getCountries={countries} />
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


export default findPlayerPage