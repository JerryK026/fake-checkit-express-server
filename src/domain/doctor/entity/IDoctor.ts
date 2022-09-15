export default interface IDoctor {
  id: number;
  doctor_id: string;
  available_hours: string;
  available_weekday: string;
  description: string;
  doctor_display_name: string;
  doctor_image_url: string;
  doctor_images: string[];
  doctor_tel: string;
  hospital_addr: string;
  hospital_name: string;
  lab_addr: string;
  lab_name: string;
  lab_postal_code: string;
  lab_receiver_name: string;
  lab_tel: string;
  lat: string;
  lng: string;
  professional_statement: string;
  subjects: string;
}
