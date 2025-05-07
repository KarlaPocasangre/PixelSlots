import Swal from "sweetalert2";
import logoUSO from "../assets/img/LogoUsoPixel.png";

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
    title: "Sobre Nosotros",
    html: `
      <div style="text-align: left; font-size: 14px; max-height: 400px; overflow-y: auto; padding-right: 10px;">
        <b>Sobre Pixel Slots</b><br><br>
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
      <div style="text-align: center; font-size: 12px; color: gray; margin-top: 10px;">
          ❤︎ Las ilustraciones utilizadas fueron usadas con el consentimiento de sus respectivos autores, a quienes previamente se les solicitó su permiso de uso ❤︎<br><br>
        </div>
        
        <b>🎨Ilustraciones:</b><br>
        Fondos diseñados por <a href="https://www.instagram.com/isai_sketches/" target="_blank" title="Isai Oviedo Instagram">Isai Oviedo</a> para el MMO <a href="https://bitmates.io" target="_blank" title="Bitmates">bitmates.io</a>.<br>
        Sitio web del autor: <a href="https://isai.shop/" target="_blank" title="Sitio web de Isai">https://isai.shop/</a><br>
        Galería de imágenes utilizadas: <a href="https://isai.shop/PIXEL-ART" target="_blank" title="Galería Pixel Art">https://isai.shop/PIXEL-ART</a><br><br>

        Ilustración de máquina de juegos (apartado Game y Ranking) diseñada e ilustrada por: <a href="https://www.behance.net/pixeljeff" target="_blank" title="Pixel Jeff">Pixel Jeff</a><br><br>

         <b>📸Imágenes:</b><br>
        Imagenes usadas de Flaticon: <br>
        <a href="https://www.flaticon.es/iconos-gratis/pixel" target="_blank" title="Pixel iconos">Pixel iconos creados por j8chi - Flaticon</a><br>
        <a href="https://www.flaticon.es/iconos-gratis/emojis" target="_blank" title="Emojis iconos">Emojis iconos creados por YardenG - Flaticon</a><br>
        <a href="https://www.flaticon.es/iconos-gratis/gritar" title="gritar iconos">Gritar iconos creados por YardenG - Flaticon</a><br><br>
        Imagenes usadas de <a href="http://www.freepik.es/">Freepik</a>: <br>
        <a href="https://www.freepik.es/vector-gratis/diseno-patron-pixeles-degradados_66233431.htm#fromView=keyword&page=1&position=1&uuid=d1628a1a-76db-4c5d-aa3d-fd5da0a7be4c&query=Fondo+Consolas+Retro" target="_blank" title="Fondo Consolas Retro">Símbolos de juego utilizados en el slot Pixel Slots 2025</a><br>

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
