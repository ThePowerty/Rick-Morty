import { useAxios } from "../shared/hooks/useAxios"
import { Character } from "./models"
import { CharacterList } from "./components/CharacterList";
import { characterService } from "./services";
import { useCallback } from "react";

export const CharactersContainer = () => {
  const serviceCall = useCallback(() => characterService.getCharacters(),[])

  const { isLoading, data: characters, error } = useAxios<void, Character[]>({
   serviceCall,
    trigger: true
  })

  const triggerChange = () => {
    //setTrigger((prev) => !prev)
  }

  if (isLoading) return <p>Cargando Personajes...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      {characters && characters?.length > 0 ?
        <CharacterList characters={characters} onDelete={triggerChange}/>
        :
        <div>No hay personajes</div>
      }
    </>
  )
}