function getAge(dateOfBirth) {
    //const age = new Date().getFullYear() - new Date(yearBirth).getFullYear();
    //return age;
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();

    // Vérifier si l'anniversaire de cette année a déjà eu lieu
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
  }

export default getAge;