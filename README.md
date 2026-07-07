# JP · Gestor de Obras v14

## Cambios
- Los controles muestran siempre su estado vigente al volver a una vista.
- Verde: conforme.
- Amarillo: observación.
- Rojo: no conforme.
- Las observaciones y no conformidades tienen accesos separados.
- Botón Observaciones con fondo amarillo.
- Botón No conformes con fondo rojo.
- Al marcar una observación como Corregida o Verificada:
  - desaparece de pendientes;
  - el control queda conforme;
  - se conserva el historial de la observación.

## Instalación
1. Ejecutar `supabase/migrations/20260711_006_resolve_issues_and_status_buttons.sql`.
2. Publicar todos los archivos en GitHub Pages.
3. Probar persistencia, observaciones y no conformidades.
4. Solo después ejecutar el reset definitivo.

## Reset
El reset conserva usuarios, contraseñas, perfiles y roles.
