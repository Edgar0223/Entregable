# Monitor de Pasos y Orientación

Este proyecto es una aplicación móvil desarrollada con React Native y Expo. Está diseñada para monitorear la actividad física y detectar la orientación de la pantalla en tiempo real, utilizando los sensores del dispositivo. Además, permite realizar llamadas telefónicas mediante un simple botón. Es ideal para aquellos interesados en un seguimiento de pasos y orientación mientras realizan actividades físicas.

## Características principales

Monitoreo de pasos: Utiliza el acelerómetro del dispositivo para detectar el movimiento y contar los pasos de manera precisa.
Detección de orientación: La aplicación detecta si el dispositivo está en posición vertical o horizontal y ajusta automáticamente la orientación de la pantalla.
Llamadas telefónicas: Incluye una función para realizar llamadas directamente desde la aplicación.
Interfaz intuitiva: La interfaz cuenta con una barra de navegación personalizada, un contador de pasos en tiempo real y la visualización de la orientación del dispositivo.
Optimización para dispositivos móviles: La aplicación está diseñada para ser fluida y optimizada para su uso en teléfonos móviles, con un diseño atractivo y moderno.
## Tecnologías utilizadas

React Native: Framework principal para desarrollar aplicaciones móviles nativas.
Expo: Herramientas y servicios para el desarrollo rápido de aplicaciones en React Native.
expo-sensors: Librería que permite acceder a los sensores del dispositivo (acelerómetro y giroscopio).
expo-screen-orientation: Librería para controlar y detectar la orientación de la pantalla del dispositivo.
## Instalación

### Clona el repositorio:
git clone https://github.com/tu-usuario/monitor-pasos-orientacion.git
### Navega al directorio del proyecto:
cd monitor-pasos-orientacion
### Instala las dependencias utilizando npm o yarn:
npm install o yarn install
### Ejecuta el proyecto con Expo:
expo start
## Uso

### Al abrir la aplicación, verás la siguiente información:

Contador de pasos: Un número que se incrementa cada vez que detecta un movimiento significativo, indicando la cantidad de pasos dados.
Orientación: Un texto que muestra si el dispositivo está en vertical u horizontal.
Botón de llamada: Un botón que, al presionarlo, realiza una llamada telefónica al número configurado.
Personalización

### Si deseas cambiar el número al cual se realiza la llamada o cualquier otro aspecto de la aplicación, puedes modificar los siguientes valores en el código:

Número de teléfono para la llamada: const phoneNumber = 'tel:3512820632';
Los umbrales de aceleración para detectar los pasos y orientación pueden ajustarse dentro de las funciones detectStep y detectOrientation.
Contribución


https://github.com/user-attachments/assets/f907ed10-3800-4452-bc28-45ee299412fc




 
