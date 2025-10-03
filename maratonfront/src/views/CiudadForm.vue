<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  let datosCiudad = ref({
    nombre: ''
  })

  const EnviarDatos = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/ciudades', datosCiudad.value)
      console.log('Datos enviados:', response.data)
    } catch (error) {
      console.error('Error al enviar datos:', error)
    }
  }
</script>

<template>
<body>
    <div class="container">
        <div class="header">
            <h1>Registro de Ciudad</h1>
            <p>Complete todos los campos para registrar un nueva Ciudad</p>
        </div>

        <div class="contenedor-form">
            <form id="formulario" @submit.prevent="EnviarDatos">

                <div class="form-group">
                    <label for="nombre">Nombre Ciudad</label>
                    <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    v-model="datosCiudad.nombre">
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
