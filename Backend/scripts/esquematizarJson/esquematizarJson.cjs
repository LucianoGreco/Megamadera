const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "../../seed/datos/products.json");
const outputPath = path.resolve(__dirname, "esquema.txt");

function escribirEsquema(obj, nivel = 0, prefix = "") {
    const indent = "    ".repeat(nivel);
    let resultado = "";

    if (typeof obj !== "object" || obj === null) {
        resultado += `${indent}${prefix}: ${JSON.stringify(obj)}\n`;
    } else if (Array.isArray(obj)) {
        resultado += `${indent}${prefix}\n`;
        obj.forEach((item, idx) => {
            resultado += `${indent}    ├── ${JSON.stringify(item)}\n`;
        });
    } else {
        const keys = Object.keys(obj);
        if (prefix) {
            resultado += `${indent}${prefix}\n`;
        }
        keys.forEach((key, index) => {
            const isLast = index === keys.length - 1;
            const subPrefix = isLast ? "└── " + key : "├── " + key;
            resultado += escribirEsquema(obj[key], nivel + 1, subPrefix);
        });
    }

    return resultado;
}

function main() {
    try {
        const dataRaw = fs.readFileSync(inputPath, "utf-8");
        const json = JSON.parse(dataRaw);

        const esquema = escribirEsquema(json);

        fs.writeFileSync(outputPath, esquema, "utf-8");
        console.log(`✅ Esquema generado en: ${outputPath}`);
    } catch (err) {
        console.error("❌ Error al procesar el JSON:", err.message);
        process.exit(1);
    }
}

main();
