import React, { useState,useEffect} from 'react';
import './InicioSesion.css';
import Logo from '../../../assets/logo_nikes.png';
import Jump from '../../../assets/JumpLogoNike.png';

const IniciarSesion = ({
        NoExisteUser
    }) => {
    
    const usuarioDefault = {
        id: 0,
        nombre: '',
        email: '',
        contrasena: '',
    // mas atributos
    }
    const [usuario, setUsuario] = useState(usuarioDefault);
    const [email, setEmail] = useState(""); 

    const obtenerUsuario = async () => {  
        await fetch(`http://localhost:4001/usuario/${email}`) //falta hacer el back
            .then(response => response.json())
            .then(data => setUsuario(data))
    }

    const handleSubmit = async () =>
    {
       await obtenerUsuario();
        if(usuario.email==""){
            NoExisteUser();
        }else{
            //logica de la verificacion de contraseña 
        }
        
    }
  
    return (
        <div class="parte1">
            <div class="parte2">
                <div class="parte3">
                    <div class="parte4">
                        <a href="https://www.nike.com.pe/home" class="imagen1"><img src={Logo} alt="Logo" /></a>
                        <a href="https://www.nike.com.pe/home" class="imagen2"><img src={Jump} alt="Logo Jump" /></a>
                    </div>
                    <span class="Titulo">Ingresa tu correo electrónico para unirte o iniciar sesión.</span>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div class="PaisCambio">
                                <span class="Pais">Perú</span>
                                <label for="pais" class="Cambiar">Cambiar</label>
                                <select class="menuPais" id="pais" name="menuPaises" required="" aria-required="true" autocomplete="pais">
                                    <option id="af" value="Afganistán">Afganistán</option>
                                    <option id="al" value="Albania">Albania</option>
                                    <option id="dz" value="Argelia">Argelia</option>
                                    <option id="as" value="Samoa Americana">Samoa Americana</option>
                                    <option id="ad" value="Andorra">Andorra</option>
                                    <option id="ao" value="Angola">Angola</option>
                                    <option id="ai" value="Anguila">Anguila</option>
                                    <option id="aq" value="Antártida">Antártida</option>
                                    <option id="ag" value="Antigua y Barbuda">Antigua y Barbuda</option>
                                    <option id="ar" value="Argentina">Argentina</option>
                                    <option id="am" value="Armenia">Armenia</option>
                                    <option id="aw" value="Aruba">Aruba</option>
                                    <option id="au" value="Australia">Australia</option>
                                    <option id="at" value="Austria">Austria</option>
                                    <option id="az" value="Azerbaiyán">Azerbaiyán</option>
                                    <option id="bs" value="Bahamas">Bahamas</option>
                                    <option id="bh" value="Baréin">Baréin</option>
                                    <option id="bd" value="Bangladesh">Bangladesh</option>
                                    <option id="bb" value="Barbados">Barbados</option>
                                    <option id="by" value="Bielorrusia">Bielorrusia</option>
                                    <option id="be" value="Bélgica">Bélgica</option>
                                    <option id="bz" value="Belice">Belice</option>
                                    <option id="bj" value="Benín">Benín</option>
                                    <option id="bm" value="Bermudas">Bermudas</option>
                                    <option id="bt" value="Bután">Bután</option>
                                    <option id="bo" value="Bolivia">Bolivia</option>
                                    <option id="ba" value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                                    <option id="bw" value="Botsuana">Botsuana</option>
                                    <option id="bv" value="Isla Bouvet">Isla Bouvet</option>
                                    <option id="br" value="Brasil">Brasil</option>
                                    <option id="bn" value="Brunéi">Brunéi</option>
                                    <option id="bg" value="Bulgaria">Bulgaria</option>
                                    <option id="bf" value="Burkina Faso">Burkina Faso</option>
                                    <option id="bi" value="Burundi">Burundi</option>
                                    <option id="kh" value="Camboya">Camboya</option>
                                    <option id="cm" value="Camerún">Camerún</option>
                                    <option id="ca" value="Canadá">Canadá</option>
                                    <option id="cv" value="Cabo Verde">Cabo Verde</option>
                                    <option id="ky" value="Islas Caimán">Islas Caimán</option>
                                    <option id="cf" value="República Centroafricana">República Centroafricana</option>
                                    <option id="td" value="Chad">Chad</option>
                                    <option id="cl" value="Chile">Chile</option>
                                    <option id="cn" value="China">China</option>
                                    <option id="cx" value="Isla de Navidad">Isla de Navidad</option>
                                    <option id="cc" value="Islas Cocos">Islas Cocos</option>
                                    <option id="co" value="Colombia">Colombia</option>
                                    <option id="km" value="Comoras">Comoras</option>
                                    <option id="cg" value="República del Congo">República del Congo</option>
                                    <option id="ck" value="Islas Cook">Islas Cook</option>
                                    <option id="cr" value="Costa Rica">Costa Rica</option>
                                    <option id="ci" value="Costa de Marfil">Costa de Marfil</option>
                                    <option id="hr" value="Croacia">Croacia</option>
                                    <option id="cu" value="Cuba">Cuba</option>
                                    <option id="cy" value="Chipre">Chipre</option>
                                    <option id="cz" value="República Checa">República Checa</option>
                                    <option id="dk" value="Dinamarca">Dinamarca</option>
                                    <option id="dj" value="Yibuti">Yibuti</option>
                                    <option id="dm" value="Dominica">Dominica</option>
                                    <option id="do" value="República Dominicana">República Dominicana</option>
                                    <option id="ec" value="Ecuador">Ecuador</option>
                                    <option id="eg" value="Egipto">Egipto</option>
                                    <option id="sv" value="El Salvador">El Salvador</option>
                                    <option id="gq" value="Guinea Ecuatorial">Guinea Ecuatorial</option>
                                    <option id="er" value="Eritrea">Eritrea</option>
                                    <option id="ee" value="Estonia">Estonia</option>
                                    <option id="et" value="Etiopía">Etiopía</option>
                                    <option id="fk" value="Islas Malvinas">Islas Malvinas</option>
                                    <option id="fo" value="Islas Feroe">Islas Feroe</option>
                                    <option id="fj" value="Fiyi">Fiyi</option>
                                    <option id="fi" value="Finlandia">Finlandia</option>
                                    <option id="fr" value="Francia">Francia</option>
                                    <option id="gf" value="Guayana Francesa">Guayana Francesa</option>
                                    <option id="pf" value="Polinesia Francesa">Polinesia Francesa</option>
                                    <option id="ga" value="Gabón">Gabón</option>
                                    <option id="gm" value="Gambia">Gambia</option>
                                    <option id="ge" value="Georgia">Georgia</option>
                                    <option id="de" value="Alemania">Alemania</option>
                                    <option id="gh" value="Ghana">Ghana</option>
                                    <option id="gi" value="Gibraltar">Gibraltar</option>
                                    <option id="gr" value="Grecia">Grecia</option>
                                    <option id="gl" value="Groenlandia">Groenlandia</option>
                                    <option id="gd" value="Granada">Granada</option>
                                    <option id="gp" value="Guadalupe">Guadalupe</option>
                                    <option id="gu" value="Guam">Guam</option>
                                    <option id="gt" value="Guatemala">Guatemala</option>
                                    <option id="gn" value="Guinea">Guinea</option>
                                    <option id="gw" value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option id="gy" value="Guyana">Guyana</option>
                                    <option id="ht" value="Haití">Haití</option>
                                    <option id="hm" value="Islas Heard y McDonald">Islas Heard y McDonald</option>
                                    <option id="hn" value="Honduras">Honduras</option>
                                    <option id="hk" value="Hong Kong">Hong Kong</option>
                                    <option id="hu" value="Hungría">Hungría</option>
                                    <option id="is" value="Islandia">Islandia</option>
                                    <option id="in" value="India">India</option>
                                    <option id="id" value="Indonesia">Indonesia</option>
                                    <option id="ir" value="Iran">Iran</option>
                                    <option id="iq" value="Iraq">Iraq</option>
                                    <option id="ie" value="Irlanda">Irlanda</option>
                                    <option id="il" value="Israel">Israel</option>
                                    <option id="it" value="Italia">Italia</option>
                                    <option id="jm" value="Jamaica">Jamaica</option>
                                    <option id="jp" value="Japón">Japón</option>
                                    <option id="jo" value="Jordania">Jordania</option>
                                    <option id="kz" value="Kazajistán">Kazajistán</option>
                                    <option id="ke" value="Kenia">Kenia</option>
                                    <option id="ki" value="Kiribati">Kiribati</option>
                                    <option id="kp" value="Corea del Norte">Corea del Norte</option>
                                    <option id="kr" value="Corea del Sur">Corea del Sur</option>
                                    <option id="kw" value="Kuwait">Kuwait</option>
                                    <option id="kg" value="Kirguistán">Kirguistán</option>
                                    <option id="la" value="Laos">Laos</option>
                                    <option id="lv" value="Letonia">Letonia</option>
                                    <option id="lb" value="Líbano">Líbano</option>
                                    <option id="ls" value="Lesoto">Lesoto</option>
                                    <option id="lr" value="Liberia">Liberia</option>
                                    <option id="ly" value="Libia">Libia</option>
                                    <option id="li" value="Liechtenstein">Liechtenstein</option>
                                    <option id="lt" value="Lituania">Lituania</option>
                                    <option id="lu" value="Luxemburgo">Luxemburgo</option>
                                    <option id="mo" value="Macao">Macao</option>
                                    <option id="mk" value="Macedonia del norte">Macedonia del norte</option>
                                    <option id="mg" value="Madagascar">Madagascar</option>
                                    <option id="mw" value="Malaui">Malaui</option>
                                    <option id="my" value="Malasia">Malasia</option>
                                    <option id="mv" value="Maldivas">Maldivas</option>
                                    <option id="ml" value="Malí">Malí</option>
                                    <option id="mt" value="Malta">Malta</option>
                                    <option id="mh" value="Islas Marshall">Islas Marshall</option>
                                    <option id="mq" value="Martinica">Martinica</option>
                                    <option id="mr" value="Mauritania">Mauritania</option>
                                    <option id="mu" value="Mauricio">Mauricio</option>
                                    <option id="yt" value="Mayotte">Mayotte</option>
                                    <option id="mx" value="México">México</option>
                                    <option id="fm" value="Estados Federados de Micronesia">Estados Federados de Micronesia</option>
                                    <option id="md" value="Moldavia">Moldavia</option>
                                    <option id="mc" value="Mónaco">Mónaco</option>
                                    <option id="mn" value="Mongolia">Mongolia</option>
                                    <option id="ms" value="Montserrat">Montserrat</option>
                                    <option id="ma" value="Marruecos">Marruecos</option>
                                    <option id="mz" value="Mozambique">Mozambique</option>
                                    <option id="mm" value="Myanmar">Myanmar</option>
                                    <option id="na" value="Namibia">Namibia</option>
                                    <option id="nr" value="Nauru">Nauru</option>
                                    <option id="np" value="Nepal">Nepal</option>
                                    <option id="nl" value="Países Bajos">Países Bajos</option>
                                    <option id="an" value="Aruba">Aruba</option>
                                    <option id="an" value="Bonaire">Bonaire</option>
                                    <option id="an" value="Curazao">Curazao</option>
                                    <option id="nc" value="Nueva Caledonia">Nueva Caledonia</option>
                                    <option id="nz" value="Nueva Zelanda">Nueva Zelanda</option>
                                    <option id="ni" value="Nicaragua">Nicaragua</option>
                                    <option id="ne" value="Níger">Níger</option>
                                    <option id="ng" value="Nigeria">Nigeria</option>
                                    <option id="nu" value="Niue">Niue</option>
                                    <option id="nf" value="Isla Norfolk">Isla Norfolk</option>
                                    <option id="mp" value="Islas Marianas del Norte">Islas Marianas del Norte</option>
                                    <option id="no" value="Noruega">Noruega</option>
                                    <option id="om" value="Omán">Omán</option>
                                    <option id="pk" value="Pakistán">Pakistán</option>
                                    <option id="pw" value="Palaos">Palaos</option>
                                    <option id="pa" value="Panamá">Panamá</option>
                                    <option id="pg" value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
                                    <option id="py" value="Paraguay">Paraguay</option>
                                    <option id="pe" value="Perú">Perú</option>
                                    <option id="ph" value="Filipinas">Filipinas</option>
                                    <option id="pn" value="Islas Pitcairn">Islas Pitcairn</option>
                                    <option id="pl" value="Polonia">Polonia</option>
                                    <option id="pt" value="Portugal">Portugal</option>
                                    <option id="pr" value="Puerto Rico">Puerto Rico</option>
                                    <option id="qa" value="Catar">Catar</option>
                                    <option id="re" value="Reunión">Reunión</option>
                                    <option id="ro" value="Rumanía">Rumanía</option>
                                    <option id="ru" value="Rusia">Rusia</option>
                                    <option id="rw" value="Ruanda">Ruanda</option>
                                    <option id="sh" value="Isla Santa Elena">Isla Santa Elena</option>
                                    <option id="kn" value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
                                    <option id="lc" value="Santa Lucía">Santa Lucía</option>
                                    <option id="pm" value="San Pedro y Miquelón">San Pedro y Miquelón</option>
                                    <option id="vc" value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
                                    <option id="ws" value="Samoa">Samoa</option>
                                    <option id="sm" value="San Marino">San Marino</option>
                                    <option id="st" value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
                                    <option id="sa" value="Arabia Saudita">Arabia Saudita</option>
                                    <option id="sn" value="Senegal">Senegal</option>
                                    <option id="sc" value="Seychelles">Seychelles</option>
                                    <option id="sl" value="Sierra Leona">Sierra Leona</option>
                                    <option id="sg" value="Singapur">Singapur</option>
                                    <option id="sk" value="Eslovaquia">Eslovaquia</option>
                                    <option id="si" value="Eslovenia">Eslovenia</option>
                                    <option id="sb" value="Islas Salomón">Islas Salomón</option>
                                    <option id="so" value="Somalia">Somalia</option>
                                    <option id="za" value="Sudáfrica">Sudáfrica</option>
                                    <option id="es" value="Espana">Espana</option>
                                    <option id="lk" value="Sri Lanka">Sri Lanka</option>
                                    <option id="sd" value="Sudán">Sudán</option>
                                    <option id="sr" value="Surinam">Surinam</option>
                                    <option id="sj" value="Islas Svalbard y Jan Mayen">Islas Svalbard y Jan Mayen</option>
                                    <option id="sz" value="Suazilandia">Suazilandia</option>
                                    <option id="se" value="Suecia">Suecia</option>
                                    <option id="ch" value="Suiza">Suiza</option>
                                    <option id="sy" value="Siria">Siria</option>
                                    <option id="tw" value="Taiwán">Taiwán</option>
                                    <option id="tj" value="Tayikistán">Tayikistán</option>
                                    <option id="tz" value="Tanzania">Tanzania</option>
                                    <option id="th" value="Tailandia">Tailandia</option>
                                    <option id="tg" value="Togo">Togo</option>
                                    <option id="tk" value="Tokelau">Tokelau</option>
                                    <option id="to" value="Tonga">Tonga</option>
                                    <option id="tt" value="Trinidad Y Tobago">Trinidad Y Tobago</option>
                                    <option id="tn" value="Túnez">Túnez</option>
                                    <option id="tr" value="Turquía">Turquía</option>
                                    <option id="tm" value="Turkmenistán">Turkmenistán</option>
                                    <option id="tc" value="Islas Turcas y Caicos">Islas Turcas y Caicos</option>
                                    <option id="tv" value="Tuvalu">Tuvalu</option>
                                    <option id="ug" value="Uganda">Uganda</option>
                                    <option id="ua" value="Ucrania">Ucrania</option>
                                    <option id="ae" value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
                                    <option id="gb" value="Reino Unido">Reino Unido</option>
                                    <option id="us" value="Estados Unidos">Estados Unidos</option>
                                    <option id="um" value="Islas Ultramarinas Menores de Estados Unidos">Islas Ultramarinas Menores de Estados Unidos</option>
                                    <option id="uy" value="Uruguay">Uruguay</option>
                                    <option id="uz" value="Uzbekistán">Uzbekistán</option>         
                                    <option id="vu" value="Vanuatu">Vanuatu</option>           
                                    <option id="va" value="Ciudad del Vaticano">Ciudad del Vaticano</option>       
                                    <option id="ve" value="Venezuela">Venezuela</option>       
                                    <option id="vn" value="Vietnam">Vietnam</option>           
                                    <option id="vg" value="Islas Vírgenes Británicas">Islas Vírgenes Británicas</option>            
                                    <option id="vi" value="Islas Vírgenes de los Estados Unidos">Islas Vírgenes de los Estados Unidos</option>          
                                    <option id="wf" value="Wallis y Futuna">Wallis y Futuna</option>           
                                    <option id="eh" value="Sahara Occidental">Sahara Occidental</option>           
                                    <option id="ye" value="Yemen">Yemen</option>            
                                    <option id="sp" value="Serbia">Serbia</option>           
                                    <option id="zr" value="Zaire">Zaire</option>           
                                    <option id="zm" value="Zambia">Zambia</option>
                                    <option id="zw" value="Zimbabue">Zimbabue</option>
                                    <option id="OTHER" value="Otro">Otro</option>
                                </select>
                            </div>
                            <div class="Correo">
                                <label for="email" class="colorCorreo">* Correo Electrónico</label>
                                <input type="email" 
                                        id="email" 
                                        placeholder="tuemail@ejemplo.com"
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required/>
                            </div>
                            <div class="Terminos">
                                <p class="textoTerminos">
                                <span>Inicia sesión y obtén <strong>envíos gratis</strong> ⚡ Al continuar, aceptas la</span>&nbsp;
                                <a class="link" href="https://www.nike.com.pe/politicas-de-privacidad.html" target="_blank">Política de Privacidad</a>&nbsp;
                                <span>y los</span>&nbsp;
                                <a class="link" href="https://www.nike.com.pe/terminos-y-condiciones.html" target="_blank">Términos y Condiciones</a>&nbsp;
                                <span>de Nike.com.pe</span>
                                </p>
                            </div>
                            <button type="submit" class="botonContinuar">Continuar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default IniciarSesion;