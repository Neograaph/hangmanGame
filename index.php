<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css' />
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' crossorigin='anonymous'></script>
    <title>Pendu en PHP et JS</title>
</head>
<body>
    <section>
        <div class="container my-5">
            <h1>Pendu en PHP et JS</h1>
            <form id="formMot" action="views/game.php" method="post">
                <div class="col-md-4">
                  <input id='subWord' class="form-control mt-3" maxlength='4' type="text" placeholder='Définir un mot' name='guessWord'> 
                  <input type="submit" name='submit' class="btn btn-secondary mt-2 mb-5" value='Définir le mot'> 
                </div>
            </form>
            <form id="form" action="views/game.php" method="post">
                <div class="col-md-4">
                    <h4>Saisissez une lettre</h4>
                    <input class="form-control mt-3" maxlength='1' id="txt" type="text" name="lettre" required placeholder="Lettre">
                    <input id="submit" name="submit" class="btn btn-warning mt-2" type="submit" value="Confirmer">
                    <div id='nbrLeft'></div>
                    <div id="result"></div>
                    <div id="historique"></div>
                    <div id='resultat'></div>
                </div>

            </form>
        </div>
    </section>
    <script src="public/js/script.js"></script>
</body>
</html>