function getAge(yearBirth) {
    const age = new Date().getFullYear() - new Date(yearBirth).getFullYear();
    return age;
  }

export default getAge;