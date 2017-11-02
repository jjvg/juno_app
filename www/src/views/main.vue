<template>
  <div class="app">
	 <nav>
    <div class="nav-wrapper white">
      <a href="#" class="brand-logo center purple-text text-darken-2">U</a>
		</div>
	</nav>
	<div class="content">
				<div class="row">
					<div class="col s12 m12 l12">
						 <div class="card small purple">
							  <div class="card-image">
									<img src="dist/amigos.jpg">
									<span class="card-title">Bienvenido a Tu Red Social</span>
								</div>
            		<div class="card-content white-text">
             					 <p>Tu Red Social Comunitaria, Donde podras expresar las necesidades de tu comunidad
													y compartir con otros.</p>
           			</div>
							</div>
					</div>
				</div>
					<div class="row">
						<form class="col s12">
								<div class="row">
									<div class="input-field col s12 m6 l4">
											<i class="material-icons prefix">person</i>
         						 	<input id="email" type="email" class="validate" placeholder="Correo Electronico">
         			 				<!--	<label for="email">Correo Electronico</label>-->
        					</div>
								</div>
						 		<div class="row">
        						<div class="input-field col s12 m6 l4">
											<i class="material-icons prefix">lock</i>
         					 		<input id="password" type="password" class="validate" placeholder="Contraseña">
          						<!--	<label for="password"></label>-->
       			 				</div>
     				 		</div>
								<div class="row">
										<div class="col s6">
								 				<button class="btn waves-effect waves-light" type="submit" name="action">Ingresar
 				 								</button>
										</div>
								</div>
					
						</form>	
					</div>
					<div align="center">
						¿Aun no te has Registrado?<router-link to="/registro">Registrarse</router-link>	
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
<style scoped>
	input:focus{
		 color: purple;
		  border-bottom: 1px solid purple;
		  border-color: purple
	}
	 .input-field label {
	 color: purple;
	 background-color: purple;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
	 color:purple;
	 background-color: purple;
	 border-bottom: 1px solid purple;
	 border-bottom-color: purple;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
	   color:purple;
	   background-color: purple;
	 border-bottom: 1px solid purple;
	  border-bottom-color: purple;
     box-shadow: 0 1px 0 0 purple;
   }
   /* valid color */
   .input-field input[type=text].valid {

     border-bottom: 1px solid purple;
     box-shadow: 0 1px 0 0 purple;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid red;
     box-shadow: 0 1px 0 0 #000;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: purple;
   }
</style>

