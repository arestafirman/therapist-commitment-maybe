import { mkdirSync, writeFileSync } from "node:fs";

// Kompetisi "Your AI Therapist's Diagnosis": satu baris diagnosis lucu
// dari seorang terapis AI untuk pasien manusianya, maksimal 200 karakter.
// Diagnosis kali ini: commitment issues kronis — si pasien sudah
// menggantung jawaban 'maybe' sejak March 2023, sampai-sampai tempat
// resepsi pernikahannya keburu diberikan ke orang lain.
const ENTRY =
  "Diagnosis: chronic commitment issues — you have kept the same 'maybe' open since March 2023, and your wedding venue just gave the date to someone else.";

// Gerbang gate: entri harus 1-200 karakter, satu baris, bukan spasi kosong.
// Ditulis tanpa newline di akhir file output, persis satu kalimat.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
