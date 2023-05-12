const BASEURL = 'https://rickandmortyapi.com/api/character/'
const CHARACTERS_API_COUNT = 826
const CHARACTER_QUANTITY = 6

export const loadCharacters = async () => {
    const randomIds = new Set()

    while (randomIds.size < CHARACTER_QUANTITY) {
      const randomNumber = Math.ceil(Math.random() * CHARACTERS_API_COUNT)
      randomIds.add(randomNumber)
    }

    const characterPromises = [ ...randomIds].map( id => fetch(BASEURL + id))
    const responses = await Promise.all(characterPromises)
    return await Promise.all(responses.map(res => res.json()))
}

export const replayGame = async () => {
  const characters = await loadCharacters()

  const charactersData = [...characters, ...characters]

  const charactersData1 = charactersData.slice();

  charactersData1.sort((a, b) => a['name'] === b['name'] ? 0 : a['name'] < b['name'] ? -1 : 1)

  return charactersData1
}