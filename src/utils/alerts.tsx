import Swal from "sweetalert2";
import logoUSO from "../assets/img/LogoUsoPixel.png";
import LogoPixelSlots from "../assets/img/Logo-PixelSlots.png";
import ficha from "../assets/img/Moneda.gif";
import EmojiGafas from "../assets/img/gafas-de-sol.png";
import EmojiFiesta from "../assets/img/fiesta.png";
import EmojiImpactado from "../assets/img/conmocionado.png";
import EmojiEstrellado from "../assets/img/estrellado.png";
import Tutorial from "../assets/img/Maquina-Arcade.png";
import palanca from "../assets/img/Palanca.gif";

export const showMustLoginAlert = () => {
  Swal.fire({
    icon: "info",
    title: "¡Espera un momento!",
    text: "Debes iniciar sesión para jugar y guardar tu progreso.",
    confirmButtonText: "Iniciar sesión",
    showClass: {
      popup: "animate__animated animate__bounceIn",
    },
    hideClass: {
      popup: "animate__animated animate__zoomOut",
    },
  });
};

//Alerta de tutorial HOME

export const showTutorialAlert = () => {
  Swal.fire({
    title: "Reglas del juego",
    html: `
      <div style="
        text-align: left;
        font-size: 16px;
        line-height: 1.6;
        max-height: 400px;
        overflow-y: auto;
        padding-right: 10px;
      ">

        <p><strong>Cómo jugar:</strong><br>
        Presiona la <b>palanca</b> de la máquina para activar las casillas.<br>
        El resultado se muestra en la pantalla y los puntos se suman automáticamente.</p>

        <div style="text-align: center; margin: 10px 0;">
          <img src="${Tutorial}" alt="Máquina Arcade" style="width: 100%; max-width: 300px;" />
        </div>

        <p><strong>Mecánica de juego:</strong><br>
        • Al presionar el botón <em>(representado por la palanca)</em>, las <b>tres casillas</b> mostrarán símbolos aleatorios.</p>

        <div style="text-align: center; margin: 10px 0;">
          <img src="${palanca}" alt="Palanca" style="max-width: 120px; width: 100%;" />
        </div>

        <p>• Tienes <b>5 intentos</b> por sesión. Cada giro consume 1 ficha.</p>

        <div style="text-align: center; margin: 10px 0;">
          <img src="${ficha}" alt="Ficha" style="max-width: 120px; width: 100%;" />
        </div>

        <p>• Después del quinto intento, ya no podrás seguir jugando.</p><br>

        <p><strong>Puntaje:</strong><br>
        <b>3 símbolos iguales:</b> 650 pts + bono por símbolo<br>
        <b>2 símbolos iguales:</b> 225 pts + bono por símbolo<br>
        <b>Diferentes:</b> 0 pts</p><br>

      <p><strong>Bonus:</strong><br>
        Cada imagen te da un bonus diferente.</p><br>
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

//Alertas de Terminos y condiciones, sobre nosotros, contacto y atribuciones

export const showTermsAlert = () => {
  Swal.fire({
    title: "Términos y Condiciones",
    html: `
      <div style="text-align: left; font-size: 14px; max-height: 400px; overflow-y: auto; padding-right: 10px;">
        <b>TÉRMINOS Y CONDICIONES DE PIXEL SLOTS</b><br><br>

        <b>1. Creación de Cuenta:</b><br>
        1.1. Para acceder a nuestros servicios, será necesario que cree una cuenta de usuario, proporcionando sus datos de manera correcta y veraz durante el proceso de registro.<br><br>
        1.2. Es requisito que el usuario disponga de una dirección de correo electrónico válida y activa para completar el registro. La dirección de correo proporcionada será utilizada para la comunicación con el usuario y para la verificación de la cuenta. El usuario se compromete a mantener actualizada dicha dirección de correo electrónico para asegurar una correcta comunicación.<br><br>

        <b>2. Edad Mínima:</b><br>
        2.1. Al acceder a nuestra plataforma, usted asegura y declara que tiene la edad legal necesaria en su país o región para participar en actividades de juego en línea. En el caso de El Salvador, la legislación establece que la edad mínima para participar en juegos de azar, incluyendo casinos, apuestas deportivas y loterías, es de dieciocho (18) años.<br><br>
        2.2. Pixel Slots no asume responsabilidad alguna por el acceso o uso no autorizado de la plataforma por parte de personas que no cumplan con la edad mínima legal requerida. En caso de detectarse dicha situación, la cuenta será bloqueada de forma inmediata y el usuario perderá automáticamente cualquier derecho sobre los puntos o premios acumulados.<br><br>

        <b>3. Responsabilidad del Usuario:</b><br>
        3.1. Usted como usuario es el único responsable de preservar la confidencialidad de las credenciales de su cuenta, así como de todas las acciones o actividades que se realicen a través de la misma.<br><br>
        3.2. Queda prohibido compartir sus credenciales de inicio de sesión con terceros. Cualquier acción que se realice desde su cuenta será considerada exclusivamente su responsabilidad.<br><br>

        <b>4. Modificaciones y Actualizaciones:</b><br>
        4.1. Pixel Slots se reserva el derecho de modificar o actualizar los presentes términos y condiciones en cualquier momento, sin necesidad de previo aviso. Cualquier cambio será notificado al usuario a través de los medios de contacto proporcionados durante el registro. La fecha de última actualización de los términos estará visible en esta página.<br><br>
        Al aceptar estos términos y condiciones, usted reconoce y acepta que es su responsabilidad revisar periódicamente esta página con el fin de mantenerse informado sobre cualquier modificación que pueda realizarse. El uso continuado de nuestros servicios tras la publicación de dichos cambios implicará su aceptación plena y tácita de los mismos.<br><br>

        <b>5. Uso de la Plataforma:</b><br>
        5.1. El usuario se compromete a utilizar Pixel Slots únicamente con fines recreativos y de entretenimiento personal, absteniéndose de emplear la plataforma con fines fraudulentos, comerciales o cualquier otro uso no autorizado.<br><br>

        <div style="text-align: center; font-size: 12px; color: gray; margin-top: 10px;">
          Última actualización: Abril 26, 2025
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
        Escribemos en nuestro correo: <a href="*" target="_blank" title="Correo">pixelslots@dominio.com.sv</a><br><br>
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

//Alertas de fichas ganadas GAME

export const showGameAlert = () => {
  Swal.fire({
    title: "+5 FICHAS",
    text: " Felicidades!, el equipo de Pixel Slots te ha regalado 5 fichas 🤩🫶",
    imageUrl: ficha,
    imageWidth: 200,
    imageHeight: 200,
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

//Alertas de puntos ganados GAME

export const showPuntos200Alert = () => {
  Swal.fire({
    position: "top-end",
    imageUrl: EmojiGafas,
    imageWidth: 100,
    imageHeight: 100,
    title: "¡2 Iguales! ¡La suerte te sonríe!",
    text: "Ganaste: 200 pts + 50 pts adicionales",
    showConfirmButton: false,
    timer: 3000,
    backdrop: false,
    customClass: {
      popup: "puntos-alert-small animate__animated",
      title: "puntos-title-small",
      htmlContainer: "puntos-text-small",
    },
    showClass: {
      popup: "animate__animated animate__bounceInRight",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export const showPuntos500Alert = () => {
  Swal.fire({
    position: "top-end",
    imageUrl: EmojiFiesta,
    imageWidth: 100,
    imageHeight: 100,
    title: "¡3 Iguales! Disfruta de la fiesta!",
    text: "Ganaste: 500 pts + 150 pts adicionales",
    showConfirmButton: false,
    timer: 4000,
    backdrop: false,
    customClass: {
      popup: "puntos-alert-small animate__animated",
      title: "puntos-title-small",
      htmlContainer: "puntos-text-small",
    },
    showClass: {
      popup: "animate__animated animate__bounceInRight",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export const showPuntos0Alert = () => {
  Swal.fire({
    position: "top-end",
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
      popup: "animate__animated animate__bounceInRight",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

//Inicio Sesion Alertas

export const showLoginAlert = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    text: "Todo listo! Bienvenido de nuevo a Pixel Slots!",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Emoji Bienvenida",
    showConfirmButton: false,
    timer: 1000,
  });
};

//Registro Alertas
export const showRegisterAlert = () => {
  Swal.fire({
    position: "top-end",
    title: "Registro exitoso!",
    imageUrl: EmojiEstrellado,
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Personaje Pixel Art",
    showConfirmButton: false,
    timer: 1000,
  });
};

/*
///Alerta de fin de juego JOSUE ESTA ES LA ALERTA
  const showEndGameAlert = () => {
    Swal.fire({
      title: "¡Alto ahí!",
      text: "Te has quedado sin fichas. Game Over...",
      imageUrl: GiftTriste,
      imageWidth: 100,
      imageHeight: 100,
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "Irse",
      confirmButtonText: "Ver Top 10",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      didOpen: () => {
        const button = document.querySelector(".swal2-confirm");
        if (button) {
          button.classList.add(
            "animate__animated",
            "animate__rubberBand",
            "animate__infinite"
          );
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/ranking"); //
      }
    });
  };
  */

export const showConsentAlert = (navigate: (path: string) => void) => {
  let checks = {
    todo: false,
    mayor: false,
    terminos: false,
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    checks = { ...checks, [target.name]: target.checked };

    // Si marca "todo", marca los otros
    if (target.name === "todo" && target.checked) {
      checks.mayor = true;
      checks.terminos = true;

      document.querySelector<HTMLInputElement>('input[name="mayor"]')!.checked =
        true;
      document.querySelector<HTMLInputElement>(
        'input[name="terminos"]'
      )!.checked = true;
    }

    // Si desmarca "todo", desmarca los otros
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
        <label><input type="checkbox" name="mayor" /> Soy mayor de 18 años</label><br/><br/>
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
      // Agregar listeners a checkboxes
      const container = Swal.getHtmlContainer();
      container?.querySelectorAll('input[type="checkbox"]').forEach((input) => {
        input.addEventListener("change", handleChange);
      });

      // Agregar listener al enlace de términos
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
