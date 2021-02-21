/**
 * @file Exported WFSP tree mortality data as implemented by BehavePlus V6 and FOFEM v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */

// ------------------------------------------------------------------------------
//  FOFEM tree species and equations
//  These are used in the bark thickness and tree mortality functions.
//
//  NOTE: FOFEM v6 introduced new species codes for all species, and also
// introduced 13 new species and dropped 2 other species.
//
// The FOFEM 6 genus-species abbreviations are the object key.
//  The species object properties are:
//  - 'fofem5' FOFEM 5 genus-species codes (deprecated),
//  - 'mortEq' Index to mortality equation (base 1): 1, 3, and 10-20
//      - Through BP5, there were only mortality equations 1 and 3.
//      - BP6 introduces mortality equations 10 through 20.
//  - 'barkEq' Index to single bark thickness equation (base 1)
//  - 'regions' Region list (any combination of 1, 2, 3, and/or 4, where
//      - 1 = Interior West,
//      - 2 = Pacific West,
//      - 3 = NorthEast,
//      - 4 = SouthEast).
//  - 'scientific' Scientific name
//  - 'common' Common name
// ------------------------------------------------------------------------------

// Fofem factors for determining Single Bark Thickness.
// Each FOFEM species has a SBT equation index "barkEq" [1-39] into this array.
export const fofemSingleBarkThicknessFactor = [
  /* 00 */ 0.0, // Not used
  /* 01 */ 0.019, // Not used
  /* 02 */ 0.022,
  /* 03 */ 0.024,
  /* 04 */ 0.025,
  /* 05 */ 0.026,
  /* 06 */ 0.027,
  /* 07 */ 0.028,
  /* 08 */ 0.029,
  /* 09 */ 0.03,
  /* 10 */ 0.031,
  /* 11 */ 0.032,
  /* 12 */ 0.033,
  /* 13 */ 0.034,
  /* 14 */ 0.035,
  /* 15 */ 0.036,
  /* 16 */ 0.037,
  /* 17 */ 0.038,
  /* 18 */ 0.039,
  /* 19 */ 0.04,
  /* 20 */ 0.041,
  /* 21 */ 0.042,
  /* 22 */ 0.043,
  /* 23 */ 0.044,
  /* 24 */ 0.045,
  /* 25 */ 0.046,
  /* 26 */ 0.047,
  /* 27 */ 0.048,
  /* 28 */ 0.049,
  /* 29 */ 0.05,
  /* 30 */ 0.052,
  /* 31 */ 0.055,
  /* 32 */ 0.057, // Not used
  /* 33 */ 0.059,
  /* 34 */ 0.06,
  /* 35 */ 0.062,
  /* 36 */ 0.063, // Changed from 0.065 to 0.063 in Build 606
  /* 37 */ 0.068,
  /* 38 */ 0.072,
  /* 39 */ 0.081,
  /* 40 */ 0.0 // Reserved for Pinus palustrus (longleaf pine)
]

export const data = {
  ABAM: {
    fofem5: 'ABIAMA',
    mortEq: 1,
    barkEq: 26,
    regions: 2,
    scientific: 'Abies amabilis',
    common: 'Pacific silver fir'
  },
  ABBA: {
    fofem5: 'ABIBAL',
    mortEq: 1,
    barkEq: 10,
    regions: 134,
    scientific: 'Abies balsamea',
    common: 'Balsam fir'
  },
  ABCO: {
    fofem5: 'ABICON',
    mortEq: 10,
    barkEq: 27,
    regions: 12,
    scientific: 'Abies concolor',
    common: 'White fir'
  },
  ABGR: {
    fofem5: 'ABIGRA',
    mortEq: 11,
    barkEq: 25,
    regions: 12,
    scientific: 'Abies grandis',
    common: 'Grand fir'
  },
  ABLA: {
    fofem5: 'ABILAS',
    mortEq: 11,
    barkEq: 20,
    regions: 12,
    scientific: 'Abies lasiocarpa',
    common: 'Subalpine fir'
  },
  ABMA: {
    fofem5: 'ABIMAG',
    mortEq: 16,
    barkEq: 18,
    regions: 12,
    scientific: 'Abies magnifica',
    common: 'Red fir'
  },
  ABPR: {
    fofem5: 'ABIPRO',
    mortEq: 1,
    barkEq: 24,
    regions: 2,
    scientific: 'Abies procera',
    common: 'Noble fir'
  },
  ABISPP: {
    fofem5: 'ABISPP',
    mortEq: 1,
    barkEq: 30,
    regions: 34,
    scientific: 'Abies species',
    common: 'Firs'
  },
  ACBA3: {
    fofem5: 'ACEBAR',
    mortEq: 1,
    barkEq: 8,
    regions: 4,
    scientific: 'Acer barbatum',
    common: 'Southern sugar maple'
  },
  ACLE: {
    fofem5: 'ACELEU',
    mortEq: 1,
    barkEq: 8,
    regions: 4,
    scientific: 'Acer leucoderme',
    common: 'Chalk maple'
  },
  ACMA3: {
    fofem5: 'ACEMAC',
    mortEq: 1,
    barkEq: 3,
    regions: 2,
    scientific: 'Acer macrophyllum',
    common: 'Bigleaf maple'
  },
  ACNE2: {
    fofem5: 'ACENEG',
    mortEq: 1,
    barkEq: 13,
    regions: 34,
    scientific: 'Acer negundo',
    common: 'Boxelder'
  },
  ACNI5: {
    fofem5: 'ACENIG',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Acer nigrum',
    common: 'Black maple'
  },
  ACPE: {
    fofem5: 'ACEPEN',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Acer pensylvanicum',
    common: 'Striped maple'
  },
  ACRU: {
    fofem5: 'ACERUB',
    mortEq: 1,
    barkEq: 7,
    regions: 34,
    scientific: 'Acer rubrum',
    common: 'Red maple'
  },
  ACSA2: {
    fofem5: 'ACESACI',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Acer saccharinum',
    common: 'Silver maple'
  },
  ACSA3: {
    fofem5: 'ACESACU',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Acer saccharum',
    common: 'Sugar maple'
  },
  ACESPP: {
    fofem5: 'ACESPI',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Acer spicatum',
    common: 'Mountain maple'
  },
  ACSP2: {
    fofem5: 'ACESPP',
    mortEq: 1,
    barkEq: 8,
    regions: 34,
    scientific: 'Acer species',
    common: 'Maples'
  },
  AEGL: {
    fofem5: 'AESGLA',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Aesculus glabra',
    common: 'Ohio buckeye'
  },
  AEOC2: {
    fofem5: 'AESOCT',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Aesculus octandra',
    common: 'Yellow buckeye'
  },
  AIAL: {
    fofem5: 'AILALT',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Ailanthus altissima',
    common: 'Ailanthus'
  },
  ALRH2: {
    fofem5: 'ALNRHO',
    mortEq: 1,
    barkEq: 35,
    regions: 2,
    scientific: 'Alnus rhombifolia',
    common: 'White alder'
  },
  ALRU2: {
    fofem5: 'ALNRUB',
    mortEq: 1,
    barkEq: 5,
    regions: 2,
    scientific: 'Alnus rubra',
    common: 'Red alder'
  },
  AMAR3: {
    fofem5: 'AMEARB',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Amelanchier arborea',
    common: 'Common serviceberry'
  },
  ARME: {
    fofem5: 'ARBMEN',
    mortEq: 1,
    barkEq: 34,
    regions: 2,
    scientific: 'Arbutus menziesii',
    common: 'Pacific madrone'
  },
  BEAL2: {
    fofem5: 'BETALL',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Betula alleghaniensis',
    common: 'Yellow birch'
  },
  BELE: {
    fofem5: 'BETLEN',
    mortEq: 1,
    barkEq: 9,
    regions: 4,
    scientific: 'Betula lenta',
    common: 'Sweet birch'
  },
  BENI: {
    fofem5: 'BETNIG',
    mortEq: 1,
    barkEq: 8,
    regions: 34,
    scientific: 'Betula nigra',
    common: 'River birch'
  },
  BEOC2: {
    fofem5: 'BETOCC',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Betula occidentalis',
    common: 'Water birch'
  },
  BEPA: {
    fofem5: 'BETPAP',
    mortEq: 1,
    barkEq: 6,
    regions: 234,
    scientific: 'Betula papyrifera',
    common: 'Paper birch'
  },
  BETSPP: {
    fofem5: 'BETSPP',
    mortEq: 1,
    barkEq: 12,
    regions: 234,
    scientific: 'Betula species ',
    common: 'Birches'
  },
  CEOC: {
    fofem5: 'CELOCC',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Celtis occidentalis',
    common: 'Common hackberry'
  },
  CAAQ2: {
    fofem5: 'CARAQU',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Carya aquatica',
    common: 'Water hickory'
  },
  CACA18: {
    fofem5: 'CARCAR',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Carpinus caroliniana',
    common: 'American hornbeam'
  },
  CACOL3: {
    fofem5: 'CARCOR',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Carya cordiformis',
    common: 'Bitternut hickory'
  },
  CAGL8: {
    fofem5: 'CARGLA',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Carya glabra',
    common: 'Pignut hickory'
  },
  CAIL2: {
    fofem5: 'CARILL',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Carya illinoensis',
    common: 'Pecan'
  },
  CALA21: {
    fofem5: 'CARLAC',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Carya laciniosa',
    common: 'Shellbark hickory'
  },
  CAOV2: {
    fofem5: 'CAROVA',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Carya ovata',
    common: 'Shagbark hickory'
  },
  CARSPP: {
    fofem5: 'CARSPP',
    mortEq: 1,
    barkEq: 23,
    regions: 34,
    scientific: 'Carya species',
    common: 'Hickories'
  },
  CATE9: {
    fofem5: 'CARTEX',
    mortEq: 1,
    barkEq: 19,
    regions: 4,
    scientific: 'Carya texana',
    common: 'Black hickory'
  },
  CATO6: {
    fofem5: 'CARTOM',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Carya tomentosa',
    common: 'Mockernut hickory'
  },
  CACHM: {
    fofem5: 'CASCHR',
    mortEq: 1,
    barkEq: 24,
    regions: 2,
    scientific: 'Castanopsis chrysophylla',
    common: 'Giant chinkapin'
  },
  CADE12: {
    fofem5: 'CASDEN',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Castanea dentata',
    common: 'American chestnut'
  },
  CATSPP: {
    fofem5: 'CATSPP',
    mortEq: 1,
    barkEq: 16,
    regions: 4,
    scientific: 'Catalpa species',
    common: 'Catalpas'
  },
  CELA: {
    fofem5: 'CELLAE',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Celtis laevigata',
    common: 'Sugarberry'
  },
  CECA4: {
    fofem5: 'CERCAN',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Cercis canadensis',
    common: 'Eastern redbud'
  },
  CHLA: {
    fofem5: 'CHALAW',
    mortEq: 1,
    barkEq: 39,
    regions: 2,
    scientific: 'Chamaecyparis lawsoniana',
    common: 'Port Orford cedar'
  },
  CHNO: {
    fofem5: 'CHANOO',
    mortEq: 1,
    barkEq: 2,
    regions: 2,
    scientific: 'Chamaecyparis nootkatenis',
    common: 'Alaska cedar'
  },
  CHTH2: {
    fofem5: 'CHATHY',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Chamaecyparis thyoides',
    common: 'Atlantic white cedar'
  },
  COFL2: {
    fofem5: 'CORFLO',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Cornus florida',
    common: 'Flowering dogwood'
  },
  CONU4: {
    fofem5: 'CORNUT',
    mortEq: 1,
    barkEq: 35,
    regions: 2,
    scientific: 'Cornus nuttallii',
    common: 'Pacific dogwood'
  },
  CORSPP: {
    fofem5: 'CORSPP',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Cornus species',
    common: 'Dogwoods'
  },
  CRDO2: {
    fofem5: 'CRADOU',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Crataegus douglasii',
    common: 'Black hawthorn'
  },
  CRASPP: {
    fofem5: 'CRASPPW',
    mortEq: 1,
    barkEq: 35,
    regions: 2,
    scientific: 'Crataegus species (western)',
    common: 'Hawthorns (western)'
  },
  DIVI5: {
    fofem5: 'DIOVIR',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Diospyros virginiana',
    common: 'Persimmon'
  },
  FAGR: {
    fofem5: 'FAGGRA',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Fagus grandifolia',
    common: 'American beech'
  },
  FRAM2: {
    fofem5: 'FRAAMA',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Fraxinus americana',
    common: 'White ash'
  },
  FRNI: {
    fofem5: 'FRANIG',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Fraxinus nigra',
    common: 'Black ash'
  },
  FRPE: {
    fofem5: 'FRAPEN',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Fraxinus pennsylvanica',
    common: 'Green ash'
  },
  FRPR: {
    fofem5: 'FRAPRO',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Fraxinus profunda',
    common: 'Pumpkin ash'
  },
  FRQU: {
    fofem5: 'FRAQUA',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Fraxinus quadrangulata',
    common: 'Blue ash'
  },
  FRASPP: {
    fofem5: 'FRASPP',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Fraxinus species',
    common: 'Ashes'
  },
  GLTR: {
    fofem5: 'GLETRI',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Gleditsia triacanthos',
    common: 'Honeylocust'
  },
  GOLA: {
    fofem5: 'GORLAS',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Gordonia lasianthus',
    common: 'Loblolly bay'
  },
  GYDI: {
    fofem5: 'GYMDIO',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Gymnocladus dioicus',
    common: 'Kentucky coffeetree'
  },
  HALSPP: {
    fofem5: 'HALSPP',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Halesia species',
    common: 'Silverbells'
  },
  ILOP: {
    fofem5: 'ILEOPA',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Ilex opaca',
    common: 'American holly'
  },
  JUCI: {
    fofem5: 'JUGCIN',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Juglans cinerea',
    common: 'Butternut'
  },
  JUNI: {
    fofem5: 'JUGNIG',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Juglans nigra',
    common: 'Black walnut'
  },
  JUOC: {
    fofem5: 'JUNOCC',
    mortEq: 1,
    barkEq: 4,
    regions: 2,
    scientific: 'Juniperus occidentalis',
    common: 'Western juniper'
  },
  JUNSPP: {
    fofem5: 'JUNSPP',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Juniperus species',
    common: 'Junipers/Redcedars'
  },
  JUVI: {
    fofem5: 'JUNVIR',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Juniperus virginiana',
    common: 'Eastern red cedar'
  },
  LALA: {
    fofem5: 'LARLAR',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Larix laricina',
    common: 'Tamarack'
  },
  LALY: {
    fofem5: 'LARLYA',
    mortEq: 1,
    barkEq: 29,
    regions: 2,
    scientific: 'Larix lyallii',
    common: 'Subalpine larch'
  },
  LAOC: {
    fofem5: 'LAROCC',
    mortEq: 14,
    barkEq: 36,
    regions: 12,
    scientific: 'Larix occidentalis',
    common: 'Western larch'
  },
  LIDE: {
    fofem5: 'LIBDEC',
    mortEq: 12,
    barkEq: 34,
    regions: 2,
    scientific: 'Libocedrus decurrens',
    common: 'Incense cedar'
  },
  LIST2: {
    fofem5: 'LIQSTY',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Liquidambar styraciflua',
    common: 'Sweetgum'
  },
  LITU: {
    fofem5: 'LIRTUL',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Liriodendron tulipifera',
    common: 'Yellow poplar'
  },
  LIDE3: {
    fofem5: 'LITDEN',
    mortEq: 1,
    barkEq: 30,
    regions: 2,
    scientific: 'Lithocarpus densiflorus',
    common: 'Tanoak'
  },
  MAPO: {
    fofem5: 'MACPOM',
    mortEq: 1,
    barkEq: 16,
    regions: 4,
    scientific: 'Maclura pomifera',
    common: 'Osage orange'
  },
  MAAC: {
    fofem5: 'MAGACU',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Magnolia acuminata',
    common: 'Cucumber tree'
  },
  MAGR4: {
    fofem5: 'MAGGRA',
    mortEq: 1,
    barkEq: 12,
    regions: 4,
    scientific: 'Magnolia grandiflora',
    common: 'Southern magnolia'
  },
  MAMA2: {
    fofem5: 'MAGMAC',
    mortEq: 1,
    barkEq: 12,
    regions: 4,
    scientific: 'Magnolia macrophylla',
    common: 'Bigleaf magnolia'
  },
  MAGSPP: {
    fofem5: 'MAGSPP',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Magnolia species',
    common: 'Magnolias'
  },
  MAVI2: {
    fofem5: 'MAGVIR',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Magnolia virginiana',
    common: 'Sweetbay'
  },
  MALPRU: {
    fofem5: 'MALPRU',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Prunus species',
    common: 'Apples/Cherries'
  },
  MALSPP: {
    fofem5: 'MALSPP',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Malus species',
    common: 'Apples'
  },
  MOAL: {
    fofem5: 'MORALB',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Morus alba',
    common: 'White mulberry'
  },
  MORU2: {
    fofem5: 'MORRUB',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Morus rubra',
    common: 'Red mulberry'
  },
  MORSPP: {
    fofem5: 'MORSPP',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Morus species',
    common: 'Mulberries'
  },
  NYAQ2: {
    fofem5: 'NYSAQU',
    mortEq: 1,
    barkEq: 9,
    regions: 4,
    scientific: 'Nyssa aquatica',
    common: 'Water tupelo'
  },
  NYOG: {
    fofem5: 'NYSOGE',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Nyssa ogache',
    common: 'Ogeechee tupelo'
  },
  NYSSPP: {
    fofem5: 'NYSSPP',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Nyssa species',
    common: 'Tupelos'
  },
  NYSY: {
    fofem5: 'NYSSYL',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Nyssa sylvatica',
    common: 'Black gum, Black tupelo'
  },
  NYBI: {
    fofem5: 'NYSSYLB',
    mortEq: 1,
    barkEq: 16,
    regions: 4,
    scientific: 'Nyssa biflora',
    common: 'Swamp tupelo'
  },
  OSVI: {
    fofem5: 'OSTVIR',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Ostrya virginiana',
    common: 'Hophornbeam'
  },
  OXAR: {
    fofem5: 'OXYARB',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Oxydendrum arboreum',
    common: 'Sourwood'
  },
  PATO2: {
    fofem5: 'PAUTOM',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Paulownia tomentosa',
    common: 'Princess tree'
  },
  PEBO: {
    fofem5: 'PERBOR',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Persea borbonia',
    common: 'Redbay'
  },
  PIAB: {
    fofem5: 'PICABI',
    mortEq: 3,
    barkEq: 8,
    regions: 34,
    scientific: 'Picea abies',
    common: 'Norway spruce'
  },
  PIEN: {
    fofem5: 'PICENG',
    mortEq: 15,
    barkEq: 15,
    regions: 12,
    scientific: 'Picea engelmannii',
    common: 'Engelmann spruce'
  },
  PIGL: {
    fofem5: 'PICGLA',
    mortEq: 3,
    barkEq: 4,
    regions: 123,
    scientific: 'Picea glauca',
    common: 'White spruce'
  },
  PIMA: {
    fofem5: 'PICMAR',
    mortEq: 3,
    barkEq: 11,
    regions: 234,
    scientific: 'Picea mariana',
    common: 'Black spruce'
  },
  PIPU: {
    fofem5: 'PICPUN',
    mortEq: 3,
    barkEq: 10,
    regions: 1,
    scientific: 'Picea pungens',
    common: 'Blue spruce'
  },
  PIRU: {
    fofem5: 'PICRUB',
    mortEq: 3,
    barkEq: 13,
    regions: 34,
    scientific: 'Picea rubens',
    common: 'Red spruce'
  },
  PISI: {
    fofem5: 'PICSIT',
    mortEq: 3,
    barkEq: 6,
    regions: 2,
    scientific: 'Picea sitchensis',
    common: 'Sitka spruce'
  },
  PICSPP: {
    fofem5: 'PICSPP',
    mortEq: 3,
    barkEq: 13,
    regions: 34,
    scientific: 'Picea species',
    common: 'Spruces'
  },
  PIAL: {
    fofem5: 'PINALB',
    mortEq: 17,
    barkEq: 9,
    regions: 12,
    scientific: 'Pinus albicaulis',
    common: 'Whitebark pine'
  },
  PIAT: {
    fofem5: 'PINATT',
    mortEq: 1,
    barkEq: 9,
    regions: 2,
    scientific: 'Pinus attenuata',
    common: 'Knobcone pine'
  },
  PIBA2: {
    fofem5: 'PINBAN',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Pinus banksiana',
    common: 'Jack pine'
  },
  PICL: {
    fofem5: 'PINCLA',
    mortEq: 1,
    barkEq: 14,
    regions: 4,
    scientific: 'Pinus clausa',
    common: 'Sand pine'
  },
  PICO: {
    fofem5: 'PINCON',
    mortEq: 17,
    barkEq: 7,
    regions: 12,
    scientific: 'Pinus contorta',
    common: 'Lodgepole pine'
  },
  PIEC2: {
    fofem5: 'PINECH',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Pinus echinata',
    common: 'Shortleaf pine'
  },
  PIEL: {
    fofem5: 'PINELL',
    mortEq: 1,
    barkEq: 31,
    regions: 4,
    scientific: 'Pinus elliottii',
    common: 'Slash pine'
  },
  PIFL2: {
    fofem5: 'PINFLE',
    mortEq: 1,
    barkEq: 9,
    regions: 1,
    scientific: 'Pinus flexilis',
    common: 'Limber pine'
  },
  PIGL2: {
    fofem5: 'PINGLA',
    mortEq: 1,
    barkEq: 14,
    regions: 4,
    scientific: 'Pinus glabra',
    common: 'Spruce pine'
  },
  PIJE: {
    fofem5: 'PINJEF',
    mortEq: 19,
    barkEq: 37,
    regions: 12,
    scientific: 'Pinus jeffreyi',
    common: 'Jeffrey pine'
  },
  PILA: {
    fofem5: 'PINLAM',
    mortEq: 18,
    barkEq: 38,
    regions: 12,
    scientific: 'Pinus lambertiana',
    common: 'Sugar pine'
  },
  PIMO3: {
    fofem5: 'PINMON',
    mortEq: 1,
    barkEq: 14,
    regions: 12,
    scientific: 'Pinus monticola',
    common: 'Western white pine'
  },
  PIPA2: {
    fofem5: 'PINPAL',
    mortEq: 5,
    barkEq: 40,
    regions: 4,
    scientific: 'Pinus palustrus',
    common: 'Longleaf pine'
  },
  PIPO: {
    fofem5: 'PINPON',
    mortEq: 19,
    barkEq: 36,
    regions: 12,
    scientific: 'Pinus ponderosa',
    common: 'Ponderosa pine'
  },
  PIPU5: {
    fofem5: 'PINPUN',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Pinus pungens',
    common: 'Table mountain pine'
  },
  PIRE: {
    fofem5: 'PINRES',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Pinus resinosa',
    common: 'Red pine'
  },
  PIRI: {
    fofem5: 'PINRIG',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Pinus rigida',
    common: 'Pitch pine'
  },
  PISA2: {
    fofem5: 'PINSAB',
    mortEq: 1,
    barkEq: 12,
    regions: 2,
    scientific: 'Pinus sabiniana',
    common: 'Gray (Digger) pine'
  },
  PISE: {
    fofem5: 'PINSER',
    mortEq: 1,
    barkEq: 35,
    regions: 34,
    scientific: 'Pinus serotina',
    common: 'Pond pine'
  },
  PINSPP: {
    fofem5: 'PINSPP',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Pinus species',
    common: 'Pines'
  },
  PIST: {
    fofem5: 'PINSTR',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Pinus strobus',
    common: 'Eastern white pine'
  },
  PISY: {
    fofem5: 'PINSYL',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Pinus sylvestris',
    common: 'Scots pine'
  },
  PITA: {
    fofem5: 'PINTAE',
    mortEq: 1,
    barkEq: 30,
    regions: 34,
    scientific: 'Pinus taeda',
    common: 'Loblolly pine'
  },
  PIVI2: {
    fofem5: 'PINVIR',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Pinus virginiana',
    common: 'Virginia pine'
  },
  PLOC: {
    fofem5: 'PLAOCC',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Plantus occidentalis',
    common: 'American sycamore'
  },
  POBA2: {
    fofem5: 'POPBAL',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Populus balsamifera',
    common: 'Balsam poplar'
  },
  PODE3: {
    fofem5: 'POPDEL',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Populus deltoides',
    common: 'Eastern cottonwood'
  },
  POGR4: {
    fofem5: 'POPGRA',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Populus grandidentata',
    common: 'Bigtooth aspen'
  },
  POHE4: {
    fofem5: 'POPHET',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Populus heterophylla',
    common: 'Swamp cottonwood'
  },
  POPSPP: {
    fofem5: 'POPSPP',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Populus species',
    common: 'Poplars'
  },
  POTR15: {
    fofem5: 'POPTRI',
    mortEq: 1,
    barkEq: 23,
    regions: 2,
    scientific: 'Populus trichocarpa',
    common: 'Black cottonwood'
  },
  PRAM: {
    fofem5: 'PRUAME',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Prunus americana',
    common: 'American plum'
  },
  PREM: {
    fofem5: 'PRUEMA',
    mortEq: 1,
    barkEq: 35,
    regions: 2,
    scientific: 'Prunus emarginata',
    common: 'Bitter cherry'
  },
  PRPE2: {
    fofem5: 'PRUDEN',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Prunus pensylvanica',
    common: 'Pin cherry'
  },
  PRSE2: {
    fofem5: 'PRUSER',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Prunus serotina',
    common: 'Black cherry'
  },
  PRVI: {
    fofem5: 'PRUVIR',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Prunus virginiana',
    common: 'Chokecherry'
  },
  PSME: {
    fofem5: 'PSEMEN',
    mortEq: 20,
    barkEq: 36,
    regions: 12,
    scientific: 'Pseudotsuga menziesii',
    common: 'Douglas-fir'
  },
  QUAG: {
    fofem5: 'QUEAGR',
    mortEq: 1,
    barkEq: 29,
    regions: 2,
    scientific: 'Quercus agrifolia',
    common: 'California live oak'
  },
  QUAL: {
    fofem5: 'QUEALB',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Quercus alba',
    common: 'White oak'
  },
  QUBI: {
    fofem5: 'QUEBIC',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Quercus bicolor',
    common: 'Swamp white oak'
  },
  QUCH2: {
    fofem5: 'QUECHR',
    mortEq: 1,
    barkEq: 3,
    regions: 2,
    scientific: 'Quercus chrysolepis',
    common: 'Canyon live oak'
  },
  QUOC2: {
    fofem5: 'QUEOCC',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Quercus coccinea',
    common: 'Scarlet oak'
  },
  QUDU: {
    fofem5: 'QUEDOU',
    mortEq: 1,
    barkEq: 12,
    regions: 2,
    scientific: 'Quercus douglasii',
    common: 'Blue oak'
  },
  QUEL: {
    fofem5: 'QUEELL',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Quercus ellipsoidalis',
    common: 'Northern pin oak'
  },
  QUEN: {
    fofem5: 'QUEENG',
    mortEq: 1,
    barkEq: 33,
    regions: 2,
    scientific: 'Quercus engelmannii',
    common: 'Engelmann oak'
  },
  QUFA: {
    fofem5: 'QUEFAL',
    mortEq: 1,
    barkEq: 23,
    regions: 34,
    scientific: 'Quercus falcata',
    common: 'Southern red oak'
  },
  QUGA4: {
    fofem5: 'QUEGAR',
    mortEq: 1,
    barkEq: 8,
    regions: 2,
    scientific: 'Quercus garryana',
    common: 'Oregon white oak'
  },
  QUIM: {
    fofem5: 'QUEIMB',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Quercus imbricaria',
    common: 'Shingle oak'
  },
  QUIN: {
    fofem5: 'QUEINC',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Quercus incana',
    common: 'Bluejack oak'
  },
  QUKE: {
    fofem5: 'QUEKEL',
    mortEq: 1,
    barkEq: 9,
    regions: 2,
    scientific: 'Quercus kellogii',
    common: 'Califonia black oak'
  },
  QULA2: {
    fofem5: 'QUELAE',
    mortEq: 1,
    barkEq: 16,
    regions: 4,
    scientific: 'Quercus laevis',
    common: 'Turkey oak'
  },
  QULA3: {
    fofem5: 'QUELAU',
    mortEq: 1,
    barkEq: 15,
    regions: 4,
    scientific: 'Quercus laurifolia',
    common: 'Laurel oak'
  },
  QULO: {
    fofem5: 'QUELOB',
    mortEq: 1,
    barkEq: 22,
    regions: 2,
    scientific: 'Quercus lobata',
    common: 'Valley oak'
  },
  QULY: {
    fofem5: 'QUELYR',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Quercus lyrata',
    common: 'Overcup oak'
  },
  QUMA2: {
    fofem5: 'QUEMAC',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Quercus macrocarpa',
    common: 'Bur oak'
  },
  QUMA3: {
    fofem5: 'QUEMAR',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Quercus marilandica',
    common: 'Blackjack oak'
  },
  QUMI: {
    fofem5: 'QUEMIC',
    mortEq: 1,
    barkEq: 25,
    regions: 34,
    scientific: 'Quercus michauxii',
    common: 'Swamp chestnut oak'
  },
  QUMU: {
    fofem5: 'QUEMUE',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Quercus muehlenbergii',
    common: 'Chinkapin oak'
  },
  QUNI: {
    fofem5: 'QUENIG',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Quercus nigra',
    common: 'Water oak'
  },
  QUNU: {
    fofem5: 'QUENUT',
    mortEq: 1,
    barkEq: 9,
    regions: 4,
    scientific: 'Quercus nuttallii',
    common: 'Nuttall oak'
  },
  QUPA2: {
    fofem5: 'QUEPAL',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Quercus palustris',
    common: 'Pin oak'
  },
  QUPH: {
    fofem5: 'QUEPHE',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Quercus phellos',
    common: 'Willow oak'
  },
  QUPR2: {
    fofem5: 'QUEPRI',
    mortEq: 1,
    barkEq: 28,
    regions: 34,
    scientific: 'Quercus prinus',
    common: 'Chestnut oak'
  },
  QURU: {
    fofem5: 'QUERUB',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Quercus rubra',
    common: 'Northern red oak'
  },
  QUSH: {
    fofem5: 'QUESHU',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Quercus shumardii',
    common: 'Shumard oak'
  },
  QUESPP: {
    fofem5: 'QUESPP',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Quercus species',
    common: 'Oaks'
  },
  QUST: {
    fofem5: 'QUESTE',
    mortEq: 1,
    barkEq: 23,
    regions: 34,
    scientific: 'Quercus stellata',
    common: 'Post oak'
  },
  QUVE: {
    fofem5: 'QUEVEL',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Quercus velutina',
    common: 'Black oak'
  },
  QUVI: {
    fofem5: 'QUEVIR',
    mortEq: 1,
    barkEq: 22,
    regions: 4,
    scientific: 'Quercus virginiana',
    common: 'Live oak'
  },
  QUWI2: {
    fofem5: 'QUEWIS',
    mortEq: 1,
    barkEq: 13,
    regions: 2,
    scientific: 'Quercus wislizenii',
    common: 'Interior live oak'
  },
  ROPS: {
    fofem5: 'ROBPSE',
    mortEq: 1,
    barkEq: 28,
    regions: 34,
    scientific: 'Robinia pseudoacacia',
    common: 'Black locust'
  },
  SABE2: {
    fofem5: 'SALDIA',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Salix bebbiana',
    common: 'Diamond willow'
  },
  SANI: {
    fofem5: 'SALNIG',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Salix nigra',
    common: 'Black willow'
  },
  SALSPP: {
    fofem5: 'SALSPP',
    mortEq: 1,
    barkEq: 20,
    regions: 234,
    scientific: 'Salix species',
    common: 'Willows'
  },
  SAAL5: {
    fofem5: 'SASALB',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Sassafras albidum',
    common: 'Sassafras'
  },
  SEGI2: {
    fofem5: 'SEQGIG',
    mortEq: 1,
    barkEq: 39,
    regions: 2,
    scientific: 'Sequoiadendron gigantea',
    common: 'Giant sequoia'
  },
  SESE3: {
    fofem5: 'SEQSEM',
    mortEq: 1,
    barkEq: 39,
    regions: 2,
    scientific: 'Sequoia sempervirens',
    common: 'Redwood'
  },
  SOAM3: {
    fofem5: 'SORAME',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Sorbus americana',
    common: 'American mountain ash'
  },
  TABR2: {
    fofem5: 'TAXBRE',
    mortEq: 1,
    barkEq: 4,
    regions: 12,
    scientific: 'Taxus brevifolia',
    common: 'Pacific yew'
  },
  TADI2: {
    fofem5: 'TAXDIS',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Taxodium distichum',
    common: 'Bald cypress'
  },
  TAAS: {
    fofem5: 'TAXDISN',
    mortEq: 1,
    barkEq: 21,
    regions: 4,
    scientific: 'Taxodium distictum var. nutans',
    common: 'Pond cypress'
  },
  THOC2: {
    fofem5: 'THUOCC',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Thuja occidentalis',
    common: 'Northern white cedar'
  },
  THPL: {
    fofem5: 'THUPLI',
    mortEq: 1,
    barkEq: 14,
    regions: 12,
    scientific: 'Thuja plicata',
    common: 'Western red cedar'
  },
  THUSPP: {
    fofem5: 'THUSPP',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Thuju species',
    common: 'Arborvitae'
  },
  TIAM: {
    fofem5: 'TILAME',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Tilia americana',
    common: 'American basswood'
  },
  TIHE: {
    fofem5: 'TILHET',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Tilia heterophylla',
    common: 'White basswood'
  },
  TSCA: {
    fofem5: 'TSUCAN',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Tsuga canadensis',
    common: 'Eastern hemlock'
  },
  TSHE: {
    fofem5: 'TSUHET',
    mortEq: 1,
    barkEq: 19,
    regions: 12,
    scientific: 'Tsuga heterophylla',
    common: 'Western hemlock'
  },
  TSME: {
    fofem5: 'TSUMER',
    mortEq: 1,
    barkEq: 19,
    regions: 12,
    scientific: 'Tsuga mertensiana',
    common: 'Mountain hemlock'
  },
  ULAL: {
    fofem5: 'ULMALA',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Ulmus alata',
    common: 'Winged elm'
  },
  ULAM: {
    fofem5: 'ULMAME',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Ulmus americana',
    common: 'American elm'
  },
  ULPU: {
    fofem5: 'ULMPUM',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Ulmus pumila',
    common: 'Siberian elm'
  },
  ULRU: {
    fofem5: 'ULMRUB',
    mortEq: 1,
    barkEq: 11,
    regions: 34,
    scientific: 'Ulmus rubra',
    common: 'Slippery elm'
  },
  ULMSPP: {
    fofem5: 'ULMSPP',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Ulmus species',
    common: 'Elms'
  },
  ULTH: {
    fofem5: 'ULMTHO',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Ulmus thomasii',
    common: 'Rock elm'
  },
  UMCA: {
    fofem5: 'UMBCAL',
    mortEq: 1,
    barkEq: 5,
    regions: 2,
    scientific: 'Umbellularia californica',
    common: 'California laurel'
  },
  ABLO: {
    fofem5: 'ABLO',
    mortEq: 10,
    barkEq: 27,
    regions: 12,
    scientific: 'Abies lowiana',
    common: 'Sierra white fir'
  },
  ABNO: {
    fofem5: 'ABNO',
    mortEq: 1,
    barkEq: 24,
    regions: 12,
    scientific: 'Abies nobilis',
    common: 'Noble fir'
  },
  AEFL: {
    fofem5: 'AEFL',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Aesculus flava',
    common: 'Yellow buckeye'
  },
  CANO9: {
    fofem5: 'CANO9',
    mortEq: 1,
    barkEq: 2,
    regions: 2,
    scientific: 'Callitropsis nootkatensis',
    common: 'Alaska cedar'
  },
  CADE27: {
    fofem5: 'CADE27',
    mortEq: 12,
    barkEq: 34,
    regions: 12,
    scientific: 'Calocedrus decurrens',
    common: 'Incense cedar'
  },
  CAAL27: {
    fofem5: 'CAAL27',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Carya alba',
    common: 'Mockernut hickory'
  },
  CACA38: {
    fofem5: 'CACA38',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Carya carolinae septentrionalis',
    common: 'Shagbark hickory'
  },
  CAAM29: {
    fofem5: 'CAAM29',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Castenea Americana',
    common: 'American chestnut'
  },
  CHCHC4: {
    fofem5: 'CHCHC4',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Chrysolepis chrysophylla',
    common: 'Giant chinkapin'
  },
  CUNO: {
    fofem5: 'CUNO',
    mortEq: 1,
    barkEq: 2,
    regions: 2,
    scientific: 'Cupressus nootkatensis',
    common: 'Nootka cypress'
  },
  CUTH: {
    fofem5: 'CUTH',
    mortEq: 1,
    barkEq: 4,
    regions: 2,
    scientific: 'Cupressus thyoides',
    common: 'Atlantic white cedar'
  },
  QUTE: {
    fofem5: 'QUTE',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Quercus texana',
    common: 'Texas red oak'
  },
  ULRA: {
    fofem5: 'ULRA',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Ulmus racemosa',
    common: 'Rock elm'
  }
}
