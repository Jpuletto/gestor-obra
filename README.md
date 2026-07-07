# JP · Gestor de Obras — versión operativa

## Alcance
- Proyectos activos y finalizados.
- Administración de datos, arquitectos y permisos.
- Calendario y visitas tentativas sincronizadas.
- Visitas en borrador y cerradas.
- Resultados independientes por visita.
- Estado actual de cada control.
- Observaciones sincronizadas.
- Indicador global de guardado.
- Cambio de contraseña.
- Sin fotografías en esta versión.

## Instalación sobre la base existente
1. Ejecutar `supabase/migrations/20260708_003_operational.sql`.
2. Publicar la app y crear un proyecto temporal.
3. Probar calendario, borrador, controles, observaciones y cierre.
4. Ejecutar `supabase/reset/20260708_clear_test_data_keep_users.sql`.
5. Volver a abrir la app y crear proyectos reales.

El reset conserva usuarios, perfiles, correos y contraseñas.

## Archivos principales
- `index.html`
- `app.js`
- `styles.css`
- `jp-data.js`
- `jp-config.js`
- `manifest.webmanifest`
- `service-worker.js`

## Datos
La base principal es Supabase/PostgreSQL. La caché local utiliza la clave
`jp_gestor_obras_v11` y elimina automáticamente restos locales de versiones
de prueba anteriores.

Los términos técnicos como “nudos estructurales” dentro del checklist se conservan porque no son referencias a la marca.
