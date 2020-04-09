const studentsMarseille = [
  "Anais Reau",
  "Anthony Lasbleiz",
  "David Ruben",
  "Hélène Morel",
  "Jean-Baptiste Bouillat",
  "Jean-Francois Uccelli",
  "Johanna Cas",
  "Olivier Baveux",
  "Sabrina Bartoli",
  "Christophe Turpin",
  "Kenny Phiri",
  "Nadir Abdelouahab"
];
const studentsReims = [
  "Angélique Mora",
  "Anthony Lucci",
  "Auxietre-Fontes Victor",
  "Brian Thellier",
  "Brian Lagaude",
  "Cécyl Lang",
  "Fabrice Roger",
  "Joel Rodier",
  "Julien Nicaise",
  "Lucas Perrin",
  "Malik Himeur",
  "Martin Gilbert",
  "Stephaine Pantiez",
  "Victor Veyrier"
];

// Les participants à l'activité ont chacun un jeton
// Je veux voir quels participants ont encore leur jeton
// Je veux pouvoir dire quel participant utilise son jeton

// Un participant utilise son jeton pour pouvoir proposer (coder sa propre solution)

// Participants in the activity each have a token
// I want to see which participants still have their tokens
// I want to be able to tell which participant is using his or her token

// A participant uses his token to be able to propose (code his own solution)

// Comment coder la liste des participants avec l'information "a un jeton" ?

// Comment représenter cette donnée ?

// représenter le jeton par un nombre
// const token = 1;

// construire le tableau de participants de façon dynamique
// gràce à une fonction
// Retour ? le tableau des participants
// paramêtres ? le tableau des élèves

const listParticipants = students =>
  students.map(studentName => ({
    name: studentName,
    hasToken: true
  }));

// listParticipants(studentsMarseille)

// listParticipants(studentsReims)

const allStudents = [...studentsMarseille, ...studentsReims];
const participants = listParticipants(allStudents);

export default participants;
