<template>
  <div class="container-sign-in">
    <header class="space-nav-bar">
      <div class="logo-space">
        <h1 class="logo">TPC</h1>
      </div>

      <div class="buttons-space">
        <button class="btn btn-login">Login</button>
        <button class="btn btn-probar">Probar</button>
      </div>
    </header>

    <div class="container-information">
      <div class="contain-info">
        <div class="title-sign-in">Inicia sesión</div>
        <div class="subtitle-sign-in">
          Si es un educador o estudiante de una institución que usa TPC, busque su institución y complete correctamente los campos solicitados para que pueda iniciar de sesión.
        </div>

        <div class="container-cards">
          <div class="card-container first">
            <div class="inside">
              Escriba el nombre completo de su institución:
              <v-divider class="separation"></v-divider>
              <v-combobox class="combo-box" hide-selected solo label="Buscar institución"
                          :items="universities" item-text="id" v-model="asa"></v-combobox>
            </div>
          </div>
          <div class="card-container second">
            <div class="cont-data">
              <div class="name">TPC</div>
              <div class="field-txt">
                <v-text-field solo label="Código del alumno" class="field"></v-text-field>
                <v-text-field solo label="Contraseña" class="field" :value="userPassword"
                              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="() => (value = !value)"
                              :type="value ? 'password' : 'text'"
                              :rules="[rules.password]"
                              @input="_=>userPassword=_"></v-text-field>
              </div>
              <div class="more-options">
                <div class="check-sign-in">
                  <v-checkbox label="Remember me?"></v-checkbox>
                </div>
                <div class="forgot-password">
                  I forgot my password
                </div>
              </div>
              <button class="sign-in-button">Sign In</button>
            </div>
          </div>
        </div>
      </div>


    </div>

    <footer class="footer">
      <div class="footer-i">
        <div class="footer-i-a">
          <h2 class="titulo">TPC</h2>
        </div>
        <div class="redes">
          <img src="https://raw.githubusercontent.com/BrigitteMendez1302/TPC-OpenSource/main/img/Linkedin.png" alt="">
          <img src="https://raw.githubusercontent.com/BrigitteMendez1302/TPC-OpenSource/main/img/Youtube.png" alt="">
          <img src="https://raw.githubusercontent.com/BrigitteMendez1302/TPC-OpenSource/main/img/IG.png" alt="">
          <img src="https://raw.githubusercontent.com/BrigitteMendez1302/TPC-OpenSource/main/img/Facebook.png" alt="">
        </div>
      </div>
      <div class="footer-ii">
        <nav class="legal-options">
          <ul>
            <li>Legal</li>
            <li>Aviso de privacidad</li>
            <li>Términos y Condiciones</li>
          </ul>
        </nav>
        <spam class="devlum">
          @2020
        </spam>
      </div>
    </footer>

  </div>
</template>

<script>
import TpcApiService from "@/services/tpc-api.service";

export default {
  name: "sign-in",
  data() {
    return {
      universities: [],
      userPassword: "",
      valid: true,
      value: true,
      rules: {
        required: value => !!value || "Required.",
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
          return (
              pattern.test(value) ||
              "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        }
      }
    }
  },
  async beforeCreate() {
      let response = await TpcApiService.getAllUniversities()
      this.universities = response.data
  }
}
</script>

<style scoped>
.forgot-password{
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  color: #1F86FF;
}

.check-sign-in{
  justify-content: flex-start;
  width: 50%;
}

.more-options{
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 50px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;

  margin-top: 20px;
}

.sign-in-button{
  margin-top: 20px;
  background-color: #FFFFFF;
  border-radius: 19px;
  color: rgba(18, 130, 162, 1);
  border: 1px solid rgba(18, 130, 162, 1);
  height: 35px;
  width: 100%;
}

.cont-data{
  width: 80%;
  height: 100%;
}

.field-txt{
  padding-top: 10px;
  width: 100%;

}
.field{
  height: 60px;
}
.name {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Roboto;
  font-size: 50px;
  font-style: italic;
  font-weight: 700;

  margin-top: 20px;
}

.separation{
  margin-top: 20px;
}

.combo-box{
  border-radius: 0px;
}

.container-cards{
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-container {
  height: 90%;
  width: 35%;
  border-radius: 0px;
  filter: drop-shadow(0px 0px 50px rgba(3, 64, 120, 0.2));
}

.first {
  background: linear-gradient(180deg, #034078 0%, #1282A2 100%);
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

.second {
  background: white;
  display: flex;
  justify-content: center;
}

.inside {
  width: 80%;
  height: 60px;
  font-family: Source Sans Pro;
  font-size: 18px;
  color: #FFFFFF;
}


.container-sign-in {
  width: 100vw;
  overflow: hidden;
  margin: 0 auto;
  font-family: 'Source Sans Pro', sans-serif;
}

.space-nav-bar {
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  background-color: rgba(10, 17, 40, 1);
}

.logo-space {
  height: 70px;
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 50px;

  color: rgba(255, 255, 255, 1);
  font-family: Century Gothic;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
}

.buttons-space {
  height: 70px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.btn {
  margin-right: 50px;
  height: 30px;
  width: 100px;
  border-radius: 19px;
}

.btn-login{
  background-color: rgba(255, 255, 255, 1);
  color: rgba(85, 173, 198, 1);
}
.btn-probar{
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(96.62deg, #1282A2 0%, #034078 100%);
}

.container-information {
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
}

.contain-info {
  margin-top: 20px;
  width: 90%;
  height: 500px;
}

.title-sign-in{
  font-family: Source Sans Pro;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;

  color: rgba(10, 17, 40, 1);

  width: 100%;
}

.subtitle-sign-in{
  font-family: Source Sans Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-top: 10px;

  color: rgba(10, 17, 40, 1);

  width: 100%;
}



.footer{
  background-color: #0A1128;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 10vw;
}
.titulo{
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 35px;
}
.footer-i{
  display: flex;
  width:100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.footer-i-a{
  display: flex;
  flex-direction: column;
}
.menu-options-footer ul{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.menu-options-footer ul li{
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
}
.redes{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
}
.redes img{
  width:25px;
  height: 25px;
  margin: 0px 5px;
}
.footer-ii{
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.legal-options{
  margin-bottom: 10px;
}
.legal-options ul{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
}
.legal-options ul li{
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
}
.devlum{
  font-family: 'Roboto', sans-serif;
  text-align: right;
  width: 100%;
}
@media (min-width: 640px) {
  .footer-i-a{
    flex-direction: row;
    align-items: center;
  }
  .footer .footer-i .footer-i-a .titulo{
    margin-right: 60px;
  }

  .legal-options ul{
    width: 400px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .legal-options ul li{
    margin: 0px;
  }
}
@media (min-width: 768px) {
  .redes img{
    width: 30px;
    height: 30px;
    margin: 0px 5px;
  }
}



</style>