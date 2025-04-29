const PDFDocument = require("pdfkit");

const cosmeticoModel = require("../models/cosmeticoModel");

const exportCosmeticoPDF = async (req, res) => {
    try {
        const cosmeticos = await cosmeticoModel.getCosmeticos()

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=wizards.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatorio de Cosméticos", { align: "center" });
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Type | Price | Amount", { underline: true });
        doc.moveDown(0.5);

         //Add dados dos Cosméticos
         cosmeticos.forEach((cosmetico) => {
            doc.text(
                `${cosmetico.id} | ${cosmetico.type} |  ${cosmetico.price} | ${cosmetico.amount} | ${cosmetico.marca_id}`
            );
        });

        doc.end();

    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"}); 
    }
};

module.exports = {exportCosmeticoPDF};