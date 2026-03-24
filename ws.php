<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, HEAD");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

header('Content-Type: application/json');
$publicaciones = [
    [
        "id" => 1,
        "titulo" => "El inicio de Dragon Ball",
        "saga" => "Dragon Ball",
        "personaje_principal" => "Goku",
        "tema_central" => "Búsqueda de las Esferas del Dragón",
        "descripcion_corta" => "Goku conoce a Bulma y juntos comienzan su aventura para recolectar las Esferas del Dragón."
    ],
    [
        "id" => 2,
        "titulo" => "El Ejército Red Ribbon",
        "saga" => "Dragon Ball",
        "personaje_principal" => "Goku",
        "tema_central" => "Lucha contra el mal",
        "descripcion_corta" => "Goku se enfrenta al malvado Ejército Red Ribbon para proteger el mundo."
    ],
    [
        "id" => 3,
        "titulo" => "La llegada de los Saiyajin",
        "saga" => "Dragon Ball Z",
        "personaje_principal" => "Goku",
        "tema_central" => "Origen Saiyajin",
        "descripcion_corta" => "Goku descubre que es un Saiyajin y lucha contra Vegeta y Nappa."
    ],
    [
        "id" => 4,
        "titulo" => "La batalla contra Freezer",
        "saga" => "Dragon Ball Z",
        "personaje_principal" => "Goku",
        "tema_central" => "Protección de Namek",
        "descripcion_corta" => "Goku alcanza el Super Saiyajin y enfrenta a Freezer en Namek."
    ],
    [
        "id" => 5,
        "titulo" => "El torneo de Cell",
        "saga" => "Dragon Ball Z",
        "personaje_principal" => "Gohan",
        "tema_central" => "Superación y sacrificio",
        "descripcion_corta" => "Gohan combate a Cell en el torneo para salvar la Tierra."
    ],
    [
        "id" => 6,
        "titulo" => "Majin Buu aparece",
        "saga" => "Dragon Ball Z",
        "personaje_principal" => "Goku",
        "tema_central" => "Lucha contra el mal absoluto",
        "descripcion_corta" => "Goku y sus amigos enfrentan a Majin Buu en épicas batallas."
    ],
    [
        "id" => 7,
        "titulo" => "La Batalla de los Dioses",
        "saga" => "Dragon Ball Super",
        "personaje_principal" => "Goku",
        "tema_central" => "Dioses y nuevos niveles de poder",
        "descripcion_corta" => "Goku enfrenta al Dios de la Destrucción Beerus y alcanza el Super Saiyajin Dios."
    ],
    [
        "id" => 8,
        "titulo" => "Torneo del Poder",
        "saga" => "Dragon Ball Super",
        "personaje_principal" => "Goku",
        "tema_central" => "Superación y universos en riesgo",
        "descripcion_corta" => "Goku lucha en un torneo entre universos, mostrando el Ultra Instinct."
    ],
    [
        "id" => 9,
        "titulo" => "Dragones Oscuros en GT",
        "saga" => "Dragon Ball GT",
        "personaje_principal" => "Goku",
        "tema_central" => "Aventura y redención",
        "descripcion_corta" => "Goku, en forma de niño, enfrenta a los Dragones Oscuros creados por las Esferas del Dragón."
    ]
];

echo json_encode($publicaciones);
