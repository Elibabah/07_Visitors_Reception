# 07_Visitors_Reception

Central de recepción de visitantes construida con JavaScript, HTML, CSS y Firebase.

FALTA:

- Personalizar el proyecto para un coworking como: [Terminal 1](https://terminal1.mx/)

---

![firebase](https://media.giphy.com/media/9YK1vUKyYmGUEsCtmC/giphy.gif)

---

Índice

    2. Definición de usuario
    3. Historias de usuario
    3. Aceptance Criteria
    4. Technical Requirements
    5. Hacker edition
    6. Expected Learning Outcomes

---

## 1. Definición de usuario

Esta aplicación tiene la doble faceta de servir para dos tipos de usuarios vinculados a dos partes de un mismo problema: el control de aflujo en un edificio de trabajo.

**Usuario 1: Visitantes del edificio de coworking**

**Usuario 2: Administradores de recepción del edificio de coworking**

## 2. Historias de usuario:

La interfaz debe permitir a los visitantes:

- Para quienes desean acceder al edificio, deben poder registrar:

  - Nombre y apellido
  - Correo electrónico o número de teléfono
  - Empresa u oficina que visita
  - Personas que visitan
  - Razón para visitar
  - Si ya tenía cita o necesita notificar a la oficina que visita
  - Después de que se capturaron estos datos, podrá tomar una foto del rostro del visitante.
  - Almacene todo el registro y confirme que el registro se ha realizado correctamente y se permite la entrada al visitante.

---

- Para los administradores del edificio de coworking (esta parte no debe ser visible como primera vista para los visitantes):

  - Mostrar una vista privada con contraseña de acceso
  - Mostrar la lista de visitantes completa ordenados por fecha de registro
  - Mostrar cuántos visitantes se han registrado hasta ahora.
  - Mostrar cuántos visitantes se han registrado durante los últimos 30 días.
  - Mostrar cuántos visitantes se han registrado durante la última semana (7 días)
  - Mostrar cuántos visitantes se han registrado durante el día.
  - Poder añadir una marca de los visitantes que han abandonado el edificio como "Fecha de salida" y la fecha de salida.

## 3. Criterios de aceptación

- Interfaz responsiva para tabletas y computadoras de escritorio
- Cubrir todas las historias de usuario

---

## 4. Requerimientos técnicos

- Uso de JavaScript Vanilla ES6 (ECMAScript 2015 y superior), HTML5, CSS3

- `npm init` & `eslintrc.json`

- JSON

- ASYNC AWAIT

- DB Firestore

- CRUD en Firebase

- Data Structuring

- Acceso al sistema operativo: cámara

- Métodos Array e iteraciones

- Iteración de objetos y buscadores de key

- Importación y exportación de módulos

- .gitignore

- Modelado de ramas development & release

- Aplicación responsiva (tabletas & desktops)

- HTML semántico

- Documentación de todos los pasos del SDLC ágil en ReadMe.md. Planificación de Backlog

- Uso de Bootstrap Framework

- Persistencia de los datos. Almacenar los datos en la base de datos de Firestore.

- Leer los datos de la base de datos para mostrarlos en la vista de administradores.

## 5. _Boilerplate_

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── assets
├── src
│   ├── app.js
│   ├── data.js
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   ├── visitors.html
│   ├── visitors.js
│   ├── admin.js
│   └── administration.js
└── test
    ├── app.spec.js
    └── index.html
```

## 6. Diagrama de flujo

---

## 7. Prototipado

---

## 8. Producto final
