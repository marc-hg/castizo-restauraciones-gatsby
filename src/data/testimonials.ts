export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Excelente trabajo, mi mueble quedó como nuevo.",
    author: "María García",
    role: "Cliente Particular",
  },
  {
    text: "Profesionales y detallistas en cada paso del proceso.",
    author: "Juan Pérez",
    role: "Anticuario",
  },
  {
    text: "Muy recomendados por su atención y calidad en el trabajo.",
    author: "Ana Martínez",
    role: "Interiorista",
  },
]; 