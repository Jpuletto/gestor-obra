# JP · Gestor de Obras v45

## Funciones nuevas

- Aislar por JavaScript la impresión del informe para que no salga el resumen de la app.
- Imprimir/exportar únicamente el informe, sin la pantalla principal de la app.
- Mostrar el preview del informe como una hoja A5 horizontal igual al PDF exportado.
- Compactar el diseño del informe para favorecer una sola hoja sin cortar contenido.
- Mejorar los botones compactos de etapas y tareas.
- Normalizar fechas de eventos agendados para que aparezcan en calendario y PDF.
- Renombrar la sección del PDF a `Reuniones`.
- Mejorar la administración de etapas y tareas del proyecto.
- Quitar el botón principal de `Agregar etapas` del bloque superior de la obra.
- Priorizar eventos agendados atrasados en el calendario y aceptar estados históricos equivalentes.
- Ajustar etiquetas de estado del informe para que no se salgan del recuadro.
- Corregir la generación de informes con observaciones abiertas o corregidas.
- Exportar informes en A5 horizontal para mejorar el área de lectura.
- Mostrar comentarios de controles en un recuadro horizontal debajo de cada fila del informe.
- Iniciar una inspección directamente sin doble confirmación.
- Desmarcar un control conforme tocando nuevamente el check.
- Agregar etapas faltantes desde cada proyecto y ajustar la etapa actual si corresponde.
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
- Priorizar los eventos debajo del calendario y plegar el historial de visitas.
- Exportar desde la obra el informe de la última visita cerrada.
- Elegir qué visita cerrada exportar al generar el PDF desde la obra.
- Exportar informes agrupados por jornada de visitas.
- Exportar informes con varios días seleccionados y título editable.
- Ocultar la hora de visita en los informes.
- Ocultar la cantidad de visitas cerradas en el informe.
- Mostrar `Arquitecto: Juan Pablo Puletto` en el informe.
- Renombrar la sección de agenda del informe a `Reuniones`.
- Mostrar todas las observaciones/no conformidades abiertas del proyecto en el informe.
- Dejar todos los tipos de proyecto con sector inicial `General`.
- Marcar visitas agendadas como realizadas desde el calendario y convertir controles agendados en conformes.
- Ajustar el PDF para que observaciones largas no se salgan del ancho de página.
- Renombrar la sección del informe a `Observaciones y no conformidades a resolver`.
- Quitar el resumen de conteos debajo de cada día del informe.
- Mostrar observaciones verificadas en el informe del día correspondiente.
- Cerrar observaciones solo como `Corregida` y guardar comentario de corrección para el informe.
- Mostrar pendientes principales del proyecto solo para el sector `General`.
- Mostrar `Agendado` como caracterización beige en controles, calendario e informes.
- Incluir en el informe solo los controles marcados y todos los sectores revisados en esa visita.
- Crear proyectos con sector inicial `General`.
- Exportar el PDF con tareas coloreadas:
  - verde: conforme;
  - amarillo: observación;
  - rojo: no conforme;
  - beige: agendado;
  - gris: sin revisar.

## Instalación

1. Verificar que la base tenga la estructura original de la app: perfiles, proyectos, integrantes, sectores, contactos, visitas, chequeos y observaciones.
2. Ejecutar, en orden, las migraciones de `supabase/migrations`:
   - 
   - `20260708_003_operational.sql`
   - 
   - `20260709_004_stage_groups_project_types.sql`
   - 
   - `20260710_005_project_type_fix_bulk_bad.sql`
   - 
   - `20260711_006_resolve_issues_and_status_buttons.sql`
   - 
   - `20260712_007_custom_project_tasks.sql`
   - 
   - `20260713_008_core_project_rpcs.sql`
   - 
   - `20260714_009_remove_duplicate_project_bundle.sql`
   - 
   - `20260904_010_default_general_sector.sql`
   - 
   - `20260905_011_scheduled_check_status.sql`
   - `20260905_012_all_project_types_general_sector.sql`
3. Publicar todos los archivos en GitHub Pages.
4. Abrir la app y usar el botón de recarga para tomar la versión v45.

## Reset

Después de la última prueba funcional, ejecutar:

`supabase/reset/20260713_clear_all_keep_users.sql`

Conserva usuarios, contraseñas, perfiles y roles.
Borra proyectos, visitas, chequeos, observaciones, contactos, integrantes y tareas personalizadas.
