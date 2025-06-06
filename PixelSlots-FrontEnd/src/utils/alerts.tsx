import Swal from "sweetalert2";

import logoUSO from "../assets/img/LogoUsoPixel.png";
import LogoPixelSlots from "../assets/img/Logo-PixelSlots.png";
import ficha from "../assets/img/Moneda.gif";
import EmojiGafas from "../assets/img/gafas-de-sol.png";
import EmojiFiesta from "../assets/img/fiesta.png";
import EmojiImpactado from "../assets/img/conmocionado.png";
import EmojiEstrellado from "../assets/img/estrellado.png";
import Tutorial from "../assets/img/Tutorial.gif";
import triste from "../assets/img/Tristeza.gif";
import Alerta from "../assets/img/AlertaSinFichas.png";

// Game y Home: Tutorial
export const showTutorialAlert = () => {
  Swal.fire({
    title: "Tutorial",
    html: `
      <div style="
        text-align: left;
        font-size: 16px;
        line-height: 1.6;
        max-height: 400px;
        overflow-y: auto;
        padding-right: 10px;
      ">

        <p><strong>Como Jugar</strong><br>
        Presiona la <b>palanca</b> de la máquina para activar las casillas.<br>

        <div style="text-align: center; margin: 10px 0;">
          <img src="${Tutorial}" alt="Máquina Arcade" style="width: 100%; max-width: 300px;" />
        </div>
        <br>Al presionar el botón <em>(representado por la palanca)</em>, las <b>tres casillas</b> mostrarán símbolos aleatorios.</p>
        <p>Tienes <b>5 intentos</b> por sesión. Cada giro consume 1 ficha.</p>
        <p>Después del quinto intento, ya no podrás seguir jugando y se te mostrara una alerta.</p>
         <div style="text-align: center; margin: 4px 0;">
          <img src="${Alerta}" alt="Máquina Arcade" style="width: 100%; max-width: 300px;" />
        </div>

        <br><p><strong>Puntaje:</strong><br>
        <b>3 símbolos iguales:</b> 650 pts + bono por símbolo + los puntos ganados 
        en esa ronda se multipican X2<br>
        <b>2 símbolos iguales:</b> 225 pts + bono por símbolo <br>
        <b>Diferentes:</b> 0 pts</p><br>

      <p><strong>Bonus:</strong><br>
        Cada imagen te da un bonus diferente.</p>
        <b>Lentes</b>: 25,<br>
        <b>Mando de juegos</b>: 35,<br>
        <b>Casette</b>: 15,<br>
        <b>Cartucho de videojuego</b>: 10,<br>
        <b>Puntero</b>: 20,<br>
        <b>Audifonos</b>: 30,<br>
        <b>Disco</b>: 5<br>
      </div>

      
    `,
    width: "600px",
    confirmButtonText: "¡Entendido!",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
    scrollbarPadding: false,
  });
};

// Footer : Terminos y condiciones, Sobre nosotros, Atribuciones, Contacto
export const showTermsAlert = () => {
  Swal.fire({
    title: "Términos y Condiciones",
    html: `
      <div style="text-align: left; font-size: 14px; max-height: 400px; overflow-y: auto; padding-right: 10px; line-height: 1.6;">
        <p><strong style="font-size: 15px;">TÉRMINOS Y CONDICIONES DE PIXEL SLOTS</strong></p>
        <p>Bienvenido a <strong>PixelSlots</strong>, una experiencia de entretenimiento digital diseñada exclusivamente para disfrutar de un emocionante juego de tragamonedas en línea. Al registrarse, usted declara haber leído, comprendido y aceptado estos términos en su totalidad.</p>

        <p><strong style="color:rgb(129, 49, 104);">1. Creación de Cuenta</strong></p>
        <ul style="padding-left: 20px;">
          <li>1.1 Para acceder a nuestros servicios, deberá crear una cuenta de usuario proporcionando información veraz.</li>
          <li>1.2 Es obligatorio proporcionar un correo electrónico válido y mantenerlo actualizado para la comunicación y verificación.</li>
        </ul>

        <p><strong style="color: rgb(129, 49, 104);">2. Edad Mínima</strong></p>
        <ul style="padding-left: 20px;">
          <li>2.1 Usted asegura que tiene al menos 18 años. En El Salvador, la edad mínima legal es 18 años.</li>
          <li>2.2 PixelSlots no se hace responsable por el uso de menores; cuentas de usuarios menores serán eliminadas.</li>
        </ul>

        <p><strong style="color: rgb(129, 49, 104);">3. Responsabilidad del Usuario</strong></p>
        <ul style="padding-left: 20px;">
          <li>3.1 Usted es responsable de proteger sus credenciales de acceso.</li>
          <li>3.2 No debe compartir su cuenta. Toda acción desde su cuenta es su responsabilidad.</li>
        </ul>

        <p><strong style="color:rgb(129, 49, 104);">4. Modificaciones y Actualizaciones</strong></p>
        <ul style="padding-left: 20px;">
          <li>4.1 PixelSlots puede modificar estos términos sin previo aviso.</li>
          <li>4.2 Los cambios se notificarán al correo registrado. El uso continuado implica aceptación automática de los nuevos términos.</li>
        </ul>

        <p><strong style="color:rgb(129, 49, 104);">5. Uso de la Plataforma</strong></p>
        <ul style="padding-left: 20px;">
          <li>5.1 El usuario solo podrá utilizar PixelSlots con fines recreativos y personales.</li>
          <li>5.2 Cualquier uso con fines fraudulentos, comerciales o indebidos está estrictamente prohibido.</li>
        </ul>

        <p><strong style="color: rgb(129, 49, 104);">6. Renuncia de Responsabilidad</strong></p>
        <ul style="padding-left: 20px;">
          <li>6.1 PixelSlots no se responsabiliza por pérdidas de puntos, interrupciones, fallos técnicos ni pérdida de datos personales.</li>
          <li>6.2 El uso de la plataforma es bajo su propio riesgo. Al aceptar los términos, usted exonera a PixelSlots de reclamaciones legales relacionadas.</li>
        </ul>

        <p><strong style="color: rgb(129, 49, 104);">7. Premio Especial de Feria</strong></p>
        <ul style="padding-left: 20px;">
          <li>7.1 Se entregarán premios simbólicos a los tres usuarios con mayor puntaje al final del evento:</li>
          <ul style="padding-left: 20px;">
            <li><strong>1er lugar:</strong> premio simbólico especial</li>
            <li><strong>2do lugar:</strong> premio simbólico especial</li>
            <li><strong>3er lugar:</strong> premio simbólico especial</li>
          </ul>
          <li>7.2 Ganadores serán anunciados en la Universidad de Sonsonate y notificados por correo.</li>
          <li>7.3 Correos inválidos anulan el derecho al premio. Conductas fraudulentas serán descalificadas automáticamente.</li>
        </ul>

        <div style="text-align: center; font-size: 12px; color: gray; margin-top: 15px;">
          Última actualización: Junio 2025
        </div>
      </div>
    `,
    width: "600px",
    confirmButtonText: "¡Entendido!",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
    scrollbarPadding: false,
  });
};

export const showAboutUsAlert = () => {
  Swal.fire({
    imageUrl: LogoPixelSlots,
    imageAlt: "Logo Pixel Slots",
    imageWidth: 300,
    html: `
      <div style="text-align: left; font-size: 14px; max-height: 400px; overflow-y: auto; padding-right: 10px;">
        <b>Sobre Pixel Slots</b><br><br>
        <div style="text-align: left; font-size: 12px; color: gray; margin-top: 10px;">
          Pixel Slots es una marca dedicada a la creacion de software de entretenimiento, enfocada en la creación de juegos de azar y plataformas de juego en línea. Esta plataforma fue desarrollada en refencia a la 
          Ley Organica de la LNB, para la regulación de los juegos de azar y apuestas en línea en El Salvador. Más información en nuestros 
          <span id="terms-link" style="cursor: pointer; text-decoration: underline; color: #9b59b6;">
            Términos y Condiciones
          </span>.
          <br><br>
        </div>
        Pixel Slots nació de la pasión por los videojuegos retro, la emoción de los juegos de azar, y el amor por los pequeños detalles que hacen grandes experiencias. 🕹️🎰<br><br>
        Somos una plataforma de entretenimiento creada para quienes buscan divertirse, desafiar la suerte y escalar posiciones en el ranking, todo en un entorno seguro, amigable y lleno de nostalgia arcade.<br><br>
        Nuestro objetivo es ofrecerte una experiencia divertida, accesible y libre de riesgos, donde puedas disfrutar de la adrenalina de los slots 🫶<br><br>
        Creemos en el juego limpio, en la diversión responsable y en construir una comunidad vibrante de jugadores que compartan la misma pasión por los clásicos y las nuevas emociones.<br><br>
        Cada partida, cada punto y cada ranking es una invitación a seguir disfrutando del mundo Pixel'Slots. 🎮✨<br><br>
        <div style="text-align: center; font-size: 12px; color: gray; margin-top: 10px;">
          ¡Bienvenido a la familia arcade!
        </div>
      </div>
    `,
    width: "600px",
    confirmButtonText: "¡Genial!",
    showClass: {
      popup: `animate__animated animate__fadeInUp animate__faster`,
    },
    hideClass: {
      popup: `animate__animated animate__fadeOutDown animate__faster`,
    },
    scrollbarPadding: false,
    didOpen: () => {
      const img = document.querySelector(".swal2-image");
      if (img) {
        img.classList.add("animate__animated", "animate__flip");
      }

      const termsLink = document.getElementById("terms-link");
      if (termsLink) {
        termsLink.addEventListener("click", () => {
          Swal.close();
          showTermsAlert();
        });
      }
    },
  });
};

export const showcontactAlert = () => {
  Swal.fire({
    title: "Contáctanos",
    imageUrl: logoUSO,
    imageWidth: 100,
    imageAlt: "Logo Universidad de Sonsonate",
    html: `
      <div style="text-align: left; font-size: 14px; max-height: 400px; overflow-y: auto; padding-right: 10px;">
        <b>✈️🌐Dirección</b><br><br>
        Universidad de Sonsonate<br><br>
        <b> 📬 💌Correo</b><br><br>
        Escribinos en nuestro correo: <a href="mailto:pixelslots.support@pixelslotsgame.com" target="_blank" title="Correo">pixelslots.support@pixelslotsgame.com</a><br><br>
        <div style="text-align: center; font-size: 12px; color: gray; margin-top: 10px;">
          ¡Siempre disponibles!
        </div>
      </div>
    `,
    width: "600px",
    confirmButtonText: "¡Okey!",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown 
        animate__faster
      `,
    },
    scrollbarPadding: false,
    didOpen: () => {
      const img = document.querySelector(".swal2-image");
      if (img) {
        img.classList.add("animate__animated", "animate__flip");
      }
    },
  });
};

export const showCreditsAlert = () => {
  Swal.fire({
    title: "Atribuciones",
    html: `
      <div style="text-align: left; font-size: 14px; max-height: 400px; overflow-y: auto; padding-right: 10px;">
      
        <b>🎨Ilustraciones:</b><br>
        Fondos diseñados por <a href="https://www.instagram.com/isai_sketches/" target="_blank" title="Isai Oviedo Instagram">Isai Oviedo</a> para el MMO <a href="https://bitmates.io" target="_blank" title="Bitmates">bitmates.io</a>.<br>
        Sitio web del autor: <a href="https://isai.shop/" target="_blank" title="Sitio web de Isai">https://isai.shop/</a><br>
        Galería de imágenes utilizadas: <a href="https://isai.shop/PIXEL-ART" target="_blank" title="Galería Pixel Art">https://isai.shop/PIXEL-ART</a><br><br>
         <b>📸Imágenes:</b><br>
        Imagenes usadas de Flaticon: <br>
        <a href="https://www.flaticon.es/iconos-gratis/pixel" target="_blank" title="Pixel iconos">Pixel iconos creados por j8chi - Flaticon</a><br>
        <a href="https://www.flaticon.es/iconos-gratis/emojis" target="_blank" title="Emojis iconos">Emojis iconos creados por YardenG - Flaticon</a><br>
        <a href="https://www.flaticon.es/iconos-gratis/gritar" title="gritar iconos">Gritar iconos creados por YardenG - Flaticon</a><br><br>
       Imagenes usadas de <a href="http://www.freepik.es/">Freepik</a>: <br>
        <a href="https://www.freepik.es/vector-gratis/diseno-patron-pixeles-degradados_66233431.htm#fromView=keyword&page=1&position=1&uuid=d1628a1a-76db-4c5d-aa3d-fd5da0a7be4c&query=Fondo+Consolas+Retro" target="_blank" title="Fondo Consolas Retro">Diseño de patrón de píxeles degradados</a><br>

        <br><b>🎬Otros Recursos:</b><br>
        Animaciones proporcionadas por <a href="https://animate.style/" target="_blank" title="Animate.css">Animate.css</a>.<br>
        Framework de estilos basado en <a href="https://getbootstrap.com/" target="_blank" title="Bootstrap">Bootstrap</a>.<br>
        Sistema de alertas dinámicas usando <a href="https://sweetalert2.github.io/" target="_blank" title="SweetAlert2">SweetAlert2</a>.<br><br>

        <div style="text-align: center; font-size: 12px; color: gray; margin-top: 10px;">
          Última actualización: Abril 26, 2025<br>
          Nota: Si usted es autor de algún contenido usado y desea solicitar su retiro o modificación, contáctenos a través de nuestro correo de soporte.
        </div>
      </div>
    `,
    width: "600px",
    confirmButtonText: "¡Entendido!",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
    scrollbarPadding: false,
  });
};

// Game: Alertas de puntos Obtenidos

export const showGameAlert = () => {
  Swal.fire({
    title: "+5 FICHAS",
    text: " Felicidades!, el equipo de Pixel Slots te ha regalado 5 fichas 🤩🫶",
    imageUrl: ficha,
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Fichas de juego",
    showClass: {
      popup: `
        animate__animated
        animate__bounceIn
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__zoomOut
      `,
    },
    scrollbarPadding: false,
  });
};

export const showPuntosGanadosAlert = (puntos: number) => {
  Swal.fire({
    position: "top-start",
    imageUrl: EmojiGafas,
    imageWidth: 100,
    imageHeight: 100,
    title: "¡2 Iguales! ¡La suerte te sonríe!",
    text: `Puntos ganados en esta ronda: ${puntos}`,
    showConfirmButton: false,
    timer: 3000,
    backdrop: false,
    customClass: {
      popup: "puntos-alert-small animate__animated",
      title: "puntos-title-small",
      htmlContainer: "puntos-text-small",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export const showTripleComboAlert = (puntos: number) => {
  Swal.fire({
    position: "top-start",
    imageUrl: EmojiFiesta,
    imageWidth: 100,
    imageHeight: 100,
    title: "¡Triple combinacion! Tus puntos se duplican",
    text: `Puntos ganados en esta ronda: ${puntos}`,
    showConfirmButton: false,
    timer: 4000,
    backdrop: false,
    customClass: {
      popup: "puntos-alert-small animate__animated",
      title: "puntos-title-small",
      htmlContainer: "puntos-text-small",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export const showPuntos0Alert = () => {
  Swal.fire({
    position: "top-start",
    imageUrl: EmojiImpactado,
    imageWidth: 100,
    imageHeight: 100,
    title: "Oh no! Ninguna combinación ganadora",
    text: "No ganaste puntos",
    showConfirmButton: false,
    timer: 3000,
    backdrop: false,
    customClass: {
      popup: "puntos-alert-small animate__animated",
      title: "puntos-title-small",
      htmlContainer: "puntos-text-small",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

// Auth: Alertas de bienvenida y de consentimiento

export const showLoginAlert = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    text: "Todo listo! Bienvenido de nuevo a Pixel Slots!",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Emoji Bienvenida",
    showConfirmButton: false,
    timer: 800,
  });
};

export const showLogoutAlert = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    text: "Registro exitoso!",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Emoji Bienvenida",
    showConfirmButton: false,
    timer: 2000,
  });
};

export const showRegisterAlert = () => {
  Swal.fire({
    position: "top-end",
    title: "Registro exitoso!",
    imageUrl: EmojiEstrellado,
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Personaje Pixel Art",
    showConfirmButton: false,
    timer: 800,
  });
};

export const showConsentAlert = (navigate: (path: string) => void) => {
  let checks = {
    todo: false,
    mayor: false,
    terminos: false,
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    checks = { ...checks, [target.name]: target.checked };

    if (target.name === "todo" && target.checked) {
      checks.mayor = true;
      checks.terminos = true;

      document.querySelector<HTMLInputElement>('input[name="mayor"]')!.checked =
        true;
      document.querySelector<HTMLInputElement>(
        'input[name="terminos"]'
      )!.checked = true;
    }

    if (target.name === "todo" && !target.checked) {
      checks.mayor = false;
      checks.terminos = false;

      document.querySelector<HTMLInputElement>('input[name="mayor"]')!.checked =
        false;
      document.querySelector<HTMLInputElement>(
        'input[name="terminos"]'
      )!.checked = false;
    }
  };

  Swal.fire({
    title: "Confirmación requerida",
    html: `
      <div style="text-align:left; font-size:15px; padding-left:5px;">
        <label><input type="checkbox" name="todo" /> He leido y acepto todo lo que se indica a continuación</label><br/><br/>
        <label><input type="checkbox" name="mayor" /> Tengo 18 años o mas</label><br/><br/>
        <label>
          <input type="checkbox" name="terminos" />
          He leído y acepto los <span id="ver-terminos" style="color:#7b2cbf; text-decoration: none; cursor: pointer;">Términos y condiciones</span>
        </label>
      </div>
    `,
    width: "600px",
    confirmButtonText: "Continuar",
    showCancelButton: false,
    scrollbarPadding: false,
    preConfirm: () => {
      if (checks.todo && checks.mayor && checks.terminos) {
        return true;
      } else {
        Swal.showValidationMessage("Debes aceptar todo para continuar");
        return false;
      }
    },
    didOpen: () => {
      const container = Swal.getHtmlContainer();
      container?.querySelectorAll('input[type="checkbox"]').forEach((input) => {
        input.addEventListener("change", handleChange);
      });

      const verTerminos = document.getElementById("ver-terminos");
      if (verTerminos) {
        verTerminos.addEventListener("click", (e) => {
          e.stopPropagation();
          showTermsAlert();
        });
      }
    },
    showClass: {
      popup: "animate__animated animate__fadeInUp animate__faster",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown animate__faster",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/");
    }
  });
};

// Game: Fichas insuficientes
export const showGameOver = () => {
  Swal.fire({
    imageUrl: triste,
    imageWidth: 100,
    imageAlt: "emoji triste",
    title: "¡Sin fichas!",
    text: "No tienes fichas disponibles para jugar.",
    confirmButtonText: "Aceptar",
    showClass: {
      popup: "animate__animated animate__tada animate__faster",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

// Errores

export const showConnectionErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Sin conexión",
    text: "Error de conexión con el servidor.",
    confirmButtonColor: "#a049a0",
    showClass: {
      popup: "animate__animated animate__shakeX animate__faster",
    },
  });
};

export const showLoginErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Inicio fallido",
    text: "Error al iniciar sesión.",
    confirmButtonColor: "#a049a0",
    showClass: {
      popup: "animate__animated animate__fadeInDown animate__faster",
    },
  });
};

export const showRegisterErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Error en el registro",
    text: "No se pudo registrar al usuario. Intenta nuevamente.",
    confirmButtonColor: "#a049a0",
    showClass: {
      popup: "animate__animated animate__fadeInDown animate__faster",
    },
  });
};
