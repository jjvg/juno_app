<template>
  <div class="app">
	 <nav>
    <div class="nav-wrapper purple">
      <a href="#" class="brand-logo center">U</a>
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
													y compartir con otros, aqui puedes ingresar, 
														si aun no te has registrado pues que estas esperando</p>
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
						¿Aun no te has Registrado?<router-link to="/login">Registrarse</router-link>	
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

