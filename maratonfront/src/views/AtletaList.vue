<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const datosAtletas = ref([])
  const ciudades = ref([])

  async function CargarAtletas() {
    try{
      const response = await axios.get('http://localhost:3000/api/atletas')
      datosAtletas.value = response.data
    } catch (error) {
      console.error('Error al obtener datos: ', error)
    }
  }

  async function CargarCiuades() {
    try{
      const response = await axios.get('http://localhost:3000/api/atletas')
      ciudades.value = response.data
    } catch (error) {
      console.error('Error al obtener datos: ', error)
    }
  }

  async function EliminarAtleta(id) {
    if (!confirm('Confirmar Eliminacion')) return
    try {
      await axios.delete(`http://localhost:3000/api/atletas/${id}`)
      datosAtletas.value = datosAtletas.value.filter(a => a.id !== id)
    } catch (error) {
      console.error('Error al eliminar atleta:', error)
    }
  }

CargarCiuades();
CargarAtletas();
</script>

<template>
  <div class="container-historial">
    <router-link :to="'/'" class="button-historial"><p>Formulario</p></router-link>
    <h1 class="title">History</h1>
    <table class="table-container">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Tiempo</th>
          <th>Posicion</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="atletas in datosAtletas" :key="atletas.id">
          <td>{{ atletas.nombre }}</td>
          <td>{{ atletas.dni }}</td>
          <td>{{ atletas.tiempo }}</td>
          <td>{{ atletas.posicion }}</td>
          <td>{{
            ciudades.find(c => c.id === atletas.ciudadId)?.nombre || 'Desconocido'
          }}</td>
          <td>
            <button @click="EliminarAtleta(atletas.id)"
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
