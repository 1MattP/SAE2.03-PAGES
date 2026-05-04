<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "pages39");
define("DBLOGIN", "pages39");
define("DBPWD", "pages39");



function getAllMovies($age){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "SELECT m.id, m.name AS movie_name,  m.image, c.name AS category_name FROM Movie m
            JOIN Category c ON m.id_category = c.id
            WHERE m.min_age <= :age
            ORDER BY c.name, m.name";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':age', $age);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;// Retourne les résultats
}


function getAllcategory(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select id, name from Category";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}


function addMovie($name, $year, $description, $length, $director, $image, $trailer, $min_age, $id_category){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    $sql = "INSERT INTO Movie (name, year, description, length,  director, image, trailer, min_age, id_category) 
            VALUES (:name, :year, :description, :length, :director, :image, :trailer, :min_age, :id_category)";

    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':year', $year);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':length', $length);
    $stmt->bindParam(':director', $director);
    $stmt->bindParam(':image', $image);
    $stmt->bindParam(':trailer', $trailer);
    $stmt->bindParam(':min_age', $min_age);
    $stmt->bindParam(':id_category', $id_category);

    $stmt->execute();

    $res = $stmt->rowCount();

    return $res; 
}



function getMovieDetail($id){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    $sql = "SELECT  m.id, m.name AS movie_name, m.year, m.description, m.length, m.director, m.image, m.trailer, m.min_age, c.name AS category_name FROM Movie m
            JOIN Category c ON m.id_category = c.id
            WHERE m.id = :id";

    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_OBJ);
}

function addProfile($id, $name, $avatar, $min_age){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    $sql = "REPLACE INTO Profile (id, name, avatar, min_age) 
            VALUES (:id, :name, :avatar, :min_age)";
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':avatar', $avatar);
    $stmt->bindParam(':min_age', $min_age);

    $stmt->execute();

    $res = $stmt->rowCount();

    return $res; 
}

function getAllProfile(){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT id, name, avatar, min_age FROM Profile";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}


function addFavorite($movie_id, $profile_id) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    $sql = "INSERT INTO Favorite (movie_id, profile_id) VALUES (:movie_id, :profile_id)";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':movie_id', $movie_id);
    $stmt->bindParam(':profile_id', $profile_id);
    $stmt->execute();

    $res = $stmt->rowCount();
    
    return $res;
}

function getFavorites($profile_id) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT f.id, f.movie_id, f.profile_id, m.name AS movie_name, m.image
            FROM Favorite f
            JOIN Movie m ON m.id = f.movie_id
            WHERE f.profile_id = :profile_id";
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':profile_id', $profile_id);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function removeFavorite($movie_id, $profile_id) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "DELETE FROM Favorite WHERE movie_id = :movie_id AND profile_id = :profile_id";
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':profile_id', $profile_id);
    $stmt->bindParam(':movie_id', $movie_id);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
 
}

function readFeaturedMovies($min_age) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT * FROM Movie WHERE featured = 1 AND min_age <= :min_age";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':min_age', $min_age);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}


function getTotalProfiles() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT COUNT(*) AS total FROM Profile";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function getTotalMovies() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT COUNT(*) AS total FROM Movie";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function getMostFavoritedMovie() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT m.name, COUNT(*) AS total FROM Favorite f JOIN Movie m ON f.movie_id = m.id GROUP BY f.movie_id ORDER BY total DESC LIMIT 1";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function getMostPopularCategory() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT c.name, COUNT(*) AS total FROM Favorite f JOIN Movie m ON f.movie_id = m.id JOIN Category c ON m.id_category = c.id GROUP BY c.id ORDER BY total DESC LIMIT 1";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function getAvgFavoritesPerProfile() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT AVG(total) AS moyenne FROM (SELECT COUNT(*) AS total FROM Favorite GROUP BY profile_id) AS sub";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function searchMovies($keyword) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT m.id, m.name AS movie_name, m.image, m.min_age, c.name AS category_name 
            FROM Movie m
            JOIN Category c ON m.id_category = c.id
            WHERE m.name LIKE :keyword
            ORDER BY m.name";
    $stmt = $cnx->prepare($sql);
    $keyword = "%" . $keyword . "%";
    $stmt->bindParam(':keyword', $keyword);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}