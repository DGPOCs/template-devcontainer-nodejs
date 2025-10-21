# Plantilla Node.js con DevContainers

Este repositorio ofrece una plantilla lista para usar que combina un proyecto Node.js con la configuración necesaria para ejecutarlo dentro de un [Dev Container](https://containers.dev/). Está pensado como punto de partida para crear APIs modernas en JavaScript manteniendo un entorno de desarrollo reproducible.

## Características principales

- **Node.js 20** con npm.
- API REST sencilla desarrollada con [Express](https://expressjs.com/) que expone dos endpoints:
  - `GET /api/welcome`: devuelve el mensaje de bienvenida actual.
  - `POST /api/welcome`: actualiza el mensaje de bienvenida (requiere un cuerpo JSON con el campo `message`).
- Cobertura de pruebas automatizadas mediante [Jest](https://jestjs.io/) y [Supertest](https://github.com/visionmedia/supertest).
- Configuración de Dev Container para trabajar de forma consistente en VS Code o GitHub Codespaces.

## Requisitos previos

- [VS Code](https://code.visualstudio.com/) con la extensión **Dev Containers** o acceso a **GitHub Codespaces**.
- Docker instalado y ejecutándose si se usa VS Code en local.

## Uso del Dev Container

1. Abre el repositorio en VS Code.
2. Cuando se te solicite, selecciona **Reopen in Container** (o usa el comando `Dev Containers: Reopen in Container`).
3. La imagen incluye Node.js 20 y npm. Tras la construcción del contenedor se ejecuta `npm install` para preparar las dependencias del proyecto.

## Ejecución de la aplicación

Una vez dentro del Dev Container (o en tu entorno local con Node.js 20):

```bash
npm start
```

La API estará disponible en `http://localhost:8080`.

### Ejemplo de peticiones

- Obtener el mensaje actual:

  ```bash
  curl http://localhost:8080/api/welcome
  ```

- Actualizar el mensaje:

  ```bash
  curl -X POST http://localhost:8080/api/welcome \
       -H "Content-Type: application/json" \
       -d '{"message": "Hola desde Dev Containers"}'
  ```

## Pruebas

Ejecuta la suite de pruebas con:

```bash
npm test
```

## Personalización

- Modifica el mensaje de bienvenida por defecto editando la constante `DEFAULT_MESSAGE` en `src/welcomeService.js` o establece la variable de entorno `WELCOME_MESSAGE` antes de iniciar la aplicación.
- Añade nuevas dependencias en `package.json` según las necesidades de tu proyecto.
- Ajusta la configuración del contenedor en `.devcontainer/devcontainer.json` para incluir herramientas adicionales.

## Licencia

Este proyecto se distribuye bajo la licencia [MIT](LICENSE).
