const Hero = ['Yve', 'Mathilda', 'Paquito', 'Gloo', 'Beatrix', 'Phoveus', 'Natan', 'Aulus', 'Aamon', 'Valentina', 'Edith', 'Floryn', 'Yin', 'Melissa', 'Xavier', 'Julian', 'Fredrinn', 'Arlott', 'Joy', 'Novaria', 'Ixia', 'Nolan', 'Cici'];
const RoleHero = ['mage', 'support assassin', 'fighter assassin', 'tank', 'marksman', 'fighter', 'marksman', 'fighter', 'assassin', 'mage', 'tank marksman', 'support', 'fighter assassin', 'marksman', 'mage', 'fighter mage', 'fighter tank', 'fighter', 'assassin', 'mage', 'marksman', 'assassin', 'fighter'];

// Gabungkan Hero dan RoleHero menjadi array objek dengan properti nama, role, dan tambahkan id
const path1 = "./src/assets/hero/Hero ("
const path2 = ").webp"
const heroes = Hero.map((name, index) => ({
  id: index + 101,
  nama: name,
  role: RoleHero[index],
  image: path1 + (index + 101) + path2
}));

console.log(heroes);
