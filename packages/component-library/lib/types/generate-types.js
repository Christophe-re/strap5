import fetch from "node-fetch";
import fs from "fs/promises";

// L'URL de l'API
const apiGetTypeUrl = "http://localhost:1337/api/get-content-types";
const fileName = "types.gen.ts";

// Fonction pour récupérer les données de l'API
async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
}

// Fonction pour écrire les données dans un fichier
function writeToFile(data, fileName) {
  const content = `${data}`;  
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error("Erreur lors de l'écriture du fichier:", err);
    } else {
      console.log("Le fichier components.d.ts a été créé avec succès.");
    }
  });
}

// Fonction principale

async function getType() {
  const data = await fetchData(apiGetTypeUrl);
  if (data) {
    writeToFile(data, fileName);
  }
}

// Exécution du script
getType();