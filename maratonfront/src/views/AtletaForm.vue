<script setup>

  import { onMounted, ref } from 'vue';
  import axios from 'axios';

  let datosAtletas = ref({
    nombre: '',
    dni: '',
    tiempo: '',
    posicion: '',
    ciudadid: ''
  })

  let ErrorNombre = ref('')
  let ErrorTiempo = ref('')
  let ErrorDni = ref('')
  let ErrorPosicion = ref('')
  let EnvioExitoso = ref('')


  const ciudades = ref([])

  const EnviarDatos = async () => {
    try {
          if (
      datosAtletas.value.nombre == '' ||
      datosAtletas.value.nombre.length < 3 ||
      datosAtletas.value.nombre.length > 250
    ) {
      ErrorNombre.value =
        'Nombre Invalido'
    } else {
      ErrorNombre.value = ''
    }

    if (datosAtletas.value.dni < 0 || datosAtletas.value.dni == '') {
      ErrorDni.value = 'DNI Invalido'
    } else {
      ErrorDni.value = ''
    }

    if (datosAtletas.value.tiempo == '') {
      ErrorTiempo.value =
        'Tiempo Invalido'
    } else {
      ErrorTiempo.value = ''
    }

    if (datosAtletas.value.posicion < 0 || datosAtletas.value.posicion == '') {
      ErrorPosicion.value = 'Posicion Invalida'

    } else {
      ErrorPosicion.value = ''
    }

      const response = await axios.post('http://localhost:3000/api/atletas', datosAtletas.value)
      console.log('Datos enviados:', response.data)
      if (response.status == 201) {
      datosAtletas.value = {
        nombre: '',
        dni: '',
        tiempo: '',
        posicion: '',
      }
          EnvioExitoso.value = 'Envio de Datos Exitoso'
    } else {
      EnvioExitoso.value = ''
    }
    } catch (error) {
      console.error('Error al enviar datos:', error)
    }
  }

  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/ciudades')
    ciudades.value = response.data
    } catch (error) {
      console.error('Error al obtener ciudades: ', error)
    }
  })
</script>


<template>
<body>
    <div class="container">
        <div class="header">
            <h1>Registro de Maratonista</h1>
            <p>Complete todos los campos para registrar un nuevo Maratonista</p>
        </div>

        <div class="contenedor-form">
            <form id="formulario" @submit.prevent="EnviarDatos">

                <div class="form-group">
                    <label for="nombre">Nombre completo</label>
                    <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    v-model="datosAtletas.nombre">
                    <p>{{ ErrorNombre }}</p>
                </div>

                <div class="form-group">
                    <label for="dni">DNI</label>
                    <input
                    type="text"
                    id="dni"
                    placeholder="DNI"
                    v-model="datosAtletas.dni">
                    <p>{{ ErrorDni }}</p>
                </div>

                <div class="form-group">
                    <label for="posicion">Posición</label>
                    <input
                    type="text"
                    id="posicion"
                    placeholder="Posicion"
                    v-model="datosAtletas.posicion">
                    <p>{{ ErrorPosicion }}</p>
                </div>

                <div class="form-group">
                    <label>Tiempo</label>
                    <div class="tiempo">
                        <input
                        type="text"
                        id="horas"
                        placeholder="00h 00m 00s"
                        v-model="datosAtletas.tiempo">
                        <p>{{ ErrorTiempo }}</p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="ciudad">Ciudad</label>
                    <select id="ciudad" v-model.number="datosAtletas.ciudadid">
                      <option v-for="ciudad in ciudades"
                      :key="ciudad.id"
                      :value="ciudad.id">
                      {{ ciudad.nombre }}
                    </option>
                    </select>
                </div>

                <button type="submit">Cargar Datos</button>
            </form>
        </div>
    </div>
</body>
</template>

<style>
        body {
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }
        .container {
            width: 100%;
            max-width: 400px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: #184388;
            color: white;
            text-align: center;
            padding: 1rem;
        }
        .header h1 {
            margin: 0.5rem 0 0.25rem;
            font-size: 1.5rem;
        }
        .header p {
            margin: 0;
            opacity: 0.9;
            font-size: 0.875rem;
        }
        .contenedor-form {
            padding: 1.5rem;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            margin-bottom: 0.25rem;
            font-weight: 500;
            color: #374151;
        }
        input, select {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 1rem;
        }
        button {
            width: 100%;
            padding: 0.75rem;
            background: #173e7d;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 500;
        }
        @media (max-width: 480px) {
            .time-group {
                flex-direction: column;
            }
        }
    </style>
