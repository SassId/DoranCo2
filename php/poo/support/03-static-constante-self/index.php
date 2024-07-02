<?php

require_once './SimulateurCredit.php';

echo SimulateurCredit::TAUX . '<br>';

echo SimulateurCredit::calculInteret(10022);
