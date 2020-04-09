import React from "react";
import Participant from "./Participant";
import participants from "./participants";

// Un composant pour afficher UN participant
// Participant => <li>Anaïs a un jeton</li>
// comment faire pour afficher des données différentes avec le même composant ?
// props =>
// name: String
// hasToken: Boolean

// où est ce que je dois récupérer la liste de participants ?
// dans ParticipantList

//importer les particpants

function ParticipantList() {
  return (
  //console.log(participants); s'affiche dans la console du navigateur
    <ul>
      {participants.map(participant => {
        // console.log(participant.name)
        return <Participant key={participant.name} name={participant.name} hasToken={participant.hasToken}/>
      })}
    </ul>)
}

export default ParticipantList;

//{name} et {hasToken} ne sont pas reconnus car ces props ne sont pas déclarées dans ce composant
