
import Card from "./CardComida";

function CardComida(){
    const Comida = {
        lisboa: {
            location: "/lanche1",
            nome: "Lisboa",
            img: ,
            price: "R$ 2.400,00",
            avaliation: "⭐⭐⭐",
            description: "Capital de Portugal, com uma rica herança cultural, encantadoras ruas de paralelepípedos e pontos turísticos como a Torre de Belém e o Mosteiro dos Jerónimos"
        },

        novadeli: {
            location: "/lanche2",
            nome: "Nova Deli",
            img: ,
            price: "R$ 1.120,00",
            avaliation: "⭐★★",
            description: "Capital da Índia, conhecida pela mistura vibrante de história, cultura e modernidade, com monumentos como o Taj Mahal e uma vida urbana intensa"
        },

        balneario: {
            location: "/lanche3",
            nome: "Balneário Camburiú",
            img: Balneario,
            price: "R$ 750,00",
            avaliation: "⭐⭐★",
            description: "Cidade litorânea no sul do Brasil, famosa pelas suas praias, arranha-céus à beira-mar e vida noturna agitada"
        }
    }

    return (
        <>
            <h2 className="Passagens">Passagens Aéreas</h2>

            <article className="Cards">

            <Card props = {Comida.lanche1}/>
            <Card props = {Comida.lanche2}/>
            <Card props = {Comida.lanche}/>

            </article>

          </>
    )

}

export default CardComida;