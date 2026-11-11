/* =====================================================================
   INVENTARIO NFC — ARCHIVO DE CONFIGURACIÓN
   ---------------------------------------------------------------------
   Este es el único archivo que necesitas tocar para adaptar el sistema.
   Puedes editarlo directamente en GitHub (ícono del lápiz) y guardar.
   Respeta las comillas, las comas y las llaves { }.
   ===================================================================== */

window.CONFIG = {

  // Nombre que aparece arriba en la pantalla
  laboratorio: "Laboratorio de Electrónica",

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
  // Medidas en "unidades de dibujo": la sala mide 1000 × 620.
  // x = distancia desde la pared izquierda, y = distancia desde la pared de arriba.
  sala: {
    ancho: 1000,
    alto: 620,
    puerta: { pared: "abajo", desde: 430, hasta: 540 },   // hueco de la puerta
    elementos: [
      { tipo: "mesa",    nombre: "Mesa de trabajo 1", x: 120, y: 260, ancho: 300, alto: 110 },
      { tipo: "mesa",    nombre: "Mesa de trabajo 2", x: 580, y: 260, ancho: 300, alto: 110 },
      { tipo: "pizarra", nombre: "Pizarra",           x: 20,  y: 190, ancho: 14,  alto: 240 },
      { tipo: "ventana", nombre: "Ventana",           x: 966, y: 180, ancho: 14,  alto: 260 }
    ]
  },

  // ---------------- Gabinetes ----------------
  // Todos tienen el mismo diseño: puerta izquierda, 7 cajones al centro y
  // puerta derecha. Para tener solo uno, borra el bloque del Gabinete 2.
  // pared: "arriba" | "abajo" | "izquierda" | "derecha"  (contra qué pared está)
  gabinetes: [
    { id: "G1", nombre: "Gabinete 1", x: 120, y: 34, ancho: 300, pared: "arriba" },
    { id: "G2", nombre: "Gabinete 2", x: 580, y: 34, ancho: 300, pared: "arriba" }
  ],

  // ---------------- Objetos de ejemplo ----------------
  // Aparecen la primera vez que se abre el sistema. Puedes borrarlos desde
  // la página (Ajustes → Borrar todo) o quitarlos de esta lista.
  // ubicacion: "PI" = puerta izquierda, "C1" a "C7" = cajones (1 es el de arriba),
  //            "PD" = puerta derecha
  objetosIniciales: [
    { codigo: "OSC-01",  nombre: "Osciloscopio digital",   categoria: "Medición",     gabinete: "G1", ubicacion: "PD", notas: "Incluye 2 puntas de prueba x10." },
    { codigo: "GEN-01",  nombre: "Generador de funciones", categoria: "Medición",     gabinete: "G1", ubicacion: "PI", notas: "" },
    { codigo: "MULT-01", nombre: "Multímetro",             categoria: "Medición",     gabinete: "G1", ubicacion: "C2", notas: "" },
    { codigo: "CAUT-01", nombre: "Cautín",                 categoria: "Herramienta",  gabinete: "G1", ubicacion: "C5", notas: "Con base y esponja." },
    { codigo: "FUEN-01", nombre: "Fuente de alimentación", categoria: "Medición",     gabinete: "G2", ubicacion: "PD", notas: "0–30 V, 0–5 A" },
    { codigo: "ARD-01",  nombre: "Kit Arduino",            categoria: "Componentes",  gabinete: "G2", ubicacion: "C1", notas: "" },
    { codigo: "PROTO-01",nombre: "Protoboards",            categoria: "Componentes",  gabinete: "G2", ubicacion: "C3", notas: "4 unidades" }
  ]
};
