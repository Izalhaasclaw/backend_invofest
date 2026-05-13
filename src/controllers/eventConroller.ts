import { Request, Response } from "express";
import { Event } from "../types/event";

let events: Event[] = [];

//1
export const getEvent = (req : Request, res : Response) => {
    res.json(events);
};

//2
export const createEvent = (req : Request, res : Response) => {
    const { name, date, location, description } = req.body;

    //buat validasi sederhana, apabila nama belum diisi
    if (!name) {
        res.status(500).json({ message: "Nama event harus diisi" });
    }

    // jika validasi berhasil
    const newEvent: Event = {
        id: Date.now(),
        name: name,
        date: date,
        location: location,
        description: description,
    };

    // jika sudah disusun, simpan ke array/database
    events.push(newEvent);

    // jika data berhasil disimpan 
    res.status(200).json({message: "Data berhasil disimpan", event: newEvent});
};

//3
export const getShowEvent = (req : Request, res : Response) => {};

//4
export const updateEvent = (req : Request, res : Response) => {};

//5
export const deleteEvent = (req : Request, res : Response) => {};
