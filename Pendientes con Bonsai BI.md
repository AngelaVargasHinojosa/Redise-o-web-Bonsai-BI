# Pendientes con Bonsai BI

## Lo más urgente que hay que pedirles
1. Autorización para mencionar Inditex y Honduras (aunque sea de forma genérica, sin nombre).
2. Qué casos de éxito pueden usar y con qué nivel de detalle: cliente, cifra, logo y permiso de publicación. Llevan meses pendientes y son la principal prueba de confianza de las páginas.
3. Su posición concreta para la tabla comparativa.
4. Logos: el del tercer caso (Sin transcribir partes en la oficina) y los de los clientes que quieran mostrar en "Confían en nosotros".

## Que lean y revisen
- Toda la web (mockup): Home, Soluciones, Landing de Diagnóstico, Sectores, Sobre Bonsai, Recursos (Blog) y el artículo de Pompas.
- Las landings actuales (registro digital, reporting, automatización y formación) y las 3 landings nuevas del pie que les pasa Lucía, para confirmar que lo que decimos en cada ficha coincide con lo que ofrecen.
- Marcar cualquier afirmación, cifra o proceso que no sea exacto (ver "Afirmaciones que deben validar").

## Para completar las páginas
- Landings del pie (Empresa Business Intelligence, Business Intelligence para Empresas y Consultoría Business Intelligence): las tiene Lucía y se las pasa a Bonsai para que las revisen. Cuando estén publicadas, falta añadir sus direcciones al pie (hoy los enlaces están vacíos).
- Artículos del blog sin página: SIG (Justificar proyectos sin decenas de Excel) y el caso de partes de campo (Sin transcribir partes en la oficina).
- Foto para el sector "Áreas transversales" de la Home.
- Enlace de calendario para "Reservar una llamada" en la landing de Diagnóstico.


## Casos de éxito (los más urgentes)
- Cifra real del caso 2 (Justificar proyectos sin decenas de Excel). La web de Sobre Bonsai usa "−90 % de tiempo en justificar un proyecto". Confirmar que es correcta y publicable.
- Cifra real del caso 3 (Del papel al dato en tiempo real). Hoy figura "< 2 meses hasta la primera versión funcional". Confirmar.
- Logo del cliente del tercer caso (Sin transcribir partes en la oficina) y permiso para usarlo.
- Artículo propio del caso SIG (hoy el enlace va al blog general). Pompas ya tiene.
- Casos para las soluciones que hoy no tienen ninguno: Diagnóstico, Automatización y Formación.

## Preguntas frecuentes (respuestas redactadas, por validar)
- ¿Cuánto dura un diagnóstico? Respuesta basada en lo que has comentado: depende de la complejidad de los procesos, la depuración y digitalización de los datos, y el presupuesto varía según la dedicación. Validar el tono ("como buenos gallegos").
- ¿Cuánto cuesta empezar? La respuesta publica el rango "desde 1.500 € hasta 30.000 €" (validado).
- ¿Qué tengo que preparar antes de la primera reunión? Herramientas que usan, para qué usan la información y cuántas personas la manejan.

## Afirmaciones que deben validar
- "Es un orden que hemos visto funcionar durante décadas. Cambiarlo es la razón más común de que los proyectos no se sostengan."
- "Una solución BI que solo entiende quien la construyó, cae en desuso y genera una dependencia."
- Formación: las frases de la tarjeta (Transmite el conocimiento, Detecta desviaciones, Autonomía) salen de bonsaibi.com/formacion/.

## Decisiones de nombre y enlaces
- La ficha 3 se llama "Aplicaciones de registro de datos". La web actual posiciona "Registro digital de actividades". ¿Mantenemos esa palabra clave?
- El pie de página sigue con los nombres antiguos de servicio (Registro digital de actividades, Elaboración de reportings, Automatización de procesos, Formación).
- CTA de contacto: todas las fichas apuntan a bonsaibi.com/contacto/. ¿Prefieren un formulario de diagnóstico para filtrar?
- Landing de Diagnóstico: es el servicio de entrada y hoy no existe. Crearla. Mientras tanto, la ficha 1 no tiene enlace de "Saber más". Confirmar también si todos los diagnósticos incluyen hoja de ruta con plazos y presupuesto (lo dice la Home).
- Landing de formación (bonsaibi.com/formacion/) existe. ¿Hay landings nuevas para las otras soluciones?

## Tarea técnica: casos de éxito dinámicos (Elementor)
- Requiere Elementor Pro (Loop Grid o Loop Carousel). Confirmar el plan.
- Campos por caso: logo del cliente, cifra destacada, sector, solución, titular y resumen.
- Una plantilla de tarjeta, filtrada por solución (página Soluciones), por sector (página Sectores) o sin filtro (Sobre Bonsai).
- Carrusel a partir de 4 o 5 casos. Con 3, mejor cuadrícula.
- Para Sectores hacen falta al menos 2 casos por sector. Hoy hay 1 en ONGs, comercio e ingeniería y ninguno en el resto.

## Landing de Diagnóstico (nueva)
- Enlace de calendario para "Reservar una llamada" (hoy el botón final apunta a /contacto/).
- Confirmar el proceso: llamada gratuita, pequeño estudio previo gratuito, propuesta, diagnóstico en profundidad de pago según alcance.
- Confirmar que todos los diagnósticos incluyen hoja de ruta con plazos y presupuesto.
- Validar las respuestas de duración y coste (y el rango de precios).
- Validar el equipo mostrado (6 personas) y si quieren roles o enlaces.
- SEO de la landing de Diagnóstico. Título: "Diagnóstico de procesos y gestión de información | Bonsai BI". Descripción: "Descubre dónde se escapan tiempo, margen y datos en tu empresa. Diagnóstico de Bonsai BI con hoja de ruta, plazos y presupuesto. Primera llamada gratuita."
- Enlaces internos del bloque "A menudo, el diagnóstico es la puerta a otras soluciones": confirmar que apuntan a las landings correctas.

## Tarea técnica menor (Elementor): bloque "Si decides implantarla, según lo que descubramos"
- Cuadrícula de 2 columnas (1 en móvil). Cada fila: icono SVG a la izquierda, hallazgo en gris y enlace verde con flecha. Borde superior fino por fila.
- Se monta con Icon Box o contenedores. No requiere Elementor Pro.
- Iconos: los de la cabecera de Soluciones (gráfico, móvil con check, ciclo, birrete).

## Tarea técnica (Elementor Pro): plantilla de entrada del blog
- Plantilla Single Post en Theme Builder: contenido a la izquierda, columna derecha fija (sticky, desactivada en tablet y móvil).
- Columna derecha: categorías (Post Taxonomy o enlaces), botón "Volver a todos los artículos" y tarjeta de CTA (guardable como plantilla global).
- Final del artículo: CTA y casos relacionados (Loop Grid o Posts, filtrado por categoría o etiqueta).
- Definir taxonomías por entrada: tipo, sector y solución. Sin ellas no se pueden filtrar los relacionados.
- Confirmar el plan de Elementor (Pro).

## Tarea técnica (Elementor): vídeo en la cabecera de Soluciones
- Contenedor de 2 columnas: texto a la izquierda y widget Video a la derecha (autoplay, silenciado y en bucle, sin controles). En móvil el vídeo pasa debajo del texto.
- Difuminado del borde izquierdo: CSS personalizado (mask-image), disponible con Elementor Pro o desde el Personalizador.
- Peso del vídeo: comprimir el mp4 (idealmente menos de 3 MB) para no ralentizar la carga.

## Landing 1: Empresa Business Intelligence
- Sectores alineados con la web (ONGs, ingeniería, comercio, instaladores, distribución y áreas transversales), con la descripción de la Home. Revisar que el texto del briefing original ya no se usa.
- Número de proyectos: marcado como "XXX" en hero, tarjeta de diferenciadores, proceso y tabla comparativa. Pendiente la cifra real y cómo se justifica.
- Años de experiencia: el briefing dice "+15 años" y a la vez que la empresa se fundó en 2021. Aclarar si son los años de trayectoria de los fundadores.
- Afirmaciones por validar: "en 48 horas", "8 a 16 semanas", "consultores senior directos" y la referencia al Gartner Magic Quadrant.
- Tono: revisar con Carolina y Ramiro. Biografías reales de Sobre Bonsai en lugar de las del briefing.
- Preguntas frecuentes de la landing 1 reescritas con lo que ya dice el resto de la web (llamada gratuita, coste según alcance, formación del equipo, orden procesos, datos y tecnología). Se han quitado "8 a 16 semanas", "48 horas" y "consultores senior" de las respuestas. Siguen en el CTA final y en la tabla ("48 horas", "sin permanencia"): validar.

## Landing 3: Consultoría Business Intelligence
- No se ha incluido el caso de ejemplo del briefing (distribución alimentaria, 38 M€, de 3 días a 20 minutos): es orientativo y no está validado.
- Se ha quitado la frase "entre dos y cuatro jornadas de trabajo" del diagnóstico (paso 2). Si Bonsai la confirma, puede volver.
- Pendientes de Bonsai: tabla comparativa, resto del equipo, casos de éxito, testimonios.

## Landing 2: Business Intelligence para Empresas (versión revisada)
- Precio en las preguntas frecuentes: validado (de 1.500 a 30.000 euros, proyecto medio 6.000). Publicado en la landing 2 y en Soluciones.
- Se ha quitado la frase "entre dos y cuatro jornadas" del diagnóstico y la fila "tiempo hasta la primera versión" de la tabla (sin validar).
- Se mantiene "Consultores senior directos" como título de tarjeta, a validar.

## Decisión de contenido: herramientas
- Criterio confirmado: Bonsai BI trabaja con el ecosistema que tenga el cliente, sin importar la plataforma, porque casi todo se puede conectar por API.
- Las landings 2 y 3 dicen "principalmente Microsoft 365" y la lista de herramientas es solo de Microsoft. Hay que reescribirlas con este criterio. La landing 1 y la Home ya lo recogen mejor ("trabajamos con muchas herramientas").
