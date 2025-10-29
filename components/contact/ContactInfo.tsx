import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function ContactInfo() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <MapPin className="text-green-400 mt-1 shrink-0" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-400 text-sm">123 Digital Avenue, Tech City, SL</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone className="text-green-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-400 text-sm">+000 999 888 777</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Mail className="text-green-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-400 text-sm">evoc@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Facebook className="text-green-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Facebook</h3>
            <p className="text-gray-400 text-sm">EVOC Digital</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Instagram className="text-green-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Instagram</h3>
            <p className="text-gray-400 text-sm">@evoc_digital</p>
          </div>
        </div>

        <div className="mt-8">
          <iframe
              title="EVOC Digital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63327.25931624964!2d79.8149796!3d6.9218375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25965c9f0d3df%3A0x8d8d6b20e0f6b76!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1730123900000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale"
            ></iframe>
        </div>
      </div>
    </div>
  );
}