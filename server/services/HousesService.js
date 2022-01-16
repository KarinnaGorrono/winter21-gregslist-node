import { dbContext } from "../db/DbContext";

class HousesService {
    async getAll() {
        const foundHouses = await dbContext.Houses.find().populate('creator', 'name picture')
        return foundHouses
    }
}

export const housesService = new HousesService()