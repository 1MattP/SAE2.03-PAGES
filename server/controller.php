<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");


function readMoviesController(){

    $age = $_REQUEST['age'];

    if ($age == 0) {
     $movies = getAllMovies(0);
    }
    else {
     $movies = getAllMovies($age);
    }
    return $movies;
}

function readCategoryController(){
    $category = getAllcategory();
    return $category;
}


function addMovieController(){

    $name = $_REQUEST['name'];
    $year = $_REQUEST['year'];
    $description = $_REQUEST['description'];
    $length = $_REQUEST['length'];
    $director = $_REQUEST['director'];
    $image = $_REQUEST['image'];
    $trailer = $_REQUEST['trailer'];
    $min_age = $_REQUEST['min_age'];
    $id_category = $_REQUEST['id_category'];

    
    $ok = addMovie($name, $year, $description, $length, $director, $image, $trailer, $min_age, $id_category);

    if ($ok!=0){
        return "Le film a été ajouté avec succès";
    }
    else{
        return false;
    }
}

function readMoviesDetailController(){
    $id = $_REQUEST['id'];
    $movies =  getMovieDetail($id);
    return $movies;
}

function addProfileController(){

    $id = $_REQUEST['id'];
    $name = $_REQUEST['name'];
    $avatar = $_REQUEST['avatar'];
    $min_age = $_REQUEST['min_age'];

    
    $ok = addProfile($id, $name, $avatar, $min_age);

    if ($ok!=0){
        return "Le Profile a bien été ajouté avec succès";
    }
    else{
        return false;
    }
}

function readProfileController(){
    $profiles = getAllProfile();
    return $profiles;
}