const animalSort = animals => {
  const animalList = animals.map(animal => animal);
  return animalList.sort((animal1, animal2) => {
    const legDiff = animal1.numberOfLegs - animal2.numberOfLegs;
    if (legDiff < 0 || legDiff > 0) {
      return legDiff;
    } else {
      if (animal1.name < animal2.name) {
        return -1;
      } else {
        return 1;
      }
    }
  });
};

export { animalSort };