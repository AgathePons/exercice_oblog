/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
// node ./data/import.js TO LAUNCH
// ce script sera exécuté dans son propre contexte, pas dans celui de l'application
// on a besoin de lui donner accès aux variables d'environnement
require('dotenv').config();
const { Client } = require('pg');

// on récupère les data sous forme de tableau d'objects
const categories = require('./categories.json');
const posts = require('./posts.json');

// on récupère (ou on crée) un client de connexion à la BDD
// ici, jutilise une variable d'environnement DATABASE_URL
const client = new Client(process.env.PGURL);

async function importData() {
  // si le client n'est pas encore connecté, on le connecte
  await client.connect();

  // on commence par supprimer les enregistrements existants
  // ça permet de ré-exécuter le script plusieurs fois sans créer de doublons
  // on reset la numérotation des ids avec RESTART IDENTITY
  await client.query('TRUNCATE post, category RESTART IDENTITY');

  // Pour créer les enregistrements dans post, on aura besoin des ids de category créees par postgres
  // on va stocker cette info dans un object avec les labels des catégories en nom de propriété
  const categoryIds = {};

  // on boucle sur le tableau de category
  for (const category of categories) {
    // on utilise les data du json pour "nourir" la requête SQL
    const { rows } = await client.query('INSERT INTO category (route, label) VALUES($1, $2) RETURNING id', [
      category.route,
      category.label,
    ]);
    // on stocke l'id de la category pour l'utiliser plus tard
    categoryIds[category.label] = rows[0].id;
  }

  // on boucle sur le tableau de post
  for (const post of posts) {
    await client.query('INSERT INTO post (slug, title, excerpt, content, category_id) VALUES($1, $2, $3, $4, $5)', [
      post.slug,
      post.title,
      post.excerpt,
      post.content,
      // on utilise notre object de stock pour indiquer le bon id de category pour ce post
      categoryIds[post.category],
    ]);
  }
  // l'import est terminé, on peut libérer le client de connexion à la BDD
  client.end();
}

// on n'oublie pas d'appeler la fonction et on laisse node gérer les délais d'attente de l'asynchrone
importData();
