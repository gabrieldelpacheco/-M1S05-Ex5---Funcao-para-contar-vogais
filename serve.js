function contarVogais(palavra) {
    if (typeof palavra !== "string") {
      return "Este valor informado não é uma string, por favor, informe uma string.";
    }
    
    let contarVogais = 0;
    const listaVogais = ["a", "e", "i", "o", "u"];
    
    palavra.toLowerCase().split("").forEach((letra) => {
      if (listaVogais.includes(letra)) {
          contarVogais++;
      }
    });
    
    if (contarVogais === 0) {
      return "Não há vogais nesta palavra.";
    } else {
      return `A palavra "${palavra}" possui ${contarVogais} vogais.`;
    }
  }
  
  console.log(contarVogais("Piauiense")); 
  console.log(contarVogais("Psst")); 
  console.log(contarVogais(123)); 