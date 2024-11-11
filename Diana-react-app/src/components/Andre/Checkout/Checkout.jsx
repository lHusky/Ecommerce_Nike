import './Checkout.css'

const Checkout = () => {
<div class="finalizar-compra-container">
  <div class="finalizar-compra-header">
    <div>Elige cómo te gustaría finalizar tu compra</div>
    <div class="contact-info">0-800-80600 | Whatsapp</div>
  </div>

  <div class="opciones-compra">
    <div class="opcion">
      <h2>Finaliza tu compra como miembro para conseguir el envío gratuito</h2>
      <p>Utiliza tus credenciales de miembro de Nike para acceder a Nike.com.pe</p>
      <p class="nota">Al iniciar sesión, aceptas la Política de Privacidad y los Términos de uso de Nike.</p>
      <button class="boton boton-negro">Iniciar sesión</button>
      <button class="boton boton-negro">Registrarse</button>
    </div>
    <div class="opcion">
      <h2>Finalizar la compra como invitado</h2>
      <p>Puedes comprar sin crear una cuenta. Tendrás la oportunidad de crear una cuenta de miembro de Nike.com.pe de forma gratuita luego.</p>
      <button class="boton boton-blanco">Compra como invitado</button>
    </div>
  </div>
</div>

}


export default Checkout;