const formatos = [
    {
        nombre: "Carátula",
        categoria: "General",
        link: "https://docs.google.com/document/d/1ettquUlZnaqSl6UqZNwfXPbpH9NpdXJT/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Formatos horario a dirección BECA AUXILIAR",
        categoria: "Becas",
        link: "https://docs.google.com/document/d/124zajn2-tcIaNUpivYwoCmrpwTy4vRUH/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Postulación Beca Auxiliar DECANO (1)",
        categoria: "Becas",
        link: "https://docs.google.com/document/d/1sLGrBqHEhjMSWM5ppzxGMb7q8jt2-gFN/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Postulación Beca Auxiliar DECANO (2)",
        categoria: "Becas",
        link: "https://docs.google.com/document/d/16kjJhVoLlflYffdlP8PCCB7B2XRKWzq8/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Solicitud Asistente de Laboratorio",
        categoria: "Becas",
        link: "https://docs.google.com/document/d/163AvUJ_yQA4ZO_PdY-BSBLW8JrDEPYQP/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Solicitud Anulación de materia Auxiliar de Docencia",
        categoria: "Becas",
        link: "https://docs.google.com/document/d/1HNkUje9Oz_q9uF_Y2VD3blZroRtSVWUF/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Certificado de Conclusión de Asignaturas",
        categoria: "General",
        link: "https://docs.google.com/document/d/1OoGjzGR1wFz7wI6Jw7wo4GhvtfakKvm5/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Certificado de Notas",
        categoria: "General",
        link: "https://docs.google.com/document/d/1A5OEieQxnPSZS-_WtVfzGBDACIhuQZo8/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Habilitación para Examen de Auxiliatura",
        categoria: "Becas",
        link: "https://docs.google.com/document/d/1-l8rNRbPqtPhbBU04ozM1EJ7PzMQLgLX/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Práctica Laboral a Tiempo Completo",
        categoria: "Practicas Laborales",
        link: "https://docs.google.com/document/d/1nyisgQ_f7hUWNyem7_4FJPgrz9qPlqDZ/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Prácticas Laborales",
        categoria: "Practicas Laborales",
        link: "https://docs.google.com/document/d/1GexOVgm7ayMU4t9IdIc2-VTgk424KUlx/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Programa de Diplomado",
        categoria: "Diplomado",
        link: "https://docs.google.com/document/d/1p0HhQFLt1gneui0srL-xeiBBV9RllJqp/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Reprogramación de Parcial",
        categoria: "Reprogramaciones",
        link: "https://docs.google.com/document/d/1l52eLniX4F9s7TnPHn-h-OvE6HmfNgHP/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Reprogramación Examen de Invierno/Verano",
        categoria: "Reprogramaciones",
        link: "https://docs.google.com/document/d/1F6UMgPLA5Ok_lefABBaeFp2f5H-cSO4g/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Solicitud de Revisión de Cámaras",
        categoria: "General",
        link: "https://docs.google.com/document/d/1_wWlGRNzaONRv52NKCHRVW7TKB-rY-x0/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Revisión de Parciales y Prácticas",
        categoria: "General",
        link: "https://docs.google.com/document/d/1h2xfQV1Mu3DC65N2U2hkMqLM1M5cRoh2/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Desprogramación de Materia",
        categoria: "Reprogramaciones",
        link: "https://docs.google.com/document/d/1ojSAKW7Du-yNpdZ6NgLD6UnIPTaFu6R5/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Exención de Trabajo de Titulación – Excelencia",
        categoria: "Titulacion",
        link: "https://docs.google.com/document/d/1aU21HymGeDzrP5HpCEUgl-8SIIMHnSzA/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Cambio de Grupo",
        categoria: "Reprogramaciones",
        link: "https://docs.google.com/document/d/1GTmyYDNDbfJmKCswQr4YArazOVQC4vqa/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Adelantar Materia",
        categoria: "Nivelacion de Materias",
        link: "https://docs.google.com/document/d/11Gh5e2EGhih5sLGOesizu6cjeQS-KhV7/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Habilitación Beca Auxiliar de Docencia",
        categoria: "Becas",
        link: "https://docs.google.com/document/d/1aDANNmSHbjQPAb8Sp8eJrtcFoZn9pl8U/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Desprogramación de Materia y Laboratorio",
        categoria: "Reprogramaciones",
        link: "https://docs.google.com/document/d/1HkfeSF0xNUxGZahC9Y_tsLaPXAeJ-S3L/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    },
    {
        nombre: "Desprogramación de Materia",
        categoria: "Reprogramaciones",
        link: "https://docs.google.com/document/d/12xoZ3bCrD6FmLTZ3N54VQBqcpGQV1zQ5/edit?usp=drive_link&ouid=104839980168071257337&rtpof=true&sd=true"
    }
];