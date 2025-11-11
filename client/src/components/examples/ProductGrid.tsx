import ProductGrid from '../ProductGrid';
import casualtiesImg from '@assets/generated_images/Casualties_band_t-shirt_design_fb471175.png';
import deadKennedsImg from '@assets/generated_images/Dead_Kennedys_shirt_design_ac6edf07.png';
import rancidImg from '@assets/generated_images/Rancid_band_t-shirt_bbfe9285.png';
import misfitsImg from '@assets/generated_images/Misfits_skull_t-shirt_d9340758.png';
import blackFlagImg from '@assets/generated_images/Black_Flag_logo_shirt_678bf405.png';
import ramonesImg from '@assets/generated_images/Ramones_seal_t-shirt_84a94938.png';

export default function ProductGridExample() {
  const products = [
    { id: '1', name: 'Riot Shield', price: 28, image: casualtiesImg, band: 'THE CASUALTIES' },
    { id: '2', name: 'Anarchy Now', price: 30, image: deadKennedsImg, band: 'DEAD KENNEDYS' },
    { id: '3', name: 'Street Punk', price: 29, image: rancidImg, band: 'RANCID' },
    { id: '4', name: 'Dead Skull', price: 32, image: misfitsImg, band: 'MISFITS' },
    { id: '5', name: 'Four Bars', price: 27, image: blackFlagImg, band: 'BLACK FLAG' },
    { id: '6', name: 'Presidential Seal', price: 31, image: ramonesImg, band: 'RAMONES' },
  ];

  return (
    <ProductGrid 
      products={products}
      onAddToCart={(p) => console.log('Added:', p)}
    />
  );
}
