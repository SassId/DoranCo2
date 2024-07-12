<h1>Edition</h1>

<form action="<?= SITE_NAME ?>/update" method="POST">
    <div>
        <label for="ancien-pseudo">Ancien Pseudo</label>
        <input type="text" id="ancien-pseudo" name="ancien-pseudo" value="<?= $user['pseudo'] ?>" readonly>
    </div>
    <div>
        <label for="nouveau-pseudo">Nouveau Pseudo</label>
        <input type="text" id="nouveau-pseudo" name="nouveau-pseudo">
    </div>
    <div>
        <label for="ancien-email">Ancien E-mail</label>
        <input type="text" id="ancien-email" name="ancien-email" value="<?= $user['email'] ?>" readonly>
    </div>
    <div>
        <label for="nouvel-email">Nouvel E-mail</label>
        <input type="text" id="nouvel-email" name="nouvel-email">
    </div>
    <div>
        <label for="user-id">User Id</label>
        <input type="text" name="user-id" id="user-id" value="<?= $user['id'] ?>" readonly>
        <!-- <input type="text" name="user-id" id="user-id" value="<?= $user['id'] ?>" hidden> -->
    </div>
    <div class="radio-group">
        <label>Statut :</label>
        <input type="radio" id="admin" name="statut" value="true" <?php ($user['statut'] ? "checked" : "") ?>>
        <label for="admin">Admin</label>

        <input type="radio" id="user" name="statut" value="false" <?php ($user['statut'] ? "checked" : "") ?>>
        <label for="user">User</label>
    </div>
    <input type="submit">


</form>