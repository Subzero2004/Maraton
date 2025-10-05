<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const datosCiudades = ref([])

  async function CargarCiuades() {
    try {
      const response = await axios.get('http://localhost:3000/api/ciudades')
      datosCiudades.value = response.data
    } catch (error) {
      console.error('Error al obtener datos: ', error)
    }
  }

    async function EliminarCiudad(id) {
    if (!confirm('Confirmar Eliminacion')) return
    try {
      await axios.delete(`http://localhost:3000/api/ciudades/${id}`)
      datosCiudades.value = datosCiudades.value.filter(a => a.id !== id)
    } catch (error) {
      console.error('Error al eliminar Ciudad:', error)
    }
  }

CargarCiuades();
</script>

<template>
  <div class="container-historial">
    <router-link :to="'/ciudadform'" class="button-historial"><p>Formulario</p></router-link>
    <h1 class="title">History</h1>
    <table class="table-container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ciudades in datosCiudades" :key="ciudades.id">
          <td>{{ ciudades.id }}</td>
          <td>{{ ciudades.nombre }}</td>
          <td>
            <button @click="EliminarCiudad(ciudades.id)"
            style="
              width: 150px;
              height: 30px;
              border-radius: 10px;
              color: white;
              background-color: darkred;
            ">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.container-historial {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.title {
  text-align: left;
  font-size: 2rem;
  margin-bottom: 20px;
  border-bottom: 2px solid #334b6b;
  display: inline-block;
}

.table-container {
  width: 80%;
  border-collapse: collapse;
  margin-top: 10px;
}

.button-historial {
  width: 130px;
  height: 40px;
  background-color:#4d87d3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px 5px 5px;
  border-radius: 0.5rem;
}

.button-historial p {
  color: white;
  margin: 0px;

}

td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #334b6b;
}

th {
  background-color: #6c6cbb;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #334b6b;
  color: white;
}
</style>
