import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import mammoth from "mammoth";

export const extractResumeText = async (file) => {
  if (!file) {
    throw new Error("No resume uploaded.");
  }

  const fileName = file.originalname.toLowerCase();

  // PDF
  if (file.mimetype === "application/pdf" || fileName.endsWith(".pdf")) {
    const uint8Array = new Uint8Array(file.buffer);

    const pdf = await pdfjsLib.getDocument({
      data: uint8Array,
    }).promise;

    let text = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);

      const content = await page.getTextContent();

      text += content.items.map((item) => item.str).join(" ") + "\n";
    }

    return text;
  }

  // DOCX
  if (
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    fileName.endsWith(".docx")
  ) {
    const result = await mammoth.extractRawText({
      buffer: file.buffer,
    });

    return result.value;
  }

  throw new Error("Only PDF and DOCX files are supported.");
};
