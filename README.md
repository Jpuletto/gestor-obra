# NUDO · Control de obra v2

Prototipo móvil/PWA para inspecciones de obra.

## Probar localmente

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000` desde la carpeta del proyecto.

## Funciones incluidas

- Inicio con proyectos activos y pendientes críticos.
- Navegación proyecto → etapa → sector.
- Lista compacta de controles no aprobados.
- Conforme con un toque.
- Observación/no conformidad con comentario y fecha obligatorios.
- Contactos asignables.
- Dictado por voz si el navegador lo admite.
- Varias fotografías por control.
- Dibujo libre y texto sobre fotografías.
- Ciclo visual: Abierta → En proceso → Corregida → Verificada.
- Historial de visitas.
- Informe imprimible/guardable como PDF.
- Plantillas de sectores y etapas configurables.
- Controles propios para administradores.
- Copia de seguridad JSON.
- PWA instalable y caché básica offline.

Hasta conectar Supabase, los datos se guardan localmente en el navegador.

## Novedades v3
- Calendario mensual de visitas.
- Registro del arquitecto que realizó cada visita.
- Programación de próximas visitas tentativas.
- Etapa, sector, horario, responsable y objetivo previsto.
- Identificación visual de visitas realizadas, tentativas y atrasadas.
- Inicio de una inspección directamente desde una visita programada.

## Novedades v6
- Los avances se muestran como ítems chequeados / ítems totales.
- La lista muestra todos los controles por defecto.
- Un control conforme permanece visible.
- Las tarjetas cambian de fondo según estado: gris, verde, amarillo o rojo.
- Comentario, responsable y fecha dejan de ser obligatorios.
- Volver guarda automáticamente sin confirmación.
- Botones separados: Guardar y volver / Exportar PDF.


## Novedades v7 — Supabase
- Login con correo y contraseña.
- Sesión persistente en el navegador.
- Proyectos, sectores, contactos y etapas sincronizados con Supabase.
- Creación, edición y eliminación de proyectos protegidas por RLS.
- Visitas, chequeos, observaciones y fotografías siguen locales durante esta fase de prueba.
- Site URL: https://jpuletto.github.io/gestor-obra/

### Seguridad
`supabase-config.js` contiene únicamente la URL y la Publishable key. Nunca incluir Secret key o service_role.
