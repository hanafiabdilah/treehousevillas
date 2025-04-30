import { WHATSAPP } from "@/data/constant";
import { Villa } from "@/types/villa";

export const getClearWhatsappNumber = () => {
    return WHATSAPP.replace(/\D/g, '');
}

export const getWhatsappUrl = () => {
    return 'https://wa.me/' + getClearWhatsappNumber();
}

export const generateWhatsappVillaUrl = (villa: Villa) => {
    const message = `Halo, saya tertarik dengan ${villa.name}`;

    return `${getWhatsappUrl()}?text=${encodeURIComponent(message)}`;
};