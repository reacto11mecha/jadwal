const jadwal = [
  {
    hari: "Senin",
    mapel: [null, "Seni Budaya", "Bahasa Inggris", "Antropologi"],
  },
  {
    hari: "Selasa",
    mapel: ["BK4", "Bahasa Jepang", "Matematika", "Pendidikan Agama Islam"],
  },
  {
    hari: "Rabu",
    mapel: [
      "Ekonomi",
      "Bahasa dan Sastra Inggris",
      "Bahasa Sunda",
      "Bahasa Indonesia",
    ],
  },
  {
    hari: "Kamis",
    mapel: ["PKWU", "Biologi", "PPKN", "Sejarah Indonesia"],
  },
  {
    hari: "Jum'at",
    mapel: [null, "PJOK", "Informatika", "Bahasa dan Sastra Indonesia"],
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
