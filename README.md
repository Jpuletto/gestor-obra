# JP · Gestor de Obras v16

## Funciones nuevas

- Editar tareas de una plantilla únicamente para un proyecto.
- Agregar tareas personalizadas por etapa.
- Restaurar una tarea editada a su contenido original.
- Ocultar tareas personalizadas sin borrar el historial.
- Crear proyectos `Sin plantilla`.
- Elegir sectores y etapas para proyectos vacíos.
- Impedir comenzar una visita en una etapa sin tareas.
- Exportar el PDF con tareas coloreadas:
  - verde: conforme;
  - amarillo: observación;
  - rojo: no conforme;
  - gris: sin revisar.

## Instalación

1. Ejecutar `supabase/migrations/20260712_007_custom_project_tasks.sql`.
2. Publicar todos los archivos en GitHub Pages.
3. Recargar desde el botón de actualización de la app.

## Reset

El reset compatible está en:

`supabase/reset/20260712_clear_all_keep_users.sql`

Conserva usuarios, contraseñas, perfiles y roles.
