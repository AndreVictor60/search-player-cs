import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const SearchPlayerForm = ({ onSave }) => {
  const [filtres, setFiltres] = useState({
    countryCode: "",
    team: "",
    role: "ak47",
    major: 0,
    majorFiltre: "superior",
    age: 0,
    ageFiltre: "superior",
  });
  return (
    <>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            filtres: filtres,
          })
        }
      >
        <div className="grid grid-cols-6 grid-rows-5 justify-center items-center border-white border-2 rounded-lg pr-2 pl-2 pt-2">
          <div className="col-span-6">
            <ReactFlagsSelect
              selected={filtres.countryCode}
              onSelect={(code) => setFiltres({ ...filtres, countryCode: code })}
              className="dark:text-black menu-flags"
              placeholder="Selectionner un pays"
              searchable
            />
          </div>
          <div className="row-start-2 font-extrabold">Role</div>
          <div className="col-span-2 row-start-2">
            <fieldset className="flex max-w-md gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="awp"
                  name="weapon"
                  checked={filtres.role === "awp"}
                  onChange={() => setFiltres({ ...filtres, role: "awp" })}
                  value="awp"
                />

                <label htmlFor="AWP">AWP</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="ak47"
                  name="weapon"
                  checked={filtres.role === "ak47"}
                  onChange={() => setFiltres({ ...filtres, role: "ak47" })}
                  value="ak47"
                />
                <label htmlFor="ak47">AK</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="idk"
                  name="weapon"
                  checked={filtres.role === "idk"}
                  onChange={() => setFiltres({ ...filtres, role: "idk" })}
                  value="idk"
                />

                <label htmlFor="idk">AWP/AK</label>
              </div>
            </fieldset>
          </div>
          <div className="col-start-4 row-start-2 font-extrabold">Team</div>
          <div className="col-span-2 col-start-5 row-start-2">
            <fieldset className="flex max-w-md gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="yesTeam"
                  name="team"
                  checked={filtres.team === ""}
                  onChange={() => setFiltres({ ...filtres, team: "" })}
                  value="Oui"
                />

                <label htmlFor="yesTeam">Oui</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="noTeam"
                  name="team"
                  checked={filtres.team === null}
                  onChange={() => setFiltres({ ...filtres, team: null })}
                  value="Non"
                />
                <label htmlFor="noTeam">Non</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="none"
                  name="team"
                  checked={filtres.team === "none"}
                  onChange={() => setFiltres({ ...filtres, team: "none" })}
                  value="none"
                />

                <label htmlFor="none">None</label>
              </div>
            </fieldset>
          </div>
          <div className="row-start-3 font-extrabold">Age</div>
          <div className="col-span-2 row-start-3">
            <div className="flex max-w-md gap-1">
              <input
                type="number"
                className="dark:text-black"
                value={filtres.age || 0}
                onChange={(e) =>
                  setFiltres({ ...filtres, age: parseInt(e.target.value) })
                }
              />

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="lower"
                  name="ageFiltre"
                  className="sing-comparison"
                  checked={filtres.ageFiltre === "lower"}
                  onChange={() =>
                    setFiltres({ ...filtres, ageFiltre: "lower" })
                  }
                  value="lower"
                />

                <label htmlFor="lower">&lt;</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="equal"
                  name="ageFiltre"
                  className="sing-comparison"
                  checked={filtres.ageFiltre === "equal"}
                  onChange={() =>
                    setFiltres({ ...filtres, ageFiltre: "equal" })
                  }
                  value="equal"
                />
                <label htmlFor="equal">=</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="superior"
                  name="ageFiltre"
                  className="sing-comparison"
                  checked={filtres.ageFiltre === "superior"}
                  onChange={() =>
                    setFiltres({ ...filtres, ageFiltre: "superior" })
                  }
                  value="superior"
                />

                <label htmlFor="superior">&gt;</label>
              </div>
            </div>
          </div>
          <div className="col-start-4 row-start-3 font-extrabold">
            Major apparution
          </div>
          <div className="col-span-2 col-start-5 row-start-3">
          <div className="flex max-w-md gap-1">
          <input
              type="number"
              className="dark:text-black"
              value={filtres.major || 0}
              onChange={(e) =>
                setFiltres({ ...filtres, major: parseInt(e.target.value) })
              }
            />

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="lowerM"
                  name="majorFiltre"
                  className="sing-comparison"
                  checked={filtres.majorFiltre === "lower"}
                  onChange={() =>
                    setFiltres({ ...filtres, majorFiltre: "lower" })
                  }
                  value="lower"
                />

                <label htmlFor="lowerM">&lt;</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="equalM"
                  name="majorFiltre"
                  className="sing-comparison"
                  checked={filtres.majorFiltre === "equal"}
                  onChange={() =>
                    setFiltres({ ...filtres, majorFiltre: "equal" })
                  }
                  value="equal"
                />
                <label htmlFor="equalM">=</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="superiorM"
                  name="majorFiltre"
                  className="sing-comparison"
                  checked={filtres.majorFiltre === "superior"}
                  onChange={() =>
                    setFiltres({ ...filtres, majorFiltre: "superior" })
                  }
                  value="superior"
                />

                <label htmlFor="superiorM">&gt;</label>
              </div>
            </div>

          </div>
          <div className="col-span-2 col-start-5 row-start-4">
            <button type="submit" className="w-full  text-white">
              Recherche
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchPlayerForm;
