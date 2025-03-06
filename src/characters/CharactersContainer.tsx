import { useAxios } from "../shared/hooks/useAxios"
import { Character, CharacterActionType } from "./models"
import { CharacterList } from "./components/CharacterList";
import { characterService } from "./services";
import { useCallback, useContext, useEffect } from "react";
import { Modal } from "../shared/components/modal/Modal";
import { CharacterForm } from "./components";
import { ModalContext } from "../shared/components/modal/context/ModalContext";
import { CharacterContext } from "./context";

export const CharactersContainer = () => {
  const serviceCall = useCallback(() => characterService.getCharacters(),[])
  const { setState } = useContext(ModalContext)
  const { state, dispatch } = useContext(CharacterContext)

  const { isLoading, data: characters, error } = useAxios<void, Character[]>({
   serviceCall,
    trigger: true
  })

  const openModal = () => {
    setState(true)
  }

  useEffect(() => {
    if (characters && characters.length > 0) {
      dispatch({ type: CharacterActionType.NEW, payload: characters })
    }
  }, [characters, dispatch])

  if (isLoading) return <p>Cargando Personajes...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      {state && state.characters.size > 0 ?
        <CharacterList characters={Array.from(state.characters, (([, value]) => value))}/>
        :
        <div>No hay personajes</div>
      }
       <button onClick={openModal}>Crear Personaje</button>
      <Modal>
        <CharacterForm />
      </Modal>
    </>
  )
}