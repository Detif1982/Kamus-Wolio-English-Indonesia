const dictionary = [
  { wolio: "Tuapa lele?", indonesia: "Apa kabar?", english: "How are you?" },
  { wolio: "Malape", indonesia: "Saya baik", english: "I’m fine" },
  { wolio: "Incema saromu?", indonesia: "Siapa namamu?", english: "What is your name?" },
  { wolio: "Saroku La Toto", indonesia: "Namaku La Toto", english: "My name is La Toto" },
  { wolio: "Yapai kampomu?", indonesia: "Di mana rumahmu?", english: "Where is your house?" },
  { wolio: "Umbe", indonesia: "Ya", english: "Yes" },
  { wolio: "Boli", indonesia: "Tidak / Tidak mau", english: "No / Won’t" },
  { wolio: "Bolimo", indonesia: "Jangan", english: "Don’t" },
  { wolio: "Bolimo lingka", indonesia: "Jangan pergi", english: "Don’t go" },
  { wolio: "Sumpu kahawa", indonesia: "Minum kopi", english: "Drink coffee" },
  { wolio: "Uwe", indonesia: "Air", english: "Water" }
];

function searchWord() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultList = document.getElementById('resultList');
  resultList.innerHTML = '';

  dictionary.forEach(entry => {
    if (entry.wolio.toLowerCase().includes(input)) {
      const item = document.createElement('li');
      item.innerHTML = `<strong>${entry.wolio}</strong><br>
        🇮🇩 ${entry.indonesia}<br>
        🇬🇧 ${entry.english}`;
      resultList.appendChild(item);
    }
  });
}