/* --------------------------- USE STRICT --------------------------- */

/*
    Le mode strict de JavaScript est une version limitée et plus sécurisée de JavaScript.
    Il empêche également l'utilisation de certaines fonctionnalités dangereuses de JavaScript.
    Par exemple, le mode strict élimine les erreurs silencieuses souvent ignorées par les navigateurs.
    Exemple : l'utilisation de variables non déclarées, l'utilisation de mots réservés, etc.
*/

// Pour activer le mode strict, il suffit d'ajouter la ligne suivante au début de votre fichier JavaScript.
'use strict';

// Exemple d'erreur silencieuse, oubli de déclarer la variable
message = 'Hello World !';
console.log(message);

// Exemple d'erreur silencieuse, utilisation de mots réservés
var let = 'Hello World !';
console.log(let);

// Liste de mots réservés en JavaScript

// break       case        catch       class       const
// continue    debugger    default     delete      do
// else        enum        export      extends     false
// finally     for         function    if          implements
// import      in          instanceof  interface   let
// new         null        package     private     protected
// public      return      static      super       switch
// this        throw       true        try         typeof
// var         void        while       with        yield
