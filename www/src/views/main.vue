<template>
  <div class="app">
	<div class="container">
		<div class="row">
        <div class="col s12 m6">
          <div class="card medium purple lighten-2">
            <div class="card-content white-text">
							 <span class="card-title">Bienvenido a Juno</span>
              <p>Tu Red Social Comunitaria, Donde podras expresar las necesidades de tu comunidad
								y compartir con otros, aqui puedes ingresar, 
								si aun no te has registrado pues que estas esperando</p>
            </div>
          <div class="card-action">
						<router-link to="/login">
						<a class="waves-effect waves-light purple darken-3 btn">Ingresar</a>
						</router-link>
						<router-link to="/login">
						<a class="waves-effect waves-light purple darken-3 btn">Registrarse</a>
						</router-link>
					</div>
    			
					
          </div>
				
        </div>
      </div>
		
				
			</div>
				
			<div id="deviceready" class="blink">
  		<p class="event listening"></p>
  		<p class="event received"></p>
  	</div>	
	</div>
		
   
</template>
<script>
export default {
  name: 'main'
}
</script>
