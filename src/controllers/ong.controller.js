import { Ong } from '../models/ong.models.js'; 
import fs from 'fs';

let ong;
try {
  const data = fs.readFileSync('./ong.json');
  const ongData = JSON.parse(data);

  ong = new Ong(ongData.phone, ongData.address, ongData.email, ongData.name); 
} catch (error) {
  console.error("Erro ao ler o arquivo ", error);
}


export const getOng = () => {
  return ong;
}

export const updateOng = (req) => {
  if (req.phone) {
    ong.phone = req.phone;
  }
  if (req.name) {
    ong.name = req.name;
  }
  if (req.email) {
    ong.email = req.email;
  }}


