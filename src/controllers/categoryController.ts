import { Request, Response } from "express";
import { Category } from "../types/category";
import { prisma } from "../lib/db";

let categories: Category[] = [];

//1 menapilkan list category
export const getCategories = async (req : Request, res : Response) => {
    
    try{

        const allEvents = await prisma.category.findMany({
            orderBy: {
                createdAt: "desc",
            },        
        });

        res.json(allEvents);       
    }catch (error) {

        res.status(500).json({
            message: "Gagal mengambil data event",
            error,
        });
    }
};

//2 menyimpan data category
export const createCategory = async (req : Request, res : Response) => {
    const { name, createdAt } = req.body;
        //buat validasi sederhana, apabila nama belum diisi
        if (!name !) {
            res.status(500).json({ message: "Nama category dan createdAt harus diisi" });
        }
        // jika validasi berhasil
        const newCategory = await prisma.category.create({
            data: {
                name,
                createdAt,
            },
        })

        res.status(200).json(newCategory);
};



//3 menampilkan data category berdasarkan id
export const showCategory = (req : Request, res : Response) => {};

//4 mengupdate data category
export const updateCategory = (req : Request, res : Response) => {};

//5 menghapus data category
export const deleteCategory = (req : Request, res : Response) => {};
