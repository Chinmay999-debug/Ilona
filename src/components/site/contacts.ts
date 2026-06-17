export type DoctorContact = {
  name: string;
  specialty: string;
  phone: string; // tel: value, e.g. "+919901345153"
  phoneDisplay: string; // human-readable, e.g. "+91 99013 45153"
};

// Google Maps location for the clinic — "Ilona Endocrine and Wellness Centre",
// #2285, 14th Main, HAL 2nd Stage, Indiranagar, Bengaluru – 560 008.
// CLINIC_MAPS_URL opens the place page; CLINIC_MAPS_EMBED_URL is the keyless iframe embed.
export const CLINIC_MAPS_URL = "https://maps.app.goo.gl/QmWsNL3jgyySXuy69";
export const CLINIC_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Ilona+Endocrine+and+Wellness+Centre,+HAL+2nd+Stage,+Indiranagar,+Bengaluru&output=embed";

// Single source of truth for the doctors' direct lines, listed in site order.
export const DOCTOR_CONTACTS: DoctorContact[] = [
  {
    name: "Dr. Pournami P",
    specialty: "Dermatology",
    phone: "+919901345153",
    phoneDisplay: "+91 99013 45153",
  },
  {
    name: "Dr. Kunal Gupta",
    specialty: "Endocrinology",
    phone: "+919686629759",
    phoneDisplay: "+91 96866 29759",
  },
];
