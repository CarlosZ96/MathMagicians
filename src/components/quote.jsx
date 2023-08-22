// Importa la biblioteca React para crear componentes de interfaz de usuario.
import React from 'react';

// Define un componente funcional llamado RandomQuote.
const RandomQuote = () => {
  // Declara tres estados locales utilizando el hook useState de React.
  // Estos estados se utilizan para almacenar el estado de la aplicación.
  const [quote, setQuote] = React.useState([]); // Almacena la cita obtenida de la API.
  const [isLoading, setIsLoaded] = React.useState(false); // Controla si los datos se están cargando.
  const [hasError, setHasError] = React.useState(null); // Almacena cualquier error que ocurra durante la carga.

  // Define una función asincrónica llamada getQuote para obtener una cita de la API.
  const getQuote = async () => {
    setIsLoaded(true); // Establece isLoading a true para indicar que se están cargando los datos.
    const category = 'knowledge'; // Define la categoría de la cita a obtener.

    // Realiza una solicitud a la API utilizando la función fetch.
    await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': '2VyJFEAwAfCwJeQRTJpUKw==qoL1KftFFfAoQ4th',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json()) // Convierte la respuesta en formato JSON.
      .then((data) => {
        setQuote(data); // Almacena los datos de la cita en el estado 'quote'.
      })
      .catch((error) => {
        setHasError(error); // Captura y almacena cualquier error en el estado 'hasError'.
        setIsLoaded(false); // Establece isLoading a false para indicar que la carga ha terminado.
      });

    setIsLoaded(false); // Establece isLoading a false al finalizar la carga (independientemente de si tuvo éxito o no).
  };

  // Utiliza el hook useEffect para ejecutar la función getQuote una vez, al montar el componente.
  React.useEffect(() => {
    getQuote();
  }, []);

  // Si isLoading es true, muestra un mensaje de carga.
  if (isLoading) {
    return (
      <div className="quote-loading">
        <p>Loading...</p>
      </div>
    );
  }

  // Si hasError tiene un valor, muestra un mensaje de error.
  if (hasError) {
    return (
      <div className="quote-error">
        <p>Something went wrong...</p>
      </div>
    );
  }

  // Si no hay errores ni carga en curso, muestra las citas obtenidas de la API.
  return (
    <div className="quote">
      {/* Utiliza el método map para recorrer cada elemento en el array 'quote'. */}
      {quote?.map((item) => (
        <div key={item.id + 1}>
          {/* Muestra el texto de la cita y el autor. */}
          <p className="quote-text">{item.quote}</p>
          <p className="quote-author">{item.author}</p>
        </div>
      ))}
    </div>
  );
};

// Exporta el componente RandomQuote para que pueda ser utilizado en otros lugares.
export default RandomQuote;

