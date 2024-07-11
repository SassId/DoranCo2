<h1>Edition</h1>

<form action="<?= SITE_NAME ?>/update" method="POST">
    <div>
        <label for="ancien-pseudo">Ancien Pseudo</label>
        <input type="text" id="ancien-pseudo" name="ancien-pseudo" value="<?= $user['pseudo'] ?>">
    </div>
    <div>
        <label for="nouveau-pseudo">Nouveau Pseudo</label>
        <input type="text" id="nouveau-pseudo" name="nouveau-pseudo">
    </div>
    <div>
        <label for="ancien-email">Ancien E-mail</label>
        <input type="text" id="ancien-email" name="ancien-email" value="<?= $user['email'] ?>">
    </div>
    <div>
    <label for="nouvel-email">Nouvel E-mail</label>
    <input type="text" id="nouvel-email" name="nouvel-email">
    </div>
    <input type="submit">


</form>