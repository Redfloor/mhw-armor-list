import {setType} from "../types";

// @Contributors This serves as an index for the whole dataset.
// When adding a monster, add it in the order it appears in-game.
// Add the data, add a png to assets/monsties, and the rest will all just work.

import {leather} from "./sets/leather";
import {jagras} from "./sets/jagras";
import {kulu} from "./sets/kulu";
import {pukei} from "./sets/pukei";
import {barroth} from "./sets/barroth";
import {girros} from "./sets/girros";
import {kadachi} from "./sets/kadachi";
import {paolumu} from "./sets/paolumu";
import {jyuratodus} from "./sets/jyuratodus";
import {anjanath} from "./sets/anjanath";
import {rathian} from "./sets/rathian";
import {pinkrathian} from "./sets/pinkrathian";
import {diablos} from "./sets/diablos";
import {legiana} from "./sets/legiana";
import {radobaan} from "./sets/radobaan";
import {banbaro} from "./sets/banbaro";
import {barioth} from "./sets/barioth";
import {zinogre} from "./sets/zinogre";

export const armorList: setType[] = [
    leather,
    jagras,
    kulu,
    pukei,
    barroth,
    girros,
    kadachi,
    paolumu,
    jyuratodus,
    anjanath,
    rathian,
    pinkrathian,
    legiana,
    diablos,
    radobaan,
    banbaro,
    barioth,
    zinogre,
];