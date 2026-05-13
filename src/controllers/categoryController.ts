import { Request, Response } from "express";
import { Category } from "../types/category";

let categories: Category[] = [];

//1 menapilkan list category
export const getCategories = (req : Request, res : Response) => {
    res.json(categories);
};

//2 menyimpan data category
export const createCategory = (req : Request, res : Response) => {
    const { name } = req.body;
    
        //buat validasi sederhana, apabila nama belum diisi
        if (!name) {
            res.status(500).json({ message: "Nama category harus diisi" });
        }
    
        // jika validasi berhasil
        const newCategories: Category = {
            id: Date.now(),
            name: name,
        };
    
        // jika sudah disusun, simpan ke array/database
        categories.push(newCategories);
    
        // jika data berhasil disimpan 
        res.status(200).json({message: "Data berhasil disimpan", category: newCategories});
};



//3 menampilkan data category berdasarkan id
export const showCategory = (req : Request, res : Response) => {};

//4 mengupdate data category
export const updateCategory = (req : Request, res : Response) => {};

//5 menghapus data category
export const deleteCategory = (req : Request, res : Response) => {};
