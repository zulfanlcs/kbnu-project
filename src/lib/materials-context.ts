import { materials } from "@/data/materials";

/**
 * Membangun ringkasan teks dari semua materi website
 * untuk dikirim sebagai konteks ke AI chatbot.
 */
export function buildMaterialsContext(): string {
  const lines: string[] = [];

  const sejarah = materials.filter((m) => m.category === "Materi Sejarah");
  const mars = materials.filter((m) => m.category === "Mars");

  lines.push("=== KATEGORI: MATERI SEJARAH ===");
  sejarah.forEach((m, i) => {
    lines.push(`${i + 1}. ${m.title}`);
    lines.push(`   Deskripsi: ${m.description}`);
    if (m.content && m.content.trim().length > 0) {
      lines.push(`   Konten: ${m.content}`);
    }
  });

  lines.push("");
  lines.push("=== KATEGORI: MARS NU ===");
  mars.forEach((m, i) => {
    lines.push(`${i + 1}. ${m.title}`);
    lines.push(`   Deskripsi: ${m.description.replace(/\n/g, " ")}`);
    if (m.lyrics && m.lyrics.length > 0) {
      lines.push(`   Lirik:`);
      m.lyrics.forEach((verse) => {
        lines.push(`   [${verse.label}]`);
        verse.lines.forEach((l) => lines.push(`     ${l}`));
      });
    }
  });

  return lines.join("\n");
}
