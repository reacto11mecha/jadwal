const jadwal = [
  {
    hari: "Senin",
    mapel: ["Bahasa dan Sastra Indonesia", "Bahasa Jepang", "Bahasa Indonesia", "Bahasa dan Sastra Inggris"]
  },
  {
    hari: "Selasa",
    mapel: [
      "Ekonomi",
      "Bahasa Indonesia",
      "PKWU",
      "Matematika",
      "Pendidikan Agama Islam"
    ],
  },
  {
    hari: "Rabu",
    mapel: [
      "Sejarah Indonesia",
      "Antropologi",
      "Bahasa dan Sastra Indonesia",
      "PPKN"
    ]
  },
  {
    hari: "Kamis",
    mapel: [
      "Antropologi",
      "Bahasa Sunda",
      "Ekonomi",
      "Matematika",
    ],
  },
  {
    hari: "Jum'at",
    mapel: [
      "Penjaskes",
      "Bahasa Jepang",
      "Bahasa Inggris",
      "Bimbingan Konseling",
      "Bahasa dan Sastra Inggris"
    ]
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
