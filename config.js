// ============================================================
//  CONFIG.JS — Todo lo editable por proyecto va acá
//  NO tocar index.html para cambiar un evento. Solo este archivo.
// ============================================================

const CONFIG = {

  // ── API ────────────────────────────────────────────────────
  // Reemplazar con la URL del Apps Script de cada evento
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzR18YaBTeQOG5jJ4vWnxFpRDJs1XwZ_XgQoxNM9eVbUhTRWaT6KTjiMd_jSH12TDRP/exec",

  // ── EVENTO ─────────────────────────────────────────────────
  NOVIOS: {
    nombre1: "Valentina",
    nombre2: "Martín",
  },

  // Fecha y hora del evento (formato ISO: YYYY-MM-DDTHH:MM:SS)
  FECHA_EVENTO: "2026-05-28T20:00:00",

  // Hora desde la que se activa el check-in el día del evento (HH:MM)
  HORA_CHECKIN: "17:00",

  // Hora desde la que se activa la vista post-evento al día siguiente (HH:MM)
  HORA_POST: "10:00",

  // ── LOCACIONES ─────────────────────────────────────────────
  // Si hay una sola locación, dejar CEREMONIA vacío
  LOCACIONES: {
    ceremonia: {
      nombre:    "Iglesia Nuestra Señora del Pilar",
      direccion: "Junín 1904, CABA",
      hora:      "19:00 hs",
      // Embed de Google Maps: Maps → Compartir → Insertar mapa → copiar solo el src=""
      mapSrc:    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2!2d-58.3956!3d-34.5849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzA1LjYiUyA1OMKwMjMnNDQuMiJX!5e0!3m2!1ses!2sar!4v1234567890",
    },
    fiesta: {
      nombre:    "Salón Palermo Grand",
      direccion: "Av. del Libertador 1250, CABA",
      hora:      "21:00 hs",
      mapSrc:    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2!2d-58.4100!3d-34.5750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzMwLjAiUyA1OMKwMjQnMzYuMCJX!5e0!3m2!1ses!2sar!4v1234567891",
    },
  },

  // ── DRESS CODE ─────────────────────────────────────────────
  DRESSCODE: {
    tipo:        "Formal",
    descripcion: "Vestimenta de etiqueta. Caballeros: traje o smoking. Damas: vestido largo o cocktail.",
    // Color a evitar (opcional, dejar vacío si no aplica)
    evitar:      "Blanco, off-white e ivory",
  },

  // ── REGALOS ────────────────────────────────────────────────
  // Dejar vacío ("") el campo para que no se muestre
  REGALOS: {
    banco:    "Banco Galicia",            // Banco para pesos
    alias:    "valentina.martin.boda",    // Alias pesos (dejar "" para ocultar)
    cbu:      "0000003100123456789012",   // CBU pesos
    bancoUsd: "Banco Nación",             // Banco para dólares (si es distinto)
    aliasUsd: "",                          // Alias dólares (dejar "" para ocultar)
    cbuUsd:   "",                          // CBU dólares
    nota:     "Si preferís, podés acercarte el día del evento con un sobre.",
  },

  // ── MAPA ───────────────────────────────────────────────────
  // Filtro CSS para el iframe del mapa (se puede cambiar por evento)
  // Ejemplos: "sepia(0.6) contrast(0.8)" | "grayscale(1) brightness(0.7)" | "none"
  MAPA_COLOR: "sepia(0.5) contrast(0.85) brightness(0.7)",

  // ── IMÁGENES ───────────────────────────────────────────────
  // Rutas relativas a los archivos que subís vos
  IMAGENES: {
    // 5 fotos para el slideshow del login (B&W recomendado)
    slideshow: [
      "img/slide1.jpg",
      "img/slide2.jpg",
      "img/slide3.jpg",
      "img/slide4.jpg",
      "img/slide5.jpg",
    ],
    // Foto principal del hero (a pantalla completa)
    hero: "img/hero.jpg",
    // Foto para el post-evento
    postEvento: "img/post-evento.jpg",
  },

  // ── TEXTOS EDITABLES ───────────────────────────────────────
  TEXTOS: {
    loginSubtitulo:    "Ingresá tu código y comenzá a vivir este evento desde ahora",
    loginError:        "Revisá tu código de acceso y volvé a intentarlo",
    heroTitulo:        "NUESTRA BODA",
    mensajeQR:         "El día del evento volvé a esta página: acá encontrarás el QR para ingresar al salón.",
    mensajeFormulario: "En las próximas secciones te pedimos que confirmes tu asistencia y completes algunos datos para hacer de esta noche algo increíble.",
    mensajeNovios:     "Si querés dejarles unas palabras a los novios, este es el momento. Lo van a ver después de la fiesta.",
    postEventoTitulo:  "¡Gracias por haber sido parte!",
    postEventoTexto:   "Esta noche quedará para siempre en nuestros corazones. Gracias por estar.",
  },

  // ── PALETA ─────────────────────────────────────────────────
  // Cambiar aquí afecta todo el sitio
  PALETA: {
    fondo:       "#0a0a0a",   // Fondo principal (oscuro)
    superficie:  "#141414",   // Cards y superficies elevadas
    borde:       "#2a2a2a",   // Bordes sutiles
    acento:      "#c9a96e",   // Dorado — color principal de énfasis
    acentoClaro: "#e8d5b0",   // Dorado claro para hovers
    texto:       "#f0ece4",   // Texto principal
    textoMuted:  "#8a8680",   // Texto secundario
  },
};