const brochureLines = [
  "CRM Solutions Brochure",
  "Unified CRM for sales, service, operations, and team collaboration.",
  "",
  "Highlights",
  "- Lead and pipeline tracking",
  "- Workflow automation and approvals",
  "- Customer support visibility",
  "- Dashboards for revenue and operations",
  "",
  "Contact",
  "hello@crmwebsite.com",
  "+91 92119 41924",
  "Sector 63, Noida, Uttar Pradesh, India",
];

const encoder = new TextEncoder();

function getByteLength(value) {
  return encoder.encode(value).length;
}

function escapePdfText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildPdf(lines) {
  const textOperations = ["BT", "/F1 24 Tf", "72 740 Td", "0 g"];

  lines.forEach((line, index) => {
    if (index === 0) {
      textOperations.push(`(${escapePdfText(line)}) Tj`);
      return;
    }

    if (line === "Highlights" || line === "Contact") {
      textOperations.push("0 -30 Td", "/F1 16 Tf", `(${escapePdfText(line)}) Tj`, "/F1 12 Tf");
      return;
    }

    textOperations.push(`0 -${line ? 20 : 12} Td`, `(${escapePdfText(line || " ")}) Tj`);
  });

  textOperations.push("ET");

  const contentStream = textOperations.join("\n");
  const objects = [
    null,
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj",
    `5 0 obj\n<< /Length ${getByteLength(contentStream)} >>\nstream\n${contentStream}\nendstream\nendobj`,
  ];

  const offsets = [];
  let pdf = "%PDF-1.4\n";

  for (let index = 1; index < objects.length; index += 1) {
    offsets[index] = getByteLength(pdf);
    pdf += `${objects[index]}\n`;
  }

  const xrefOffset = getByteLength(pdf);

  pdf += `xref
0 ${objects.length}
0000000000 65535 f 
`;

  for (let index = 1; index < objects.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer
<< /Size ${objects.length} /Root 1 0 R >>
startxref
${xrefOffset}
%%EOF`;

  return encoder.encode(pdf);
}

export async function GET() {
  return new Response(buildPdf(brochureLines), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="triostack-crm-brochure.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
