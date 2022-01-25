const jadwal = [
  {
    hari: "Senin",
    mapel: [null, "Bahasa Jepang", "PJOK", "Bahasa dan Sastra Inggris"],
  },
  {
    hari: "Selasa",
    mapel: [
      "Penndidikan Agama Islam",
      "Bahasa dan Sastra Indonesia",
      "Ekonomi",
      "BK",
    ],
  },
  {
    hari: "Rabu",
    mapel: ["Informatika", "Matematika", "Seni Budaya", "Bahasa Indonesia"],
  },
  {
    hari: "Kamis",
    mapel: [
      "Bahasa Indonesia",
      "Bahasa Sunda",
      "Bahasa Inggris",
      "Antropologi",
    ],
  },
  {
    hari: "Jum'at",
    mapel: ["Biologi", "PKWU", "Sejarah Indonesia", "PPKN"],
  },
];

const longest = jadwal
  .map(({ mapel }) => mapel.length)
  .sort((a, b) => b - a)[0];
const newArray = Array.from(new Array(longest));

export default jadwal;
export const columnRemap = newArray.map((_, idx) =>
  jadwal.map((data) => ({
    mapel: data.mapel[idx],
    index: jadwal.findIndex((x) => x.hari === data.hari) + 1,
  }))
);
