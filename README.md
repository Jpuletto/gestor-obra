# JP · Gestor de Obras v19

## Funciones nuevas

- Editar tareas de una plantilla únicamente para un proyecto.
- Agregar tareas personalizadas por etapa.
- Restaurar una tarea editada a su contenido original.
- Ocultar tareas personalizadas sin borrar el historial.
- Crear proyectos `Sin plantilla`.
- Elegir sectores y etapas para proyectos vacíos.
- Impedir comenzar una visita en una etapa sin tareas.
- Abrir y cerrar observaciones / no conformidades desde el proyecto.
- Marcar observaciones como corregidas o verificadas dejando el control conforme.
- Ver en el calendario el vencimiento de corrección de observaciones abiertas.
- Ver el detalle de cada marca al tocar un día del calendario.
- Editar desde la agenda la fecha límite, responsable y estado de una observación.
- Exportar el PDF con tareas coloreadas:
  - verde: conforme;
  - amarillo: observación;
  - rojo: no conforme;
  - gris: sin revisar.

## Instalación

1. Verificar que la base tenga la estructura original de la app: perfiles, proyectos, integrantes, sectores, contactos, visitas, chequeos y observaciones.
2. Ejecutar, en orden, las migraciones de `supabase/migrations`:
   - `20260708_003_operational.sql`
   - `20260709_004_stage_groups_project_types.sql`
   - `20260710_005_project_type_fix_bulk_bad.sql`
   - `20260711_006_resolve_issues_and_status_buttons.sql`
   - `20260712_007_custom_project_tasks.sql`
   - `20260713_008_core_project_rpcs.sql`
   - `20260714_009_remove_duplicate_project_bundle.sql`
3. Publicar todos los archivos en GitHub Pages.
4. Abrir la app y usar el botón de recarga para tomar la versión v19.

## Reset

Después de la última prueba funcional, ejecutar:

`supabase/reset/20260713_clear_all_keep_users.sql`

Conserva usuarios, contraseñas, perfiles y roles.
Borra proyectos, visitas, chequeos, observaciones, contactos, integrantes y tareas personalizadas.
