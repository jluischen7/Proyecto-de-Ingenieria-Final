/* =====================================================================
   LABFINDER: INVENTARIO NFC — ARCHIVO DE CONFIGURACIÓN
   ---------------------------------------------------------------------
   Este es el único archivo que necesitas tocar para adaptar el sistema.
   Puedes editarlo directamente en GitHub (ícono del lápiz) y guardar.
   Respeta las comillas, las comas y las llaves { }.
   ===================================================================== */

window.CONFIG = {

  // Nombre que aparece arriba en la pantalla
  laboratorio: "J. Chen, P. Flaaut, I. Melgar, E. Montenegro, Y. Villarreal",

  // ---------------- Sincronización teléfono ↔ computadora ----------------
  // El teléfono y la computadora se comunican por un "canal" en el servicio
  // gratuito ntfy.sh. Funciona como una sala de chat privada: todo el que
  // conozca el nombre del canal puede leerlo, así que usa uno difícil de adivinar.
  // Si cambias el canal, el inventario empieza de cero (en ese canal nuevo).
  sincronizar: true,
  servidorSync: "https://ntfy.sh",
  canal: "inventario-nfc-hgmhz0y0",

  // Dirección pública de la página (la que se graba en las etiquetas NFC).
  // Déjala vacía ("") y se detecta sola cuando la página está en GitHub Pages.
  // Ejemplo: "https://tu-usuario.github.io/inventario-nfc/"
  urlBase: "",

  // ---------------- Plano de la sala (vista desde arriba) ----------------
  // Medidas en "unidades de dibujo": la sala mide 900 de ancho × 1250 de alto.
  // x = distancia desde la pared izquierda, y = distancia desde la pared de arriba.
  sala: {
    ancho: 900,
    alto: 1250,
    puerta: { pared: "arriba", desde: 50, hasta: 220 },      // entrada arriba a la izquierda
    elementos: [
      // computadora: true  -> dibuja una computadora encima en el plano.
      // Las mesas con "id" son lugares donde se pueden dejar objetos encima
      // (aparecen en la vista frontal). El escritorio no tiene id, así que no es un lugar.
      { tipo: "mesa",    nombre: "Escritorio", x: 40,  y: 470, ancho: 270, alto: 600, computadora: true },
      { tipo: "mesa",    id: "MESA", nombre: "Mesa",       x: 590, y: 470, ancho: 270, alto: 600 },
      { tipo: "ventana", nombre: "Ventana",    x: 300, y: 1222, ancho: 300, alto: 12 }   // pared de abajo
    ]
  },

  // ---------------- Gabinetes ----------------
  // Diseño: puerta izquierda, 7 cajones al centro y puerta derecha.
  // Para agregar otro, copia la línea y cambia id, nombre y posición.
  // pared: "arriba" | "abajo" | "izquierda" | "derecha"  (contra qué pared está)
  gabinetes: [
    { id: "G1", nombre: "Gabinete 1", x: 444, y: 16, ancho: 440, pared: "arriba" }   // pegado a la pared derecha
  ],

  // ---------------- Objetos de ejemplo ----------------
  // Aparecen la primera vez que se abre el sistema. Puedes borrarlos desde
  // la página (Ajustes → Borrar todo) o quitarlos de esta lista.
  // gabinete: "G1" (el gabinete) o el id de una mesa: "MESA"
  // ubicacion: "PI" = puerta izquierda, "C1" a "C7" = cajones (1 es el de arriba),
  //            "PD" = puerta derecha. En una mesa no hace falta (es "encima").
  objetosIniciales: [
    { codigo: "OSC-01",  nombre: "Osciloscopio digital",   categoria: "Medición",     gabinete: "G1", ubicacion: "PD", notas: "Incluye 2 puntas de prueba x10." },
    { codigo: "GEN-01",  nombre: "Generador de funciones", categoria: "Medición",     gabinete: "G1", ubicacion: "PI", notas: "" },
    { codigo: "MULT-01", nombre: "Multímetro",             categoria: "Medición",     gabinete: "G1", ubicacion: "C2", notas: "" },
    { codigo: "CAUT-01", nombre: "Cautín",                 categoria: "Herramienta",  gabinete: "G1", ubicacion: "C5", notas: "Con base y esponja." },
    { codigo: "FUEN-01", nombre: "Fuente de alimentación", categoria: "Medición",     gabinete: "G1", ubicacion: "PI", notas: "0–30 V, 0–5 A" },
    { codigo: "ARD-01",  nombre: "Kit Arduino",            categoria: "Componentes",  gabinete: "MESA", notas: "Sobre la mesa para las prácticas." },
    { codigo: "PROTO-01",nombre: "Protoboards",            categoria: "Componentes",  gabinete: "G1", ubicacion: "C3", notas: "4 unidades" }
  ]
};
