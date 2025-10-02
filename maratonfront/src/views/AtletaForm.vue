<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  let datosAtletas = ref({
    nombre: '',
    dni: '',
    tiempo: '',
    posicion: '',
    ciudadid: ''
  })

  const EnviarDatos = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/atletas', datosAtletas.value)
      console.log('Datos enviados:', response.data)
    } catch (error) {
      console.error('Error al enviar datos:', error)
    }
  }
</script>

<template>
  <body>
    <h1>Atleta Formulario</h1>
    <form class="" @submit.prevent="EnviarDatos" id="atleta-carga">
      <h2>Atleta</h2>
      <label>
        Nombre
        <input
          class=""
          v-model="datosAtletas.nombre"
          type="text"
          name="nombre"
          id="nombre"
        />
        <p></p>
      </label>
      <label>
        DNI
        <input
          class=""
          v-model="datosAtletas.dni"
          type="number"
          name="dni"
          id="dni"
        />
        <p></p>
      </label>
      <label>
        Tiempo
        <input
          class=""
          v-model="datosAtletas.tiempo"
          type="text"
          name="tiempo"
          id="tiempo"
        />
        <p></p>
      </label>
      <label>
        Posicion
        <input
          class=""
          v-model="datosAtletas.posicion"
          type="number"
          name="posicion"
          id="posicion"
        />
        <p></p>
      </label>
      <label>
        Ciudad ID
        <input
        class=""
          v-model="datosAtletas.ciudadid"
          type="number"
          name="ciudadid"
          id="ciudadid"
        />
        <p></p>
      </label>
      <button class="" type="submit" value="save">Cargar!</button>
      <p></p>
    </form>
  </body>
</template>

<style></style>
