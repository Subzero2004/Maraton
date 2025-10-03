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
    <div class="container">
        <div class="header">
            <h1>Registro de Maratonista</h1>
            <p>Complete todos los campos para registrar un nuevo Maratonista</p>
        </div>
        
        <div class="form-content">
            <form id="employeeForm">
                <!-- Nombre -->
                <div class="form-group">
                    <label for="nombre">Nombre completo</label>
                    <input type="text" id="nombre" placeholder="Ingrese su nombre completo" required>
                </div>

                <!-- DNI -->
                <div class="form-group">
                    <label for="dni">DNI</label>
                    <input type="text" id="dni" placeholder="Ingrese su número de DNI" required>
                </div>

                <!-- Posición -->
                <div class="form-group">
                    <label for="posicion">Posición</label>
                    <input type="text" id="posicion" placeholder="Ingrese su posición laboral" required>
                </div>

                <!-- Tiempo -->
                <div class="form-group">
                    <label>Tiempo</label>
                    <div class="time-labels">
                        <span>Horas</span>
                        <span>Minutos</span>
                        <span>Segundos</span>
                    </div>
                    <div class="time-group">
                        <input type="number" id="horas" min="0" max="23" value="00" placeholder="00">
                        <input type="number" id="minutos" min="0" max="59" value="00" placeholder="00">
                        <input type="number" id="segundos" min="0" max="59" value="00" placeholder="00">
                    </div>
                    <div class="time-display" id="timeDisplay">Tiempo seleccionado: 00h 00m 00s</div>
                </div>

                <!-- Ciudad -->
                <div class="form-group">
                    <label for="ciudad">Ciudad</label>
                    <select id="ciudad" required>
                        <option value="">Seleccione una ciudad</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Zaragoza">Zaragoza</option>
                        <option value="Málaga">Málaga</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Palma">Palma</option>
                        <option value="Las Palmas">Las Palmas</option>
                        <option value="Bilbao">Bilbao</option>
                    </select>
                </div>

                <!-- Botón Cargar -->
                <button type="submit">Cargar Datos</button>
            </form>
        </div>

        <div class="footer">
            <img src="https://via.placeholder.com/200x50/6b7280/f8fafc?text=HR+Department" alt="Logo HR">
        </div>
    </div>
</body>
</template>

<style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
        .header img {
            width: 100%;
            height: 120px;
            object-fit: cover;
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
        .form-content {
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
            box-sizing: border-box;
        }
        input:focus, select:focus {
            outline: none;
            border-color: #183e7a;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
        .time-group {
            display: flex;
            gap: 0.5rem;
        }
        .time-group input {
            flex: 1;
            text-align: center;
        }
        .time-labels {
            display: flex;
            gap: 0.5rem;
            font-size: 0.75rem;
            color: #6b7280;
            margin-bottom: 0.25rem;
        }
        .time-display {
            font-size: 0.875rem;
            color: #6b7280;
            margin-top: 0.25rem;
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
            cursor: pointer;
            transition: background 0.2s;
        }
        button:hover {
            background: #143479;
        }
        .footer {
            text-align: center;
            padding: 1rem;
            background: #f8fafc;
            font-size: 0.875rem;
            color: #6b7280;
        }
        .footer img {
            max-width: 200px;
            margin-bottom: 0.5rem;
        }
        @media (max-width: 480px) {
            .time-group {
                flex-direction: column;
            }
        }
    </style>
