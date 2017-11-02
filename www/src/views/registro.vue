<template>
 <div id="app">
<div class="container">
	<div class="row">
		<div class="col s12">
			<div align="center">
				<p>Registro de Usuario</p>
			</div>
		</div>
	</div>
	<div class="row">
   		<form class="col s12" action="#">
      		<div class="row">
				<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">contact_mail</i>
         	 		<input id="email" type="email" class="validate">
         			 <label for="email">Correo electronico</label>
        		</div>
        		<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">account_circle</i>
          			<input id="nombre" type="text" class="validate">
          			<label for="nombre">Nombre</label>
       			</div>
       			<div class="input-field col s12 m6">
          			<i class="material-icons prefix">account_circle</i>
         	 		<input id="apellido" type="text" class="validate">
          			<label for="apellido">Apellido</label>
        		</div>
		 		<div class="input-field col s12 m6">
          			<i class="material-icons prefix">lock</i>
          			<input id="password" type="password" class="validate">
          			<label for="password">Contraseña</label>
        		</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<select>
      					<option value="" disabled selected>Selecciona una Opcion</option>
      					<option value="1">Masculino</option>
      					<option value="2">Femenino</option>
    				</select>
    				<label>Sexo</label>
  				</div>
			</div>
	  		<div class="row">
				<div class="col s6">
					<button class="btn waves-effect waves-light" type="submit" name="action">Registrar</button>
				</div>
			</div>
   		 </form>
 	  </div>
	</div>				
 </div>		 
</template>
<script>

export default{
	name: 'registro',
};
</script>
<style scoped>
p{
	color: purple
	
}
</style>
