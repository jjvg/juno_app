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
   		<form class="col s12" action="#" name="registro" id="registro">
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
				<div class= "col s2 m4">
					<i class="material-icons prefix">lock</i>
				</div>
				<div class="col s10 m8">
					<v-select class="validate" :options="['Femenino','Masculino']" :placeholder="'Genero'"></v-select>
  				</div>
			</div>
			<br>
	  		<div class="row">
				<div class="col s6">
					<button class="btn waves-effect waves-light" type="submit" name="action">Registrar</button>
				</div>
					<div class="col s6">
					<button class="btn waves-effect waves-light" type="submit" name="cancelar">Cancelar</button>
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
	
	methods:{
	}
	
};
</script>
<style scoped>
p{
	color: purple;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font: Roboto;
	font-size: 20px;
}
</style>
