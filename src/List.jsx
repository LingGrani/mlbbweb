function ListHeroMLBB() {
  const Heroes = [
    {
      id: 1,
      nama: 'Miya',
      role: 'marksman',
      image: './src/assets/hero/Hero (1).webp'
    },
    {
      id: 2,
      nama: 'Balmond',
      role: 'fighter',
      image: './src/assets/hero/Hero (2).webp'
    },
    {
      id: 3,
      nama: 'Saber',
      role: 'assassin',
      image: './src/assets/hero/Hero (3).webp'
    },
    {
      id: 4,
      nama: 'Alice',
      role: 'mage tank',
      image: './src/assets/hero/Hero (4).webp'
    },
    {
      id: 5,
      nama: 'Nana',
      role: 'mage',
      image: './src/assets/hero/Hero (5).webp'
    },
    {
      id: 6,
      nama: 'Tigreal',
      role: 'tank',
      image: './src/assets/hero/Hero (6).webp'
    },
    {
      id: 7,
      nama: 'Alucard',
      role: 'fighter assassin',
      image: './src/assets/hero/Hero (7).webp'
    },
    {
      id: 8,
      nama: 'Karina',
      role: 'assassin',
      image: './src/assets/hero/Hero (8).webp'
    },
    {
      id: 9,
      nama: 'Akai',
      role: 'tank',
      image: './src/assets/hero/Hero (9).webp'
    },
    {
      id: 10,
      nama: 'Franco',
      role: 'tank',
      image: './src/assets/hero/Hero (10).webp'
    },
    {
      id: 11,
      nama: 'Bane',
      role: 'fighter mage',
      image: './src/assets/hero/Hero (11).webp'
    },
    {
      id: 12,
      nama: 'Bruno',
      role: 'marksman',
      image: './src/assets/hero/Hero (12).webp'
    },
    {
      id: 13,
      nama: 'Clint',
      role: 'marksman',
      image: './src/assets/hero/Hero (13).webp'
    },
    {
      id: 14,
      nama: 'Rafaela',
      role: 'support',
      image: './src/assets/hero/Hero (14).webp'
    },
    {
      id: 15,
      nama: 'Eudora',
      role: 'mage',
      image: './src/assets/hero/Hero (15).webp'
    },
    {
      id: 16,
      nama: 'Zilong',
      role: 'fighter assassin',
      image: './src/assets/hero/Hero (16).webp'
    },
    {
      id: 17,
      nama: 'Fanny',
      role: 'assassin',
      image: './src/assets/hero/Hero (17).webp'
    },
    {
      id: 18,
      nama: 'Layla',
      role: 'marksman',
      image: './src/assets/hero/Hero (18).webp'
    },
    {
      id: 19,
      nama: 'Minotaur',
      role: 'tank support',
      image: './src/assets/hero/Hero (19).webp'
    },
    {
      id: 20,
      nama: 'Lolita',
      role: 'tank support',
      image: './src/assets/hero/Hero (20).webp'
    },
    {
      id: 21,
      nama: 'Hayabusa',
      role: 'assassin',
      image: './src/assets/hero/Hero (21).webp'
    },
    {
      id: 22,
      nama: 'Freya',
      role: 'fighter',
      image: './src/assets/hero/Hero (22).webp'
    },
    {
      id: 23,
      nama: 'Gord',
      role: 'mage',
      image: './src/assets/hero/Hero (23).webp'
    },
    {
      id: 24,
      nama: 'Natalia',
      role: 'assassin',
      image: './src/assets/hero/Hero (24).webp'
    },
    {
      id: 25,
      nama: 'Kagura',
      role: 'mage',
      image: ''
    },
    {
      id: 26,
      nama: 'Chou',
      role: 'fighter',
      image: './src/assets/hero/Hero (26).webp'
    },
    {
      id: 27,
      nama: 'Sun',
      role: 'fighter',
      image: './src/assets/hero/Hero (27).webp'
    },
    {
      id: 28,
      nama: 'Alpha',
      role: 'fighter',
      image: './src/assets/hero/Hero (28).webp'
    },
    {
      id: 29,
      nama: 'Ruby',
      role: 'fighter',
      image: './src/assets/hero/Hero (29).webp'
    },
    {
      id: 30,
      nama: 'Yi Sun-Shin',
      role: 'assassin marksman',
      image: './src/assets/hero/Hero (30).webp'
    },
    {
      id: 31,
      nama: 'Moskov',
      role: 'marksman',
      image: './src/assets/hero/Hero (31).webp'
    },
    {
      id: 32,
      nama: 'Johnson',
      role: 'tank support',
      image: './src/assets/hero/Hero (32).webp'
    },
    {
      id: 33,
      nama: 'Cyclops',
      role: 'mage',
      image: './src/assets/hero/Hero (33).webp'
    },
    {
      id: 34,
      nama: 'Estes',
      role: 'support',
      image: './src/assets/hero/Hero (34).webp'
    },
    {
      id: 35,
      nama: 'Hilda',
      role: 'fighter tank',
      image: './src/assets/hero/Hero (35).webp'
    },
    {
      id: 36,
      nama: 'Aurora',
      role: 'mage',
      image: './src/assets/hero/Hero (36).webp'
    },
    {
      id: 37,
      nama: 'Lapu Lapu',
      role: 'fighter',
      image: './src/assets/hero/Hero (37).webp'
    },
    {
      id: 38,
      nama: 'Vexana',
      role: 'mage',
      image: './src/assets/hero/Hero (38).webp'
    },
    {
      id: 39,
      nama: 'Roger',
      role: 'fighter marksman',
      image: './src/assets/hero/Hero (39).webp'
    },
    {
      id: 40,
      nama: 'Karrie',
      role: 'marksman',
      image: './src/assets/hero/Hero (40).webp'
    },
    {
      id: 41,
      nama: 'Gatot Kaca',
      role: 'tank fighter',
      image: './src/assets/hero/Hero (41).webp'
    },
    {
      id: 42,
      nama: 'Harley',
      role: 'mage',
      image: './src/assets/hero/Hero (42).webp'
    },
    {
      id: 43,
      nama: 'Irithel',
      role: 'marksman',
      image: './src/assets/hero/Hero (43).webp'
    },
    {
      id: 44,
      nama: 'Grock',
      role: 'tank',
      image: './src/assets/hero/Hero (44).webp'
    },
    {
      id: 45,
      nama: 'Argus',
      role: 'fighter',
      image: './src/assets/hero/Hero (45).webp'
    },
    {
      id: 46,
      nama: 'Odette',
      role: 'mage',
      image: './src/assets/hero/Hero (46).webp'
    },
    {
      id: 47,
      nama: 'Lancelot',
      role: 'assassin',
      image: './src/assets/hero/Hero (47).webp'
    },
    {
      id: 48,
      nama: 'Diggie',
      role: 'support',
      image: './src/assets/hero/Hero (48).webp'
    },
    {
      id: 49,
      nama: 'Hylos',
      role: 'tank',
      image: './src/assets/hero/Hero (49).webp'
    },
    {
      id: 50,
      nama: 'Zhask',
      role: 'mage',
      image: './src/assets/hero/Hero (50).webp'
    },
    {
      id: 51,
      nama: 'Helcurt',
      role: 'assassin',
      image: './src/assets/hero/Hero (51).webp'
    },
    {
      id: 52,
      nama: 'Pharsa',
      role: 'mage',
      image: './src/assets/hero/Hero (52).webp'
    },
    {
      id: 53,
      nama: 'Lesley',
      role: 'marksman',
      image: './src/assets/hero/Hero (53).webp'
    },
    {
      id: 54,
      nama: 'Jawhead',
      role: 'fighter',
      image: './src/assets/hero/Hero (54).webp'
    },
    {
      id: 55,
      nama: 'Angela',
      role: 'support',
      image: './src/assets/hero/Hero (55).webp'
    },
    {
      id: 56,
      nama: 'Gusion',
      role: 'assassin',
      image: './src/assets/hero/Hero (56).webp'
    },
    {
      id: 57,
      nama: 'Valir',
      role: 'mage',
      image: './src/assets/hero/Hero (57).webp'
    },
    {
      id: 58,
      nama: 'Martis',
      role: 'fighter',
      image: './src/assets/hero/Hero (58).webp'
    },
    {
      id: 59,
      nama: 'Uranus',
      role: 'tank',
      image: './src/assets/hero/Hero (59).webp'
    },
    {
      id: 60,
      nama: 'Hanabi',
      role: 'marksman',
      image: './src/assets/hero/Hero (60).webp'
    },
    {
      id: 61,
      nama: "Chang'e",
      role: 'mage',
      image: './src/assets/hero/Hero (61).webp'
    },
    {
      id: 62,
      nama: 'Kaja',
      role: 'support fighter',
      image: './src/assets/hero/Hero (62).webp'
    },
    {
      id: 63,
      nama: 'Selena',
      role: 'assassin mage',
      image: './src/assets/hero/Hero (63).webp'
    },
    {
      id: 64,
      nama: 'Aldous',
      role: 'fighter',
      image: './src/assets/hero/Hero (64).webp'
    },
    {
      id: 65,
      nama: 'Claude',
      role: 'marksman',
      image: './src/assets/hero/Hero (65).webp'
    },
    {
      id: 66,
      nama: 'Vale',
      role: 'mage',
      image: './src/assets/hero/Hero (66).webp'
    },
    {
      id: 67,
      nama: 'Leomord',
      role: 'fighter',
      image: './src/assets/hero/Hero (67).webp'
    },
    {
      id: 68,
      nama: 'Lunox',
      role: 'mage',
      image: './src/assets/hero/Hero (68).webp'
    },
    {
      id: 69,
      nama: 'Hanzo',
      role: 'assassin',
      image: './src/assets/hero/Hero (69).webp'
    },
    {
      id: 70,
      nama: 'Belerick',
      role: 'tank',
      image: './src/assets/hero/Hero (70).webp'
    },
    {
      id: 71,
      nama: 'Kimmy',
      role: 'marksman mage',
      image: './src/assets/hero/Hero (71).webp'
    },
    {
      id: 72,
      nama: 'Thamuz',
      role: 'fighter',
      image: './src/assets/hero/Hero (72).webp'
    },
    {
      id: 73,
      nama: 'Harith',
      role: 'mage',
      image: './src/assets/hero/Hero (73).webp'
    },
    {
      id: 74,
      nama: 'Minsitthar',
      role: 'fighter',
      image: './src/assets/hero/Hero (74).webp'
    },
    {
      id: 75,
      nama: 'Kadita',
      role: 'mage assassin',
      image: './src/assets/hero/Hero (75).webp'
    },
    {
      id: 76,
      nama: 'Faramis',
      role: 'support mage',
      image: './src/assets/hero/Hero (76).webp'
    },
    {
      id: 77,
      nama: 'Badang',
      role: 'fighter',
      image: './src/assets/hero/Hero (77).webp'
    },
    {
      id: 78,
      nama: 'Khufra',
      role: 'tank',
      image: './src/assets/hero/Hero (78).webp'
    },
    {
      id: 79,
      nama: 'Granger',
      role: 'marksman',
      image: './src/assets/hero/Hero (79).webp'
    },
    {
      id: 80,
      nama: 'Guinevere',
      role: 'fighter',
      image: './src/assets/hero/Hero (80).webp'
    },
    {
      id: 81,
      nama: 'Esmeralda',
      role: 'mage tank',
      image: './src/assets/hero/Hero (81).webp'
    },
    {
      id: 82,
      nama: 'Terizla',
      role: 'fighter',
      image: './src/assets/hero/Hero (82).webp'
    },
    {
      id: 83,
      nama: 'X-Borg',
      role: 'fighter',
      image: './src/assets/hero/Hero (83).webp'
    },
    {
      id: 84,
      nama: 'Ling',
      role: 'assassin',
      image: './src/assets/hero/Hero (84).webp'
    },
    {
      id: 85,
      nama: 'Dyrroth',
      role: 'fighter',
      image: './src/assets/hero/Hero (85).webp'
    },
    {
      id: 86,
      nama: 'Lylia',
      role: 'mage',
      image: './src/assets/hero/Hero (86).webp'
    },
    {
      id: 87,
      nama: 'Baxia',
      role: 'tank',
      image: './src/assets/hero/Hero (87).webp'
    },
    {
      id: 88,
      nama: 'Masha',
      role: 'fighter',
      image: './src/assets/hero/Hero (88).webp'
    },
    {
      id: 89,
      nama: 'Wanwan',
      role: 'marksman',
      image: './src/assets/hero/Hero (89).webp'
    },
    {
      id: 90,
      nama: 'Silvanna',
      role: 'fighter',
      image: './src/assets/hero/Hero (90).webp'
    },
    {
      id: 91,
      nama: 'Cecilion',
      role: 'mage',
      image: './src/assets/hero/Hero (91).webp'
    },
    {
      id: 92,
      nama: 'Carmilla',
      role: 'support tank',
      image: './src/assets/hero/Hero (92).webp'
    },
    {
      id: 93,
      nama: 'Atlas',
      role: 'tank',
      image: './src/assets/hero/Hero (93).webp'
    },
    {
      id: 94,
      nama: 'Popol & Kupa',
      role: 'marksman',
      image: './src/assets/hero/Hero (94).webp'
    },
    {
      id: 95,
      nama: 'Yu Zhong',
      role: 'fighter',
      image: './src/assets/hero/Hero (95).webp'
    },
    {
      id: 96,
      nama: 'Luo Yi',
      role: 'mage',
      image: './src/assets/hero/Hero (96).webp'
    },
    {
      id: 97,
      nama: 'Benedetta',
      role: 'fighter',
      image: './src/assets/hero/Hero (97).webp'
    },
    {
      id: 98,
      nama: 'Khaleed',
      role: 'fighter',
      image: './src/assets/hero/Hero (98).webp'
    },
    {
      id: 99,
      nama: 'Barats',
      role: 'tank fighter',
      image: './src/assets/hero/Hero (99).webp'
    },
    {
      id: 100,
      nama: 'Brody',
      role: 'marksman',
      image: './src/assets/hero/Hero (100).webp'
    },
    {
      id: 101,
      nama: 'Yve',
      role: 'mage',
      image: './src/assets/hero/Hero (101).webp'
    },
    {
      id: 102,
      nama: 'Mathilda',
      role: 'support assassin',
      image: './src/assets/hero/Hero (102).webp'
    },
    {
      id: 103,
      nama: 'Paquito',
      role: 'fighter assassin',
      image: './src/assets/hero/Hero (103).webp'
    },
    {
      id: 104,
      nama: 'Gloo',
      role: 'tank',
      image: './src/assets/hero/Hero (104).webp'
    },
    {
      id: 105,
      nama: 'Beatrix',
      role: 'marksman',
      image: './src/assets/hero/Hero (105).webp'
    },
    {
      id: 106,
      nama: 'Phoveus',
      role: 'fighter',
      image: './src/assets/hero/Hero (106).webp'
    },
    {
      id: 107,
      nama: 'Natan',
      role: 'marksman',
      image: './src/assets/hero/Hero (107).webp'
    },
    {
      id: 108,
      nama: 'Aulus',
      role: 'fighter',
      image: './src/assets/hero/Hero (108).webp'
    },
    {
      id: 109,
      nama: 'Aamon',
      role: 'assassin',
      image: './src/assets/hero/Hero (109).webp'
    },
    {
      id: 110,
      nama: 'Valentina',
      role: 'mage',
      image: './src/assets/hero/Hero (110).webp'
    },
    {
      id: 111,
      nama: 'Edith',
      role: 'tank marksman',
      image: './src/assets/hero/Hero (111).webp'
    },
    {
      id: 112,
      nama: 'Floryn',
      role: 'support',
      image: './src/assets/hero/Hero (112).webp'
    },
    {
      id: 113,
      nama: 'Yin',
      role: 'fighter assassin',
      image: './src/assets/hero/Hero (113).webp'
    },
    {
      id: 114,
      nama: 'Melissa',
      role: 'marksman',
      image: './src/assets/hero/Hero (114).webp'
    },
    {
      id: 115,
      nama: 'Xavier',
      role: 'mage',
      image: './src/assets/hero/Hero (115).webp'
    },
    {
      id: 116,
      nama: 'Julian',
      role: 'fighter mage',
      image: './src/assets/hero/Hero (116).webp'
    },
    {
      id: 117,
      nama: 'Fredrinn',
      role: 'fighter tank',
      image: './src/assets/hero/Hero (117).webp'
    },
    {
      id: 118,
      nama: 'Arlott',
      role: 'fighter',
      image: './src/assets/hero/Hero (118).webp'
    },
    {
      id: 119,
      nama: 'Joy',
      role: 'assassin',
      image: './src/assets/hero/Hero (119).webp'
    },
    {
      id: 120,
      nama: 'Novaria',
      role: 'mage',
      image: './src/assets/hero/Hero (120).webp'
    },
    {
      id: 121,
      nama: 'Ixia',
      role: 'marksman',
      image: './src/assets/hero/Hero (121).webp'
    },
    {
      id: 122,
      nama: 'Nolan',
      role: 'assassin',
      image: './src/assets/hero/Hero (122).webp'
    },
    {
      id: 123,
      nama: 'Cici',
      role: 'fighter',
      image: './src/assets/hero/Hero (123).webp'
    }
  ]

  const listhero = Heroes.map(hero => 
  <div className="hero_card" data-category={hero.role}>
    <a href="#">
      <img src = {hero.image}></img>
      <h2>{hero.nama}</h2>
    </a>
  </div>)
  return(listhero)
}

export default ListHeroMLBB