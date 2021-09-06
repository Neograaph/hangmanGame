<?php
if (isset($_POST['lettre'])){
    $lettre = $_POST['lettre'];
};
if (isset($_POST['guessWord'])){
    $mot = $_POST['guessWord'];
};
if (!empty($mot)){
    if (!empty($lettre)){
        jeuLettre($lettre, $mot);
    }
};

function jeuLettre ($lettre, $mot) {
    $mot = $lettre;
    
    if (isset($_POST['lettre']) AND !empty($_POST['lettre'])) {
        $lettre = $_POST['lettre'];
        $pos = stripos($mot, $lettre);
        
        if ($pos === false) {
            echo 'La lettre n\'est pas présente';
        } else {
            echo 'La lettre est présente';
        }
    }; 
};
?>