<main>
    <!-- <?php
    echo '<pre>';
    echo var_dump($users);
    echo '</pre>';

    ?> -->

    <div class="table-container">
        <table>
            <thead>
                <td>Pseudo</td>
                <td>Email</td>
                <td>Statut</td>
                <td></td>
                <td></td>
            </thead>
            <tbody>
                <?php
                foreach ($users as $user) { ?>
                    <tr>
                        <td><?= $user['pseudo'] ?></td>
                        <td><?= $user['email'] ?></td>
                        <td><?= $user['statut'] ? 'admin' : 'user' ?></td>
                        <td><a href="<?= SITE_NAME?>/admin/dashboard/users/modifier/<?= $user['id']?>" class="btn btn-primary">Modifier</a></td>
                        <td><a href="" class="btn btn-warning">Supprimer</a></td>
                    </tr>

                <?php } ?>

            </tbody>
        </table>
    </div>
</main>