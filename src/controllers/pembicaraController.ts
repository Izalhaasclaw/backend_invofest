import { Request, Response } from "express";
import { Pembicara } from "../types/pembicara";

let pembicara: Pembicara[] = [];

//1 menapilkan list pembicara
export const getPembicara = (req : Request, res : Response) => {
    res.json(pembicara);
};

//2 menyimpan data pembicara
export const createPembicara = (req : Request, res : Response) => {
    const { name, role, foto } = req.body;

    //buat validasi sederhana, apabila nama belum diisi
        if (!name) {
            res.status(500).json({ message: "Nama pembicara harus diisi" });
        }
    
        // jika validasi berhasil
        const newPembicara: Pembicara = {
            id: Date.now(),
            name: name,
            role: role,
            foto: foto,
        };
    
        // jika sudah disusun, simpan ke array/database
        pembicara.push(newPembicara);
    
        // jika data berhasil disimpan 
        res.status(200).json({message: "Data berhasil disimpan", pembicara: newPembicara});
};

//3 menampilkan data pembicara berdasarkan id
export const showPembicara = (req : Request, res : Response) => {};

//4 mengupdate data pembicara
export const updatePembicara = (req : Request, res : Response) => {};

//5 menghapus data pembicara
export const deletePembicara = (req : Request, res : Response) => {};
