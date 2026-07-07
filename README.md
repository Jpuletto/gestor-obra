# JP · Gestor de Obras v13

## Cambios
- Creación y edición de tipos de proyecto mediante funciones RPC seguras.
- Creación y edición de etapas generales mediante funciones RPC.
- Señal amarilla para observaciones.
- Señal roja para no conformidades.
- Botón `Todos ✓` para marcar conforme en todos los sectores.
- Botón `Todos NC` para marcar no conforme en todos los sectores.
- Confirmación antes de generar no conformidades masivas.
- Nuevo almacenamiento local limpio, sin caché de versiones anteriores.

## Instalación
1. Ejecutar `supabase/migrations/20260710_005_project_type_fix_bulk_bad.sql`.
2. Publicar todos los archivos en GitHub Pages.
3. Probar creación de tipos y marcación masiva.
4. Solo después ejecutar `supabase/reset/20260710_clear_all_keep_users.sql`.

## Reset
El reset conserva usuarios, correos, contraseñas y perfiles.
Borra la información operativa y restaura las configuraciones predeterminadas.
