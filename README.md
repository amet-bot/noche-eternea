# Noche Eterna

Juego de acción y supervivencia en 2D para navegador, PC y celular. Lucía está atrapada en el hospital San Rafael: cada noche sales del Refugio Norte, sigues sus pistas entre hordas de zombis y vuelves con vida.

- 5 noches, cada una más difícil
- Zombis escupidores de ácido, hinchados que revientan, acechadores que saltan, brutos y un jefe
- Armas: MP5, escopeta, AK-47, Desert Eagle y lanzagranadas
- Tienda con Tomás, Marco y Elena, misiones secundarias, mejoras al subir de nivel, combos y logros
- Controles de ratón y teclado en PC, y dos joysticks táctiles en el celular

Todo el juego (gráficos, música y sonido) está en un solo archivo, `index.html`, sin dependencias.

## Controles (PC)

| Acción | Tecla |
|---|---|
| Moverse | WASD o flechas |
| Correr | Shift |
| Rodar (esquivar) | Espacio |
| Disparar / cuchillo | Clic izquierdo / clic derecho |
| Cambiar arma | 1–5, Q/E o rueda |
| Recargar | R |
| Linterna | F |
| Pausa | P o Esc |

## Ejecutar en local

```bash
npm start
```

Abre http://localhost:3000. También puedes abrir `index.html` directamente en el navegador.

## Despliegue

Se despliega en Railway con `npm start` (`server.js`, sin dependencias; usa la variable `PORT`).
