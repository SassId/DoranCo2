# ? MySQL prend en charge différents types de données pour stocker des informations dans les tables.

# Voici quelques-uns des types de données couramment utilisés dans MySQL :

**Entiers** :
   - `INT` : Entier signé, prenant en charge des valeurs de -2 147 483 648 à 2 147 483 647.
   - `BIGINT` : Entier signé de grande taille, prenant en charge des valeurs de -9 223 372 036 854 775 808 à 9 223 372 036 854 775 807.
   - `TINYINT` : Entier signé ou non signé, prenant en charge des valeurs de -128 à 127 (pour signé) ou de 0 à 255 (pour non signé).
   - `SMALLINT` : Entier signé, prenant en charge des valeurs de -32 768 à 32 767.

**Décimaux** :
   - `DECIMAL` : Nombre décimal précis, spécifié avec la précision et l'échelle
      (par exemple, DECIMAL(10,2) pour un nombre avec 10 chiffres, dont 2 décimales).
   - `FLOAT` : Nombre à virgule flottante, utilisé pour les valeurs approchées.

**Chaînes de caractères** :
   - `VARCHAR` : Chaîne de caractères variable avec une longueur maximale spécifiée.
      (par exemple, VARCHAR(255) pour une chaine de caractères pouvant aller jusqu'à 255)
   - `CHAR` : Chaîne de caractères fixe avec une longueur spécifiée.
   - `TEXT` : Chaîne de caractères de longueur variable pour les textes plus longs.

**Dates et heures** :
   - `DATE` : Date au format 'YYYY-MM-DD'.
   - `TIME` : Heure au format 'HH:MM:SS'.
   - `DATETIME` : Date et heure au format 'YYYY-MM-DD HH:MM:SS'.
   - `TIMESTAMP` : Horodatage, stocke une date et une heure en fonction du fuseau horaire.

**Booléens** :
   - `BOOL` : Booléen, prenant les valeurs TRUE ou FALSE (ou 1 ou 0).
   - `BOOLEAN` : Alias de BOOL.

**Énumérations** :
   - `ENUM` : Type d'énumération, prenant une liste de valeurs prédéfinies.

# * Ces sont quelques-uns des types de données les plus couramment utilisés dans MySQL.
# * Chaque type de données a ses propres propriétés et limites, et vous devez choisir le type de données approprié en fonction des informations que vous souhaitez stocker dans votre base de données.