interface TituloProps {
  titulo: string;
}

function Titulo({ titulo }: TituloProps) {


  return (
  <h1
    style={{
      // Peso da fonte, alinhamento e margem 

      color: "#7D2EBA",
      fontWeight: 600,
      fontStyle: "italic",
      textAlign: "center",
      marginBottom: "3.75rem",
    }}
  >
    {titulo}
  </h1>
  );
}

export default Titulo;